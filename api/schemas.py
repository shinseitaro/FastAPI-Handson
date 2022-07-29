from typing import List
from pydantic import BaseModel, HttpUrl


class BaseCat(BaseModel):
    filepath: HttpUrl
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
    code: int


class CreateStatusCode(BaseStatusCode):
    pass


class PutStatusCode(BaseStatusCode):
    pass


class StatusCode(BaseStatusCode):
    id: int
    cats: List[Cat] = []

    class Config:
        orm_mode = True

