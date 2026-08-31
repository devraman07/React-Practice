import { useState } from "react"
import "./themetoggler.css";



const ThemeToggler = () => {
 
    const [backgroundColor, setBackgroundcolor] = useState("white");
    const [textcolor , setTextcolor] = useState("#1b1b1b");
    const [buttonStyle , setButtonstyle] = useState("white");

    const handleclick = () => {
        setBackgroundcolor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextcolor(textcolor === "#1b1b1b" ? "white" : "#1b1b1b");
        setButtonstyle(backgroundColor === "white" ? "#1b1b1b" : "white");
    }

  return (
    <div>
        <section style={{backgroundColor , color : textcolor}}>
            <button style={{buttonStyle , color : textcolor , border : `2px solid ${textcolor}`}}
             onClick={handleclick}
            >
               {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
            </button>
            <section className="content">
            <h1>Welcome to a real world ...</h1>
        </section>
        </section>

        
    </div>
  )
}

export default ThemeToggler