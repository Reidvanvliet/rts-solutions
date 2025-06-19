import ContactBanner from "../components/contact/ContactBanner";
import "../styles/contact.css";

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <div className="contact-content">
                <h2>Get in Touch</h2>
                <p>If you have any questions or would like to start a project, please reach out to us.</p>
                {/* Additional contact form or information can be added here */}
            </div>
        </div>
    );
}

export default Contact;