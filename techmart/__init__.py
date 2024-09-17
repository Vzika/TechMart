from flask import Flask
from .models import db
from .blueprints.review import review_bp
from .blueprints.cart import cart_bp
from .blueprints.wishlist import wishlist_bp
from .blueprints.payment import payment_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    db.init_app(app)

    app.register_blueprint(review_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(wishlist_bp)
    app.register_blueprint(payment_bp)

    return app

