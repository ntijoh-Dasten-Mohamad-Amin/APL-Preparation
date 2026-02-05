import { useState, useEffect} from "react";
import "./App.css";
import red_imposter from "./assets/red_imposter.jpeg";
import type { Todo } from "./types/todo.ts"
import { deleteTodo, fetchTodos, createTodo } from "./api/todos.ts";


 function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");


  useEffect(() => {
    async function loadTodos(){
      const todos = await fetchTodos();
      setTodos(todos);
    }
    loadTodos();
  }, [])
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    const newTodo = await createTodo(input);
    console.log(newTodo)
    setTodos(prev => [...prev, newTodo]);
    setInput("");
  }

  function handleDelete(id: number) {
    deleteTodo(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function handleEdit(id: number, currentTask: string) {
  setEditingId(id);
  setEditText(currentTask);
  }

  async function handleSave(id: number) {
    if (!editText.trim()) return;

    try {
      const res = await fetch(`http://localhost:5001/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: editText }),
      });

      if (!res.ok) {
        throw new Error("Failed to update todo");
      }

      const updatedTodo = await res.json();

      // Update local state with DB response
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? updatedTodo : todo
        )
      );

      setEditingId(null);
      setEditText("");

    } catch (error) {
      console.error(error);
    }
  }


  function handlealert() {
    alert('RAAAAUUUUUUGGGGGGGGHHHHHHHHH');
  }

  return (
    <>
      <img src={red_imposter} alt="red susmongus" />
      <h1>Among Us</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button>Add</button>
          <button id="alert" onClick={handlealert}> ALERT </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}> <input type="checkbox" />
            {editingId === todo.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)}/>
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.task}
              <button onClick={() => handleEdit(todo.id, todo.task)}> Edit </button>
            </>
          )}
          <button onClick={() => handleDelete(todo.id)}> Delete </button>
          </li> 
        ))}
      </ul>
    </>
  );
}


export default App;

