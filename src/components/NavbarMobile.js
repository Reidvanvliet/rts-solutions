import { NavLink } from 'react-router';

const NavbarMobile = ({ setIsOpen }) => {
    return (
        <>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
                Contact
              </NavLink>
            </li>
          </ul>
            <button
                className="close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
            >
                Close
            </button>
        </>
    )
 }

 export default NavbarMobile;