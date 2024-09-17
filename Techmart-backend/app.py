from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db = SQLAlchemy(app)
login_manager = LoginManager(app)

# Import blueprints
from views.auth import auth_bp
from views.product_views import product_bp
from views.category_views import category_bp
from views.order_views import order_bp
from views.review_views import review_bp
from views.cart_views import cart_bp 
from views.wishlist_views import wishlist_bp
from views.payment_views import payment_bp

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(product_bp)
app.register_blueprint(category_bp)
app.register_blueprint(order_bp)
app.register_blueprint(review_bp)   
app.register_blueprint(cart_bp)   
app.register_blueprint(wishlist_bp)
app.register_blueprint(payment_bp)

if __name__ == '__main__':
    app.run(debug=True)

