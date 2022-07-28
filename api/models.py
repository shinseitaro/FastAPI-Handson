from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


class StatusCode(Base):
    __tablename__ = "statuscodes"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(Integer, unique=True)
    message = Column(String)

    # Cat クラスの statuscode プロパティに関連付けることによって、
    # この属性(cats) Cat のデータに StatusCode データオブジェクトからアクセス出来る
    # 例えば、 a_status という StatusCodeクラスのオブジェクトがあったとしたら、
    # a_status.cats で、Cat 側が 外部キー(statuscodes.code) で紐づけているデータにアクセス出来る

    cats = relationship("Cat", back_populates="statuscode")


class Cat(Base):
    __tablename__ = "cats"
    id = Column(Integer, primary_key=True, index=True)
    filepath = Column(String)
    message = Column(String)
    code = Column(Integer, ForeignKey("statuscodes.code"))

    statuscode = relationship("StatusCode", back_populates="cats")

