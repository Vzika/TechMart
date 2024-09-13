from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField
from wtforms.validators import DataRequired, Length, Email

from .user import UserForm
from .product import ProductForm
from .category import CategoryForm
from .order import OrderForm
from .review import ReviewForm
from .cart import CartForm
from .wishlist import WishlistForm
from .payment import PaymentForm

# Optionally, you can create a list of all forms for easier access
__all__ = [
    'UserForm',
    'ProductForm',
    'CategoryForm',
    'OrderForm',
    'ReviewForm',
    'CartForm',
    'WishlistForm',
    'PaymentForm',
]

