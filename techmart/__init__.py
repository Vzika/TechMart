from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_app():
	app = Flask(__name__)
	app.config['SECRET_KEY'] = 'zika1997'
	app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:admin@localhost/techmart'
	
	
	db.init_app(app)	

	return app

