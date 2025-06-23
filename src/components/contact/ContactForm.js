import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    companyName: "",
    billableAddress: "",
    phone: "",
    email: "",
    projectAddress: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      lastName: "",
      firstName: "",
      companyName: "",
      billableAddress: "",
      phone: "",
      email: "",
      projectAddress: "",
      projectDetails: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Contact Form</h2>
      <form onSubmit={handleSubmit} className="project-form">
        {[
          ["Last Name", "lastName"],
          ["First Name", "firstName"],
          ["Company Name", "companyName"],
          ["Billable Address", "billableAddress"],
          ["Phone", "phone"],
          ["Email", "email"],
          ["Project Address (if different)", "projectAddress"],
        ].map(([label, name]) => (
          <div key={name}>
            <label htmlFor={name} className="form-label">
              {label}
            </label>
            <input
              type={
                name === "email" ? "email" : "text"
              }
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={[
                "lastName",
                "firstName",
                "billableAddress",
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
