import { useState } from "react";
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setTodos(prev => [...prev, input]);
    setInput("");
  }

  return (
    <>
      <h1>Among Us</h1>

      <form onSubmit={handleSubmit}>
        <input type="" value={input} onChange={e => setInput(e.target.value)}/>
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
