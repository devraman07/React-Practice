import "./Hero.css";



const Hero = () => {
  return (
    <div className="container">
        <div className="nav">
          <div className="nav-items">
           <div className="nav-logo">nav logo</div>
           <div className="nav-links">
            <p>about</p>
            <p>Pricing</p>
            <p>prices</p>
           </div>
           <div className="nav-buttons">
            <button>login</button>
            <button>register</button>
           </div>
          </div>
        </div>
        <div className="main-content">
            <div className="leftSide">LeftSide</div>
        <div className="rightSide">RightSide</div>
        </div>
    </div>
  )
}

export default Hero