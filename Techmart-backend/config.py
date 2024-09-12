import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key_here'
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') or 'mysql+pymysql://user:password@localhost/techmart'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

