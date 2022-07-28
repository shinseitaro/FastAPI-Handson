from fastapi import FastAPI

from typing import Union, Optional, List
from pydantic import BaseModel

app = FastAPI()


@app.get("/")  # パスオペレーションデコレータ
def root():  # パスオペレーション関数
    return {"message": "hello world"}


@app.get("/me")  # パスオペレーションデコレータ
def me():  # パスオペレーション関数
    return {"message": "it's me!"}


@app.get("/user/{id}")
def get_user(id: int):
    return {"user": id}


@app.get("/user/")
def get_user_lang(name: str, lang: Union[str, None] = None):
    return {"name": name, "lang": lang}


@app.get("/id/{id}/details/")
def get_user_details(id: int, keyword: str):
    return {"id": id, "keyword": keyword}


data = [
    {"id": 1, "name": "Datha"},
    {"id": 2, "name": "Fidelity"},
    {"id": 3, "name": "Rani"},
]


class User(BaseModel):
    id: int
    name: str


class ShowUser(BaseModel):
    name: str


@app.post("/user/", response_model=List[ShowUser])
def add_user(request: User):
    data.append({"id": request.id, "name": request.name})
    return data

