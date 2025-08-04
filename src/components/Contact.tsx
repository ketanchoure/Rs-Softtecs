import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // For now, just log the form data
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="contact-container " >
      <h2 className="contact-title">Contact Us</h2>
      {isSubmitted && (
        <div className="contact-success">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form-input ${errors.name ? 'form-input-error' : ''}`}
          />
          {errors.name && <span className="contact-form-error">{errors.name}</span>}
        </div>
        <div className="contact-form-group">
          <label htmlFor="email" className="contact-form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form-input ${errors.email ? 'form-input-error' : ''}`}
          />
          {errors.email && <span className="contact-form-error">{errors.email}</span>}
        </div>
        <div className="contact-form-group">
          <label htmlFor="message" className="contact-form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`contact-form-textarea ${errors.message ? 'form-input-error' : ''}`}
          />
          {errors.message && <span className="contact-form-error">{errors.message}</span>}
        </div>
        <button type="submit" className="contact-form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

