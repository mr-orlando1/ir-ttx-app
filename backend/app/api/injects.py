from flask import Blueprint, request
from ..extensions import db
from ..models import Inject
from ..schemas import inject_schema, injects_schema

bp = Blueprint('injects', __name__, url_prefix='/api/injects')

@bp.get('/')
def list_injects():
    return injects_schema.dump(Inject.query.order_by(Inject.time).all()), 200

@bp.post('/')
def create_inject():
    data = inject_schema.load(request.json)
    inj = Inject(**data)
    db.session.add(inj)
    db.session.commit()
    return inject_schema.dump(inj), 201
