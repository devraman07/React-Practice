import { useRef } from "react"


const UseRef = () => {

  const inputRef = useRef(null);
 
 const  inputRefHandler = () => {
    inputRef.current.value = "Raman"
 } 



  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={()=> inputRefHandler()}>focus</button>
    </div>
  )
}

export default UseRef;