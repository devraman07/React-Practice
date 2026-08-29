import "./Header.css";


const Header = () => {
  return (
    <div className="container">
      <h1>welcome to my website</h1>
      <nav>
        <div className="nav-links">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">contacts</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
