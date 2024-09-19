from flask import Blueprint, request, jsonify
from techmart.models import db, Orders
from flask_jwt_extended import jwt_required, get_jwt_identity

order = Blueprint('order', __name__)

# Not needed for now
# Add items to cart (basic example, can be expanded to Cart model)
# @order.route('/cart/add', methods=['POST'], strict_slashes=False)
# @jwt_required()
# def add_to_cart():
#     # Logic for adding product to user's cart
#     return jsonify({"message": "Added to cart!"}), 200


# Get all orders for the logged-in user
@order.route('/', methods=['GET', 'POST'], strict_slashes=False)
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()
    if request.method == 'GET':
        orders = Orders.query.filter_by(user_id=user_id).all()
        return jsonify([{"id": o.id, "products": o.products, "total_price": o.total_price} for o in orders]), 200

    elif request.method == 'POST':
        # Logic for creating a new order
        data = request.get_json()
        new_order = Orders(user_id=data['user_id'],
                           product_id=data['product_id'])
        db.session.add(new_order)
        db.session.commit()
        return jsonify({
            "order": {
                "id": new_order.id,
                "user_id": new_order.user_id,
                "product_id": new_order.product_id
            },
            "message": "Order created!"}), 200


# Not needed for now
# Checkout route (example, more logic needed)
# @order.route('/checkout', methods=['POST'], strict_slashes=False)
# @jwt_required()
# def checkout():
#     # Logic for creating a new order from cart items
#     return jsonify({"message": "Order created!"}), 201
