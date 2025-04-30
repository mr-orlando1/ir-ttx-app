#!/bin/bash
echo "Starting IR TTX App..."
docker compose down
docker compose up --build
