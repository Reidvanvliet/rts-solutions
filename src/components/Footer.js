import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>RTS Solutions</h3>
          <p>
            Your trusted local renovation experts, proudly serving homeowners across the Okanagan Valley for over 30 years. From concept to completion, we bring experience, craftsmanship, and care to every project. 
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Back to Top</a></li>
            <li><a href="#services">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Get in Touch</h4>
          {/*<p><FaPhoneAlt className="icon" /> (123) 456-7890</p>*/}
          <p><FaEnvelope className="icon" />RtsSolutions@gmail.com</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/rtssolutionsltd"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} RTS Solutions LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
