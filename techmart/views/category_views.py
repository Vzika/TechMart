from flask import Blueprint, jsonify, request
from models.category import Category
from app import db

category_bp = Blueprint('category', __name__)

@category_bp.route('/api/categories', methods=['GET'])
def get_all_categories():
    categories = Category.query.all()
    return jsonify([{'id': c.id, 'name': c.name} for c in categories])

@category_bp.route('/api/categories', methods=['POST'])
def create_category():
    data = request.json
    new_category = Category(name=data['name'])
    db.session.add(new_category)
    db.session.commit()
    return {"message": "Category created successfully"}, 201

@category_bp.route('/api/categories/<int:id>', methods=['PUT'])
def update_category(id):
    # Implement update category logic
    pass

@category_bp.route('/api/categories/<int:id>', methods=['DELETE'])
def delete_category(id):
    # Implement delete category logic
    pass

