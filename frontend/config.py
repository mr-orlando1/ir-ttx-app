import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "CHANGE_ME")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "sqlite:///ir_ttx.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_COOKIE_SECURE = True
