
from flask import Flask, jsonify
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from techmart.models import db
from techmart.routes import register_routes


def create_app():
    app = Flask(__name__)

    # CORS(app, supports_credentials=True, origins=["http://localhost:3000"])
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://user:user@localhost/techmart'
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://sql8731929:qiwYvQAVYT@sql8.freemysqlhosting.net/sql8731929'
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

    # Initialize extensions
    db.init_app(app)
    jwt = JWTManager(app)

    # Register Routes
    register_routes(app)

    @app.route('/', methods=['GET'])
    def welcome():
        return jsonify({'message': 'Welcome to TechMart'})

    return app
