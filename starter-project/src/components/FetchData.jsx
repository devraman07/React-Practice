import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const todos = await res.json();
        setdata(todos);
      } catch (err) {
        console.error("Failed to fetch todos:", err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      {Array.isArray(data) && data.map((todo) => (
  <div className="data" key={todo.id}>
    <p> title : {todo.title}</p>
    <p> status : {todo.completed}</p>
  </div>
))}
    </div>
  );
};

export default FetchData;
