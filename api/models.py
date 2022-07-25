from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


class StatusCode(Base):
    __tablename__ = "statuscodes"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(Integer, unique=True)
    message = Column(String)

    cats = relationship("Cat", back_populates="statuscode")


class Cat(Base):
    __tablename__ = "cats"
    id = Column(Integer, primary_key=True, index=True)
    filepath = Column(String)
    message = Column(String)
    code = Column(Integer, ForeignKey("statuscodes.code"))

    statuscode = relationship("StatusCode", back_populates="cats")

