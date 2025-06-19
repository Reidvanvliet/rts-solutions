import { Outlet, NavLink } from "react-router";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <div className="main-nav-container">
        <div className="logo-container">
          <img
            height="40px"
            src={require("../media/images/hammer2.png")}
            alt="logo"
          />
          <h2>RTS Solutions</h2>
        </div>

        <div className="nav-container">
          <ul>
            <li><NavLink to="/" className={({isActive}) =>  isActive ? 'active-navlink' : 'navlink'}>Home</NavLink></li>
            <li><NavLink to='/projects' className={({isActive}) =>  isActive ? 'active-navlink' : 'navlink'}>Projects</NavLink></li>
            <li id="nav-contact">Contact</li>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
