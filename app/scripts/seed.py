from datetime import datetime, timedelta
import sys

from app import create_app, db
from app.models import User, Scenario, Inject, Exercise

app = create_app()
app.app_context().push()  # activate Flask context