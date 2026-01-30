import { useState} from "react";
import "./App.css";
import red_imposter from "./assets/red_imposter.jpeg";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        name: input,
        completed: false,
      },
    ]);

    setInput("");
  }

  function handleDelete(id: number) {
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
          <li key={todo.id}> <input type="checkbox" /> {todo.name}
            <button onClick={() => handleDelete(todo.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
