import { useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import Footer from "./Footer";

const Navbar = () => {

  const { pathname } = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner
      }, [pathname]);

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
            <li><NavLink className={({isActive}) =>  isActive ? 'nav-contact nav-contact-active' : 'nav-contact'} to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
