from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from techmart.models import db, User

auth = Blueprint('auth', __name__)


# Register Route
@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'])
    new_user = User(
        username=data['username'], email=data['email'], password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        "user": {
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email
        },
        "message": "User registered successfully!"}), 201


# Login Route
@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password_hash, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify(message="Login Successful", access_token=access_token), 200
    return jsonify({"error": "Invalid credentials"}), 401


# Protected User Profile Route
@auth.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify(id=user_id, username=user.username, email=user.email), 200
