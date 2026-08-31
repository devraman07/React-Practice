import { useState } from "react"
import "./testimonials.css";


const Testominals = () => {
    const [currIndex, setcurrIndex] = useState(0);
    
     const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
      
  const handlePrevClick = () => {
    setcurrIndex(
        (currIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setcurrIndex(
       ( currIndex + 1 ) % testimonials.length
    ) 
  }

     
  return (
    <div>
        <div className="testimonials">
            <div className="testimonials-quote">
                 {testimonials[currIndex].quote}
            </div>
            <div className="testimonials-author">
             - {testimonials[currIndex].author}
            </div>
            <div className="testimonials-nav">
                <button  onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Testominals