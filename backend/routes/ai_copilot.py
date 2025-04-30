from flask import Blueprint, request, jsonify

ai_copilot = Blueprint('ai_copilot', __name__)

@ai_copilot.route('/api/ai/copilot', methods=['POST'])
def suggest_remediation():
    data = request.json
    inject_text = data.get('injectText', '')
    system_type = data.get('systemType', '')

    # Stub response (replace with OpenAI/Anthropic call)
    remediation = f"Consider segmenting {system_type} and enforcing stricter MFA based on the following: {inject_text[:100]}..."
    return jsonify({"remediation": remediation})
