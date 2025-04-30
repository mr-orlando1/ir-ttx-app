"""scripts/seed.py – One-off data seeder for IR-TTX.
Run with:  docker compose exec web python scripts/seed.py"""
from __future__ import annotations
import os, sys
from datetime import datetime, timedelta
ROOT_DIR = os.path.dirname(os.path.dirname(__file__))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)
from app import create_app, db
from app.models import User, Scenario, Inject, Exercise
app = create_app()
app.app_context().push()

def get_or_create(model, defaults=None, **kwargs):
    inst = model.query.filter_by(**kwargs).first()
    if inst:
        return inst, False
    params = {**kwargs, **(defaults or {})}
    inst = model(**params)
    db.session.add(inst)
    return inst, True
try:
    fac, created = get_or_create(User, username='facilitator', email='facilitator@example.com')
    if created:
        fac.set_password('ChangeMe123!'); fac.role='Facilitator'
        print('✓ Facilitator created')
    for name, threat in [('Phishing Breach','Phishing'),('Ransomware Outbreak','Ransomware')]:
        scen, created = get_or_create(Scenario, name=name)
        if created:
            scen.description=f'Scenario for {name}'; scen.threat_type=threat
            for idx, phase in enumerate(['Detection','Containment','Recovery'],1):
                scen.injects.append(Inject(phase=phase, description=f'{phase} inject', order=idx))
            print('✓ Scenario', name)
    db.session.flush()
    ransom = Scenario.query.filter_by(name='Ransomware Outbreak').first()
    ex, created = get_or_create(Exercise, name='Demo Ransomware Exercise', facilitator_id=fac.id, scenario_id=ransom.id)
    if created:
        ex.start_time=datetime.utcnow()-timedelta(hours=1); ex.end_time=datetime.utcnow()
        ex.status='Completed'; ex.current_phase='Recovery'
        print('✓ Demo exercise seeded')
    db.session.commit(); print('Seed complete ✅')
except Exception as e:
    db.session.rollback(); print('Seed failed', e); sys.exit(1)
finally:
    db.session.remove()
