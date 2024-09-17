from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Wishlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

    user = db.relationship('User', back_populates='wishlist_items')
    product = db.relationship('Product', back_populates='wishlist_items')

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    wishlist_items = db.relationship('Wishlist', back_populates='user')

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    wishlist_items = db.relationship('Wishlist', back_populates='product')

