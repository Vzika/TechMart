from flask_sqlalchemy import SQLAlchemy

# Initialize the database
db = SQLAlchemy()

# Import models
from .user import User
from .product import Product
from .category import Category
from .order import Order
from .review import Review
from .cart import Cart
from .wishlist import Wishlist
from .payment import Payment

# Optionally, you can define a function to create all tables
def create_all_tables():
    db.create_all()

