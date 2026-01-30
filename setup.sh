#!/usr/bin/env bash

set -e 

echo "Setting up backend..."
cd backend
python3 -m venv .venv
source .venv/bin/activate
docker compose build

deactivate

echo "Setting up front end"
cd ../frontend
npm install

echo "Complete!"