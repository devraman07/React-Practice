import { useEffect, useState } from "react"


const UseEffect = () => {
     const [count, setCount] = useState(0);
     const [twoCount, setTwocount] = useState(2);

    const countHandler = () => {
  setCount(prev => prev + 1);  
  document.title = `title : ${count}`;    
}
const twoHandler = () => {
  setTwocount(prev => prev + 2); 
}

     useEffect(() => {
      console.log("Hello");
     }, [count, twoCount]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={countHandler}>increase by 1</button>
      <p>{twoCount}</p>
      <button onClick={twoHandler}>increase by 2</button>

      
    </div>
  )
}

export default UseEffect