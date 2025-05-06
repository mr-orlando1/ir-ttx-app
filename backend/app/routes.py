from flask import Blueprint, jsonify

main = Blueprint("main", __name__)

@main.route("/api/health")
def health_check():
    return jsonify({"status": "ok"})

def register_routes(app):
    app.register_blueprint(main)