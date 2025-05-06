from flask import Blueprint, request, jsonify, abort
from ..extensions import db
from ..models import Participant
from ..schemas import participant_schema, participants_schema

bp = Blueprint('participants', __name__, url_prefix='/api/participants')

@bp.get('/')
def list_participants():
    participants = Participant.query.all()
    return participants_schema.dump(participants), 200

@bp.post('/')
def create_participant():
    data = participant_schema.load(request.json)
    p = Participant(**data)
    db.session.add(p)
    db.session.commit()
    return participant_schema.dump(p), 201

@bp.put('/<uuid:pid>')
def update_participant(pid):
    p = Participant.query.get_or_404(pid)
    data = participant_schema.load(request.json, partial=True)
    for k, v in data.items():
        setattr(p, k, v)
    db.session.commit()
    return participant_schema.dump(p), 200

@bp.delete('/<uuid:pid>')
def delete_participant(pid):
    p = Participant.query.get_or_404(pid)
    db.session.delete(p)
    db.session.commit()
    return '', 204
