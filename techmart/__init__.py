from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = 'zika1997'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://sql8731929:qiwYvQAVYT@sql8.freemysqlhosting.net/sql8731929'

    db.init_app(app)

    from .api import bp
    from .auth import auth

    app.register_blueprint(bp, url_prefix='/')  # for route
    app.register_blueprint(auth, url_prefix='/')  # for auth

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from .models import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    return app
