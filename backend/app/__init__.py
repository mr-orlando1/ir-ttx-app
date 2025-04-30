from flask import Flask
from .socketio_events import socketio, start_background_risk_feed

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secret!'

    @app.route('/api/ping')
    def ping():
        return {'status': 'IR TTX API is live!'}

    start_background_risk_feed()
    socketio.init_app(app)
    return app
