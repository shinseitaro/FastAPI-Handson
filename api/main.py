import csv
from typing import List
from fastapi import FastAPI, Depends, HTTPException
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# リクエストごとに独立したデータベースセッションを持ち、リクエスト終了後にそれを閉じ、
# 次のリクエストのために新しいセッションが作成 という動作を行うための関数
# くわしくは https://zenn.dev/sh0nk/books/537bb028709ab9/viewer/b92ab0#di
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/cat")
def post_cat(request: schemas.CreateCat, db: Session = Depends(get_db)):
    return crud.insert_cat(request=request, db=db)


@app.get("/cat", response_model=List[schemas.Cat])
def get_cats(db: Session = Depends(get_db)):
    return crud.select_cats(db=db)


@app.put("/cat/{id}")
def put_id_cat(id: int, request: schemas.PutCat, db: Session = Depends(get_db)):
    return crud.update_id_cat(id=id, request=request, db=db)


@app.delete("/cat/{id}")
def delete_cat(id: int, db: Session = Depends(get_db)):
    return crud.delete_cat(id=id, db=db)


@app.get("/status", response_model=List[schemas.StatusCode])
def get_all_status(db: Session = Depends(get_db)):
    return crud.select_all_status(db=db)


@app.get("/status/{code}", response_model=schemas.StatusCode)
def get_status_by_code(code: int, db: Session = Depends(get_db)):
    return crud.select_status_by_code(code=code, db=db)


@app.post("/status")
def post_status(request: schemas.CreateStatusCode, db: Session = Depends(get_db)):
    checker = get_status_by_code(request.code, db=db)
    if checker:
        raise HTTPException(
            status_code=400, detail=f"{request.code} has been already registered"
        )
    return crud.insert_status(request=request, db=db)


@app.delete("/status/{code}")
def delete_status_by_code(code: int, db: Session = Depends(get_db)):
    return crud.delete_status(code=code, db=db)


@app.put("/status/{code}")
def put_status_code(
    code: int, request: schemas.PutStatusCode, db: Session = Depends(get_db)
):
    return crud.update_code_status(code=code, request=request, db=db)


@app.on_event("startup")
def startup_event():
    status_data_file = "./data/statuscode.csv"
    cat_data_file = "./data/cat.csv"
    db = Session(engine)
    # dataが入っているかどうか確認
    status_result = db.execute(db.query(models.StatusCode)).first()
    cat_result = db.execute(db.query(models.Cat)).first()

    if not status_result:
        with open(status_data_file) as f:
            reader = csv.DictReader(f)
            data = list(reader)
            for d in data:
                db.add(models.StatusCode(**d))
            db.commit()

    if not cat_result:
        with open(cat_data_file) as f:
            reader = csv.DictReader(f)
            data = list(reader)
            for d in data:
                db.add(models.Cat(**d))
            db.commit()

    db.close()


app.mount(
    "/static", StaticFiles(directory="./democat/static", html=True), name="static"
)
