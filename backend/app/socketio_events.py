import time
import random

def emit_risk_updates(socketio):
    messages = [
        {"severity": "low", "message": "Firewall updated"},
        {"severity": "medium", "message": "Login attempt detected"},
        {"severity": "high", "message": "Ransomware signature triggered"}
    ]
    while True:
        socketio.emit("risk_update", random.choice(messages))
        time.sleep(5)