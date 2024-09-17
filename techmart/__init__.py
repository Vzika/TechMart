from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()

def create_app():
	app = Flask(__name__)
	app.config['SECRET_KEY'] = 'zika1997'
	app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:admin@localhost/techmart'
	
	
	db.init_app(app)
	
	from .api import bp
	from .auth import auth

	app.register_blueprint(bp, url_prefix='/') #for route
	app.register_blueprint(auth, url_prefix='/') # for auth
 
	login_manager = LoginManager()
	login_manager.login_view = 'auth.login'
	login_manager.init_app(app)
 
	from .models import User

	@login_manager.user_loader
	def load_user(user_id):
		return User.query.get(int(user_id))

	return app

