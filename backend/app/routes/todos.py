from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models import Todo

todos = Blueprint("todos", __name__, url_prefix="/api/todos")

@todos.route("", methods=["GET"])
def get_todos():
    todos = Todo.query.all()
    return jsonify([t.to_dict() for t in todos])

@todos.route("", methods=["POST"])
def create_todo():
    data = request.get_json()

    todo = Todo(task=data["task"], completed=False)
    db.session.add(todo)
    db.session.commit()
    return jsonify(todo.to_dict()), 201

@todos.route("/<int:id>", methods=["DELETE"])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)

    db.session.delete(todo)
    db.session.commit()

    return "", 204

@todos.route("/<int:id>", methods=["PATCH"])
def toggle_todo(id):
    todo = Todo.query.get_or_404(id)

    todo.completed = not todo.completed

    db.session.commit()

    return jsonify(todo.to_dict())
