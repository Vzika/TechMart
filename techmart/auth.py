from flask import Blueprint, request, jsonify, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from . import db
import uuid
from functools import wraps


def token_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing'}), 403
        token = token.split(' ')[1] if len(token.split(' ')[1]) > 1 else None
        if not token:
            return jsonify({'message': 'Token is missing'}), 403

        user = User.query.filter_by(session_token=token).first()
        if not user:
            return jsonify({'message': 'Invalid token'}), 403
        login_user(user)
        return f(*args, **kwargs)

    return wrapper


auth = Blueprint('auth', __name__)


@auth.route('/user', methods=['GET'])
# @login_required
@token_required
def getUser():
    return jsonify({'username': current_user.username,
                    'email': current_user.email,
                    'id': current_user.id}), 200


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
    session_token = str(uuid.uuid4())

    new_user = User(username=username, email=email,
                    password=hashed_password, session_token=session_token)
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
    return jsonify({'message': 'Login successful', 'session_token': user.session_token})


@auth.route('/logout', methods=['POST'])
@token_required
def logout():
    logout_user()
    return jsonify({'message': 'Logout successful'})
