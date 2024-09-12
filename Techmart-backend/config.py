import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') or 'mysql+pymysql://user:password@localhost/techmart'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

