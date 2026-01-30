import os
from flask import Flask

from app.extensions import db
#from app.blueprints.routes import todos

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
        "DATABASE_URL",
        "postgresql+psycopg2://user:secret@db:5432/postgres"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)    

#    app.register_blueprint(todos)

    @app.route('/hello')
    def hello():
        return "hello :333"
    
    @app.route('/fack', methods=["POST"])
    def test():
        todo = "meooowww"
        db.session.add(todo)
        db.session.commit()
        return {"todo": todo}


    return app 