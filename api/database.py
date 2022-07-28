from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DBFILE = "sqlite:///./db.sqlite3"
# DBへの接続担当
engine = create_engine(DBFILE, echo=True, connect_args={"check_same_thread": False})
# DB への問い合わせ担当
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# テーブルクラスを作るための関数
Base = declarative_base()
