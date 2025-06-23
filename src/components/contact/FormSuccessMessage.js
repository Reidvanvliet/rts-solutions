import '../../styles/formSuccessMessage.css';

const FormSuccessMessage = ({ onClose }) => {
  return (
    <div className="form-success-container">
      <button className="close-button" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <h2>Thank you for reaching out!</h2>
      <p>
        We've received your message and one of our renovation experts will get back to you shortly.
        Whatever you're planning, we're excited to help bring your vision to life!
      </p>
    </div>
  );
};

export default FormSuccessMessage;