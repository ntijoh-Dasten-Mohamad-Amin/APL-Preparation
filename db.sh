#!/usr/bin/env bash
set -e

cd backend

case "$1" in
    init)
        echo "creating tables"
        docker compose exec app python -m app.create_tables
        ;;
    reset)
        echo "dropping and reseting tables"
        docker compose exec app python -m app.drop_tables
        docker compose exec app python -m app.create_tables
        ;;
    shell)
        echo "opening psql shell"
        docker compose exec db psql -U user postgres
        ;;
    *)
        echo "Usage: ./db.sh {init|reset|shell}"
        exit 1
        ;;
esac