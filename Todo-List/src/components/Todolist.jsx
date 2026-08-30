import { useState } from "react";
import "./todolist.css";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const submitHandler = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="todo-header">
        <h3>The personal todo list</h3>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={submitHandler}>Submit Todo</button>
      </div>
      <div className="todo-items">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
              <button className="delete-todo-btn" onClick={(e) => { e.stopPropagation(); deleteHandler(todo.id); }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;