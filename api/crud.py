from sqlalchemy.orm import Session
from . import models, schemas

"""
cats
"""


def select_cats(db: Session):
    # SELECT * FROM cats
    cats = db.query(models.Cat).all()
    return cats


def select_cat_by_id(id: int, db: Session):
    cat = db.query(models.Cat).filter(models.Cat.id == id).first()
    return cat


def insert_cat(request: schemas.CreateCat, db: Session):
    new_cat = models.Cat(**request.dict())
    db.add(new_cat)
    db.commit()
    db.refresh(new_cat)
    return new_cat


def update_id_cat(id: int, request: schemas.PutCat, db: Session):
    # .get() は Cat オブジェクト
    cat = db.query(models.Cat).get(id)

    cat.filepath = request.filepath
    cat.message = request.message
    cat.code = request.code
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return cat


def delete_cat(id: int, db: Session):
    cat = db.query(models.Cat).get(id)
    db.delete(cat)
    db.commit()
    return {"message": f"{id} cat has been deleted. Bye!"}


"""
status
"""


def select_all_status(db: Session):
    all_status = db.query(models.StatusCode).all()
    return all_status


def select_status_by_code(code: int, db: Session):
    status = db.query(models.StatusCode).filter(models.StatusCode.code == code).first()
    return status


def insert_status(request: schemas.CreateStatusCode, db: Session):
    new_status = models.StatusCode(**request.dict())
    db.add(new_status)
    db.commit()
    db.refresh(new_status)
    return new_status


def update_code_status(code: int, request: schemas.PutStatusCode, db: Session):
    status = db.query(models.StatusCode).filter(models.StatusCode.code == code).first()
    status.message = request.message
    db.commit()
    db.refresh(status)

    return status


def delete_status(code: int, db: Session):
    status = db.query(models.StatusCode).filter(models.StatusCode.code == code).first()
    db.delete(status)
    db.commit()
    return {"message": f"{code} has been deleted"}

