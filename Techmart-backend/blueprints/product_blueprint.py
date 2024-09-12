from flask import Blueprint, jsonify, request
from models.product import Product
from app import db

product_blueprint = Blueprint('product_blueprint', __name__)

@product_blueprint.route('/api/products', methods=['GET'])
def get_all_products():
    products = Product.query.all()
    return jsonify([{'id': p.id, 'name': p.name, 'price': p.price} for p in products])

@product_blueprint.route('/api/products/<int:id>', methods=['GET'])
def get_product_by_id(id):
    product = Product.query.get_or_404(id)
    return jsonify({'id': product.id, 'name': product.name, 'price': product.price})

@product_blueprint.route('/api/products', methods=['POST'])
def create_product():
    data = request.json
    new_product = Product(name=data['name'], price=data['price'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product created successfully"}), 201

@product_blueprint.route('/api/products/<int:id>', methods=['PUT'])
def update_product(id):
    # Implement update product logic
    pass

@product_blueprint.route('/api/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    # Implement delete product logic
    pass

