#!/usr/bin/env bash

set -e

echo "Starting Docker + Vite dev servers..."

npx concurrently \
  "cd backend && source .venv/bin/activate && docker compose up" \
  "cd frontend && npm run dev"
