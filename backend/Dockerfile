FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 4100
CMD ["gunicorn", "-b", "0.0.0.0:4100", "backend.app:create_app()"]