import type {Todo} from "../types/todo"

const API_URL = "http://localhost:5001/api/todos";

export async function fetchTodos() : Promise<Todo[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
}

export async function createTodo(task:string) : Promise<Todo> {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task })
    });
    if (!res.ok) throw new Error("Failed to create todo")
    return res.json()
}

export async function deleteTodo(id:number) {
    const res = await fetch(API_URL+"/"+id,{
        method: "DELETE",
    });

    if(!res.ok){
        throw new Error("Failed to delete todo");
    }
}