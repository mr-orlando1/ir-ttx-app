
"""Blueprint registrations for the application."""
from flask import Blueprint

def register_routes(app):
    from .api import api_bp
    # add others as needed
    app.register_blueprint(api_bp, url_prefix='/api')
