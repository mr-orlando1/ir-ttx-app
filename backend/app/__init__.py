
from flask import Flask
from .extensions import db, login_manager, socketio
from flask_migrate import Migrate
import os

def create_app():
    app = Flask(__name__, instance_relative_config=False)

    # Config
    app.config.from_object('config.Config')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialise extensions
    db.init_app(app)
    migrate = Migrate(app, db)
    login_manager.init_app(app)
    socketio.init_app(app)

    # Blueprints / routes
    from .routes import register_routes
    register_routes(app)

    # SocketIO background tasks
    from .socketio_events import register_socket_events
    register_socket_events(socketio)

    @app.route('/health')
    def health():
        return {"status": "ok"}

    return app
