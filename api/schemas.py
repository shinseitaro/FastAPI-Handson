from typing import List
from pydantic import BaseModel


class BaseCat(BaseModel):
    filepath: str
    message: str
    code: int


class CreateCat(BaseCat):
    pass


class PutCat(BaseCat):
    pass


class Cat(BaseCat):
    id: int

    class Config:
        orm_mode = True


class BaseStatus(BaseModel):
    message: str


class CreateStatus(BaseStatus):
    code: int
    pass


class PutStatus(BaseStatus):
    pass


class Status(BaseStatus):
    id: int
    code: int
    cats: List[Cat] = []

    class Config:
        orm_mode = True

