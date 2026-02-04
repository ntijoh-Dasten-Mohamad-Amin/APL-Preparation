from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models import Todo

todos = Blueprint("todos", __name__, url_prefix="/api/todos")

@todos.route("", methods=["GET"])
def get_todos():
    todos = Todo.query.all()
    return jsonify([
        {"id": t.id, "task": t.task}
        for t in todos
    ])

@todos.route("", methods=["POST"])
def create_todo():
    data = request.get_json()

    todo = Todo(task=data["task"])
    db.session.add(todo)
    db.session.commit()
    return jsonify({"id":todo.id, "task":todo.task}), 201

@todos.route("/<int:id>", methods=["DELETE"])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)

    db.session.delete(todo)
    db.session.commit()

    return "", 204
