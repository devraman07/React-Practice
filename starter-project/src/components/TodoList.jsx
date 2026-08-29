import { useState } from "react"



const TodoList = () => {
   
   const [todos, setTodos] = useState([]);
   const [inputValue, setInputValue] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
   };

   const handleChange = e => {
    setInputValue(e.target.value);
   }
 

  return (
    <div>
      <h1>todo list</h1>
        
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} placeholder="enter a todo" />
          <button type="submit">add todo</button>
        </form>

       <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
       </ul>
        
    </div>
  )
}

export default TodoList