from flask_socketio import SocketIO
import random
import time
import threading

socketio = SocketIO(cors_allowed_origins="*")

def emit_risk_updates():
    messages = [
        "New alert: Unauthorized login attempt 🚨",
        "Compliance check passed ✅",
        "Risk score updated: Moderate 🔄",
        "New claim filed by Acme Corp 📝",
        "Security audit flagged 2 issues 🛡️",
    ]
    while True:
        socketio.emit('risk_update', random.choice(messages))
        time.sleep(10)  # send every 10 seconds

def start_background_risk_feed():
    thread = threading.Thread(target=emit_risk_updates)
    thread.daemon = True
    thread.start()
