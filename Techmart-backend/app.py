from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
login_manager = LoginManager(app)

from views.auth import auth_bp
from views.product_views import product_bp
from views.category_views import category_bp
from views.order_views import order_bp

app.register_blueprint(auth_bp)
app.register_blueprint(product_bp)
app.register_blueprint(category_bp)
app.register_blueprint(order_bp)

if __name__ == '__main__':
    app.run(debug=True)


