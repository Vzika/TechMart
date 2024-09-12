from flask import Blueprint, render_template, redirect, url_for, flash
from flask_login import login_user, logout_user
from forms.user_forms import RegistrationForm, LoginForm
from models.user import User
from app import db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/users/register', methods=['POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        new_user = User(username=form.username.data, password=form.password.data)
        db.session.add(new_user)
        db.session.commit()
        return {"message": "User registered successfully"}, 201
    return {"message": "Registration failed"}, 400

@auth_bp.route('/api/users/login', methods=['POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.password == form.password.data:  # Use hashed passwords in production
            login_user(user)
            return {"message": "Login successful"}, 200
        return {"message": "Login failed"}, 401

@auth_bp.route('/api/users/profile', methods=['GET'])
def get_user_profile():
    # Implement logic to retrieve user profile
    pass

@auth_bp.route('/api/users/profile', methods=['PUT'])
def update_user_profile():
    # Implement logic to update user profile
    pass

@auth_bp.route('/api/users/<int:id>', methods=['DELETE'])
def delete_user_account(id):
    # Implement logic to delete user account
    pass

