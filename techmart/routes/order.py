from flask import Blueprint, request, jsonify
from models import db, Order
from flask_jwt_extended import jwt_required, get_jwt_identity

order = Blueprint('order', __name__)


# Add items to cart (basic example, can be expanded to Cart model)
@order.route('/cart/add', methods=['POST'])
@jwt_required()
def add_to_cart():
    # Logic for adding product to user's cart
    return jsonify({"message": "Added to cart!"}), 200


# Get all orders for the logged-in user
@order.route('/', methods=['GET'])
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user_id).all()
    return jsonify([{"id": o.id, "products": o.products, "total_price": o.total_price} for o in orders]), 200


# Checkout route (example, more logic needed)
@order.route('/checkout', methods=['POST'])
@jwt_required()
def checkout():
    # Logic for creating a new order from cart items
    return jsonify({"message": "Order created!"}), 201
