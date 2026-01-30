from app.extensions import db

class Todo(db.Model):
    __tablename__ = "todo"
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"<Todo {self.task}>"