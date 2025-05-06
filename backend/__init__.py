from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_socketio import SocketIO

db = SQLAlchemy()
socketio = SocketIO(cors_allowed_origins="*")

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///irttx.db'
    app.config['SECRET_KEY'] = 'super-secret-key'
    CORS(app)
    db.init_app(app)
    socketio.init_app(app)

    # Register blueprints or routes here
    from .routes import register_routes
    register_routes(app)

    return app
