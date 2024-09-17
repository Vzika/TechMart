from flask import Blueprint

# Create a blueprint for the views
auth_bp = Blueprint('auth', __name__)
product_bp = Blueprint('product', __name__)
category_bp = Blueprint('category', __name__)
order_bp = Blueprint('order', __name__)

# Import the view functions to register the routes
from .auth import *
from .product_views import *
from .category_views import *
from .order_views import *

