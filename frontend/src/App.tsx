import { useState, useEffect} from "react";
import "./App.css";
import red_imposter from "./assets/red_imposter.jpeg";
import type { Todo } from "./types/todo.ts"
import { deleteTodo, fetchTodos, createTodo, toggleTodo } from "./api/todos.ts";


 function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

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

  async function handleToggle(id: number) {
    const updatedTodo = await toggleTodo(id)

    setTodos(prev => prev.map(todo => todo.id === id ? updatedTodo : todo))
  }

  function handleDelete(id: number) {
    deleteTodo(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
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
          <button onClick={handlealert}> ALERT </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}> <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)}/>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
