import { NavLink } from 'react-router';

const NavbarMobile = ({ setIsOpen }) => {
    return (
        <>
          <ul>
            <li id='list-header'>RTS Solutions</li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
            <li>
                Home
            </li>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
            <li>
                Projects
            </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-navlink-mobile' : 'navlink-mobile'}>
            <li>
                Contact
            </li>
            </NavLink>
          </ul>
            <button
                className="close-button-mobile"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
            >
                Close
            </button>
        </>
    )
 }

 export default NavbarMobile;