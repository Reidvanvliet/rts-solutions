const Navbar = () => {
  return (
    <div className="main-nav-container">
      <div className="logo-container">
        <img height="40px" src={require("../media/images/hammer2.jpg")} alt="logo" />
        <h2>RTS Solutions</h2>
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li id="nav-contact">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
