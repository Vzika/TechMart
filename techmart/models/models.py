from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from . import db


# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    # orders = db.relationship('Order', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.username}>'


# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, default=1)
    # orders = db.relationship('Order', backref='user',
    #                          lazy=True)  # incase of debugging

    def __repr__(self):
        return f'<Product {self.name}>'


# Order Model
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    # product_id = db.Column(
    #     db.Integer, db.ForeignKey('product.id'), nullable=False)
    product_id = db.Column(db.Integer, nullable=False)  # incase of debugging
    created_at = db.Column(db.DateTime, default=datetime.now)
