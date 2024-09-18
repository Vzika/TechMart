from flask import Blueprint, request, jsonify, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from . import db

auth = Blueprint('auth', __name__)


@auth.route('/user', methods=['GET'])
@login_required
def get_user_data():
    # Assuming your User model has fields like id, email, and name
    user_data = {
        'id': current_user.id,
        'email': current_user.email,
        'username': current_user.username
    }
    return jsonify({'user': user_data}), 200


@auth.route('/signUp', methods=['POST'])
def signUp():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({'message': 'User already exists'})

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'})


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid email or password'})

    login_user(user)
    # Extract session cookie from the response headers
    session_cookie = request.cookies.get('session')

    return jsonify({
        'message': 'Login successful',
        'cookies': {
            'session': session_cookie
        }})


@ auth.route('/logout', methods=['POST'])
@ login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logout successful'})
