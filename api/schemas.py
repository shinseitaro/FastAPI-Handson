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


class BaseStatusCode(BaseModel):
    message: str


class CreateStatusCode(BaseStatusCode):
    code: int


class PutStatusCode(BaseStatusCode):
    pass


class StatusCode(BaseStatusCode):
    id: int
    code: int
    cats: List[Cat] = []

    class Config:
        orm_mode = True

