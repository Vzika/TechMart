from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, default=1)

    user = db.relationship('User', back_populates='cart_items')
    product = db.relationship('Product', back_populates='cart_items')

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cart_items = db.relationship('Cart', back_populates='user')

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cart_items = db.relationship('Cart', back_populates='product')

