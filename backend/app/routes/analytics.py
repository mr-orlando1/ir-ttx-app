@bp.route('/api/aar/<int:exercise_id>', methods=['GET'])
@login_required
def generate_aar(exercise_id):
    from flask import send_file
    from io import BytesIO
    from reportlab.pdfgen import canvas
    from app.models import Exercise, Decision

    exercise = Exercise.query.get_or_404(exercise_id)
    decisions = Decision.query.filter_by(exercise_id=exercise.id).all()

    buffer = BytesIO()
    c = canvas.Canvas(buffer)
    c.setTitle(f"AAR_Exercise_{exercise_id}")
    c.setFont("Helvetica-Bold", 18)
    c.drawString(100, 800, f"After-Action Report for Exercise #{exercise_id}")

    y = 760
    for decision in decisions:
        if y < 50:
            c.showPage()
            y = 800
        c.setFont("Helvetica", 12)
        c.drawString(100, y, f"Decision by {decision.user_id}: {decision.decision_text} — Outcome: {decision.outcome}")
        y -= 20

    c.showPage()
    c.save()
    buffer.seek(0)

    return send_file(buffer, as_attachment=True, download_name=f"AAR_Exercise_{exercise_id}.pdf", mimetype='application/pdf')