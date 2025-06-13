const Navbar = () => {
  return (
    <div className="main-nav-container">
      <div className="logo-container">
        <img height="100%" src={require("../media/images/hammer.jpg")} />
        <h1>RTS Solutions</h1>
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
