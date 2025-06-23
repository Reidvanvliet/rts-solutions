import ContactBanner from "../components/contact/ContactBanner";
import "../styles/contact.css";
import { useState } from "react";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {

    return (
        <div>
            <ContactBanner />
            <div className="contact-content">
                <div className="contact-header">
                    <h2>Get in Touch</h2>
                <p>If you have any questions or would like to start a project, please reach out to us. We are excited to hear from you!</p>
                </div>
                
                <div className="contact-container">
                <ContactForm />
                <img className="image-container" src={require('../media/images/contact-page.webp')} />
                </div>
            </div>
        </div>
    );
}

export default Contact;