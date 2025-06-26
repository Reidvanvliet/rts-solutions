import { useEffect, useState, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import NavbarMobile from "./NavbarMobile";
import Footer from "./Footer";
import "../styles/navbarMobile.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, [pathname]);

  // Close menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main-nav-container">
        <div className="logo-container">
          <img src={require('../media/images/RTSLogo.webp')} />
        </div>

        <div className="nav-container" id="nav-container">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-navlink" : "navlink"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "active-navlink" : "navlink"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-contact nav-contact-active" : "nav-contact"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className={`hamburger ${isOpen ? "open" : "closed"}`}
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div
        ref={menuRef} 
        className={`nav-container-mobile ${isOpen ? "open" : "closed"}`}>
          <NavbarMobile setIsOpen={setIsOpen} />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
