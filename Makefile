
up:
	docker compose up --build

down:
	docker compose down

frontend:
	cd frontend && npm install && npm start

backend:
	pip install -r requirements.txt && python run.py

test:
	docker compose exec backend pytest
