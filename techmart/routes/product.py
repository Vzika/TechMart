from flask import Blueprint, request, jsonify
from techmart.models import db, Product
from flask_jwt_extended import jwt_required

product = Blueprint('product', __name__)


# Get All Products
@product.route('/', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{"id": p.id, "name": p.name, "price": p.price, "description": p.description} for p in products]), 200


# Get Product by ID
@product.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify({"id": product.id, "name": product.name, "price": product.price, "description": product.description}), 200


# Add Product (Admin functionality)
@product.route('/', methods=['POST'])
@jwt_required()
def add_product():
    data = request.get_json()
    new_product = Product(
        name=data['name'], price=data['price'], description=data['description'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({
        "product": {
            "id": new_product.id,
            "name": new_product.name,
            "price": new_product.price,
            "description": new_product.description
        },
        "message": "Product added!"
    }), 201


# Not Needed At The Moment
# Update Product (Admin functionality)
# @product.route('/<int:product_id>', methods=['PUT'])
# @jwt_required()
# def update_product(product_id):
#     product = Product.query.get_or_404(product_id)
#     data = request.get_json()
#     product.name = data['name']
#     product.price = data['price']
#     product.stock = data['stock']
#     db.session.commit()
#     return jsonify({"message": "Product updated!"}), 200


# Delete Product (Admin functionality)
@product.route('/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted!"}), 200
