from flask import Blueprint, jsonify, request
from models.user import User
from app import db

user_blueprint = Blueprint('user_blueprint', __name__)

@user_blueprint.route('/api/users/register', methods=['POST'])
def register_user():
    data = request.json
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@user_blueprint.route('/api/users/login', methods=['POST'])
def login_user():
    # Implement login logic
    pass

@user_blueprint.route('/api/users/profile', methods=['GET'])
def get_user_profile():
    # Implement get user profile logic
    pass

@user_blueprint.route('/api/users/profile', methods=['PUT'])
def update_user_profile():
    # Implement update user profile logic
    pass

@user_blueprint.route('/api/users/<int:id>', methods=['DELETE'])
def delete_user_account(id):
    # Implement delete user account logic
    pass

