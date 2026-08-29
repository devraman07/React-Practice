import { useState } from "react"


const Random = () => {
 
    const [number , setNumber] = useState( () => Math.floor(Math.random() * 100));

    const generateNew = () => setNumber(Math.floor(Math.random() * 100));


  return (
    <div>
  <p>{number}</p>
  <button onClick={generateNew}>generate new number</button>

    </div>
  )
}

export default Random