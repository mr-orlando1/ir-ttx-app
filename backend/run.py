from flask import Flask
from flask_socketio import SocketIO
from app.routes import register_routes
from app.socketio_events import emit_risk_updates
import threading

app = Flask(__name__)
app.config["SECRET_KEY"] = "supersecret"
socketio = SocketIO(app, cors_allowed_origins="*")

register_routes(app)

# Start risk update thread
risk_thread = threading.Thread(target=emit_risk_updates, args=(socketio,))
risk_thread.daemon = True
risk_thread.start()

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=4100, debug=False)