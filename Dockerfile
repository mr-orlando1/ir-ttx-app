# Stage 1 — React Build
FROM node:18 as frontend

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2 — Flask App + NGINX static
FROM python:3.11-slim

# System setup
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Flask app
COPY app/ ./app/
COPY run.py ./
COPY .env .env

# Copy built frontend from stage 1
COPY --from=frontend /app/frontend/build/ ./app/static/

# Flask will serve static files
ENV FLASK_APP=run.py
ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
CMD ["python", "-m", "flask", "run"]