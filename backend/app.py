from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///irttx.db'
app.config['SECRET_KEY'] = 'your-secret-key'

CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
db = SQLAlchemy(app)

from models import *

@app.route('/')
def home():
    return {'status': 'IR TTX App Backend Running'}

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=4000, debug=True)