from typing import List
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/cat")
def post_cat(request: schemas.CreateCat, db: Session = Depends(get_db)):
    return crud.insert_cat(request=request, db=db)


@app.get("/cat")
def get_cats(db: Session = Depends(get_db)):
    return crud.select_cats(db=db)


@app.put("/cat/{id}")
def put_id_cat(id: int, request: schemas.PutCat, db: Session = Depends(get_db)):
    return crud.update_id_cat(id=id, request=request, db=db)


@app.delete("/cat/{id}")
def delete_cat(id: int, db: Session = Depends(get_db)):
    return crud.delete_cat(id=id, db=db)


@app.get("/status", response_model=List[schemas.Status])
def get_all_status(db: Session = Depends(get_db)):
    return crud.select_all_status(db=db)


@app.get("/status/{code}", response_model=List[schemas.Status])
def get_status_by_code(code: int, db: Session = Depends(get_db)):
    return crud.select_status_by_code(code=code, db=db)


@app.post("/status")
def post_status(request: schemas.CreateStatus, db: Session = Depends(get_db)):
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
    code: int, request: schemas.PutStatus, db: Session = Depends(get_db)
):
    return crud.update_code_status(code=code, request=request, db=db)

