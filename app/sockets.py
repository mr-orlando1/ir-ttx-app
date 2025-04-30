# app/sockets.py
from flask_socketio import emit, join_room, leave_room
from app import socketio

@socketio.on('join_exercise')
def handle_join_exercise(exercise_id):
    join_room(str(exercise_id))
    emit('receive_message', f'User joined exercise {exercise_id}', room=str(exercise_id))

@socketio.on('leave_exercise')
def handle_leave_exercise(exercise_id):
    leave_room(str(exercise_id))
    emit('receive_message', f'User left exercise {exercise_id}', room=str(exercise_id))

@socketio.on('send_message')
def handle_send_message(data):
    exercise_id = str(data['exerciseId'])
    content = data['content']
    emit('receive_message', content, room=exercise_id)

@socketio.on('submit_decision')
def handle_submit_decision(data):
    exercise_id = str(data['exerciseId'])
    decision = data['decision']
    emit('receive_message', f'Decision submitted: {decision}', room=exercise_id)
