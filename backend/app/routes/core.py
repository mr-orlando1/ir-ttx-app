from flask import Blueprint, jsonify

core = Blueprint('core', __name__)

@core.route('/api/ping')
def ping():
    return jsonify({'status': 'IR TTX API is live!'})
