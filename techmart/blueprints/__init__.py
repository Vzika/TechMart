from flask import Blueprint

# Import individual blueprints
from .user import user_bp
from .product import product_bp
from .category import category_bp
from .order import order_bp
from .review import review_bp
from .cart import cart_bp
from .wishlist import wishlist_bp
from .payment import payment_bp

def register_blueprints(app):
    """Register all blueprints with the Flask app."""
    app.register_blueprint(user_bp)
    app.register_blueprint(product_bp)
    app.register_blueprint(category_bp)
    app.register_blueprint(order_bp)
    app.register_blueprint(review_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(wishlist_bp)
    app.register_blueprint(payment_bp)

