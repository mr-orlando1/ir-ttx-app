
import os
import requests
from flask import Blueprint, request, jsonify

injects = Blueprint('injects', __name__)

@injects.route('/api/injects/test-huggingface', methods=['GET'])
def test_huggingface():
    headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_KEY')}"}
    response = requests.post(
        "https://api-inference.huggingface.co/models/microsoft/phi-2",
        headers=headers,
        json={"inputs": "Say hello from phi-2"}
    )
    if response.status_code == 200:
        return jsonify({"status": "ok"})
    return jsonify({"error": response.text}), response.status_code

@injects.route('/api/injects/suggest', methods=['POST'])
def suggest_inject():
    data = request.json
    provider = data.get("provider", "huggingface")
    scenario = data.get("scenario", "Ransomware")
    phase = data.get("phase", "Containment")

    if provider == "openai":
        import openai
        openai.api_key = os.getenv("OPENAI_API_KEY")
        messages = [{
            "role": "user",
            "content": f"Generate a tabletop inject for:
Scenario: {scenario}
Phase: {phase}"
        }]
        response = openai.ChatCompletion.create(model="gpt-4", messages=messages)
        output = response.choices[0].message.content
    elif provider == "huggingface":
        headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_KEY')}"}
        payload = {"inputs": f"Scenario: {scenario}\nPhase: {phase}\nReturn: title, description, risk_level"}
        response = requests.post(
            "https://api-inference.huggingface.co/models/microsoft/phi-2",
            headers=headers,
            json=payload
        )
        if response.status_code != 200:
            return jsonify({"error": "Hugging Face API call failed", "details": response.text}), 500
        output = response.json()[0].get('generated_text', '')

    return jsonify({
        "title": f"💥 Suggested by AI ({scenario} - {phase})",
        "inject": output,
        "aiSuggested": True
    })
