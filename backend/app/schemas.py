from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from .models import Participant, Inject

class ParticipantSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Participant
        load_instance = True

participant_schema = ParticipantSchema()
participants_schema = ParticipantSchema(many=True)

class InjectSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Inject
        load_instance = True

inject_schema = InjectSchema()
injects_schema = InjectSchema(many=True)
