#!/usr/bin/env bash

set -e

echo "Starting Flask + Vite dev servers..."

npx concurrently \
  "cd backend && source .venv/bin/activate && flask --app flaskr run --debug" \
  "cd frontend && npm run dev"
