from flask import Blueprint

from .auth import auth
from .product import product
from .order import order


def register_routes(app):
    app.register_blueprint(auth, url_prefix='/auth')
    app.register_blueprint(product, url_prefix='/products')
    app.register_blueprint(order, url_prefix='/orders')
