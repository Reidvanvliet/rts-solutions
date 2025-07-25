import React, { useState } from "react";
import FormSuccessMessage from "./FormSuccessMessage";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    access_key: "d9da6a0a-d340-4d4c-acfa-f1769089b37b",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    projectAddress: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true); // or any success logic
        setFormData({
          access_key: "d9da6a0a-d340-4d4c-acfa-f1769089b37b",
          firstName: "",
          lastName: "",
          companyName: "",
          phone: "",
          email: "",
          projectAddress: "",
          projectDetails: "",
        });
      } else {
        alert("❌ Contact form submission failed! Please try again.");
        console.error("Form submission failed:", await response.text());
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">Contact Form</h2>
        <form onSubmit={handleSubmit} className="project-form" name="contact">
          <input
            type="hidden"
            name="access_key"
            value="d9da6a0a-d340-4d4c-acfa-f1769089b37b"
          ></input>
          {[
            ["First Name*", "firstName"],
            ["Last Name*", "lastName"],
            ["Company Name", "companyName"],
            ["Phone*", "phone"],
            ["Email*", "email"],
            ["Project Address", "projectAddress"],
          ].map(([label, name]) => (
            <div key={name}>
              <label htmlFor={name} className="form-label">
                {label}
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={[
                  "firstName",
                  "lastName",
                  "phone",
                  "email",
                ].includes(name)}
                className="form-input"
                pattern={
                  name === "phone"
                    ? "\\(?\\d{3}\\)?-?.?\\s?\\d{3}-?.?\\s?\\d{4}"
                    : name === "email"
                    ? "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                    : undefined
                }
                title={
                  name === "phone"
                    ? "Please enter a valid phone number (e.g. 250 918 9388)"
                    : name === "email"
                    ? "Please enter a valid email address"
                    : undefined
                }
              />
            </div>
          ))}

          <label htmlFor="projectDetails" className="form-label">
            Project Details or Additional Info
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="form-textarea"
          />

          <button type="submit" className="form-button">
            {isSubmitting ? <span className="spinner"></span> : "Submit"}
          </button>
        </form>
      </div>
      {isSubmitted && (
        <FormSuccessMessage onClose={() => setIsSubmitted(false)} />
      )}
    </>
  );
};

export default ContactForm;
