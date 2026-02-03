import os
from flask import Flask
from flask_cors import CORS

from app.extensions import db


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
        "DATABASE_URL",
        "postgresql+psycopg2://user:secret@db:5432/postgres"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)    

    from app.routes.todos import todos
    app.register_blueprint(todos)

    @app.route('/hello')
    def hello():
        return "hello :333"
    

    return app 