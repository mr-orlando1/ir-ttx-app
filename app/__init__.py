# app/__init__.py
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from .models import db

socketio = SocketIO(cors_allowed_origins="*")

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super-secret-key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///irttx.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    CORS(app)
    socketio.init_app(app)

    with app.app_context():
        from app.routes.core import core
        app.register_blueprint(core)

        from app import sockets  # Import your live SocketIO events

        db.create_all()

    return app