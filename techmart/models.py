from . import db
from flask_login import UserMixin
import uuid


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Product {self.name}>'


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    customer_email = db.Column(db.String(100), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(50), default='Pending')

    product = db.relationship('Product', backref='orders')

    def __repr__(self):
        return f'<Order {self.id} for {self.customer_name}>'


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), nullable=False)
    customer_name = db.Column(db.String(100), nullable=False)
    review_text = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    product = db.relationship('Product', backref='reviews')

    def __repr__(self):
        return f'<Review by {self.customer_name} for {self.product.name}>'


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), nullable=False)
    customer_name = db.Column(db.String(100), nullable=False)
    comment_text = db.Column(db.Text, nullable=False)

    product = db.relationship('Product', backref='comments')

    def __repr__(self):
        return f'<Comment by {self.customer_name} for {self.product.name}>'


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    session_token = db.Column(db.String(36), unique=True, nullable=True)
