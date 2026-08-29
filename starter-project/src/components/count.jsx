import { useState } from "react"

const Count = () => {
 
    const [count, setcount] = useState(0);
   
    const incriment = () => setcount(count + 1);

 
  return (
    <div>
        <h1>{count}</h1>
    <button onClick={incriment}>Plus</button>
    </div>
    
  )
}

export default Count;