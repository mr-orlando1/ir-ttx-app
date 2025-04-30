import pytest
from app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.testing = True
    with app.test_client() as client:
        yield client

def test_ping(client):
    response = client.get('/api/ping')
    assert response.status_code == 200
    assert response.json == {'status': 'IR TTX API is live!'}
