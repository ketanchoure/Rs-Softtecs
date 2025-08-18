import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

// Import image with error handling
let desctop: string;
try {
  desctop = new URL('./IMG/Desktop.png', import.meta.url).href;
} catch (error) {
  console.warn('Failed to load Desktop.png:', error);
  desctop = '/placeholder.svg'; // Fallback image
}

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
    <div className="contact-wrapper">
      <img className='contact-img-form' src={desctop} alt="Contact Us" />
      <h1 className='contact-text-form'>Let's Start a Conversation</h1>
      
      <div className='contact-non_diply-div'>
        <div className='contact-info-side'>
          <h2 className="contact-info-title">Have questions? We're here to help!</h2>
          <p className='contact-description'>
            Whether you're curious about our courses, need help choosing the right program, or want to know about placements and timings — our team is ready to assist you. Reach out to us and we'll get back to you as soon as possible!
          </p>
          
          <div className="contact-section">
            <h3 className='contact-section-title'>✅ What you can contact us for:</h3>
            <ul className="contact-list">
              <li>Course details & fees</li>
              <li>Demo class scheduling</li>
              <li>Certification & placement support</li>
              <li>Technical support or queries</li>
            </ul>
          </div>

          <div className="contact-section">
            <h3 className='contact-section-title'>📬 Get in Touch</h3>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon">📍</span>
                <span>Address: 4th Floor, Bhosale Shinde Arcade, JM Road, Near Deccan Bus Stop, Pune</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">📞</span>
                <span>Phone: 8767899362</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">📧</span>
                <span>Email: aniketsupekar2004@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">🕒</span>
                <span>Office Hours: 9:00 AM – 7:00 PM (Mon – Sat)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container">
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
                placeholder="Enter your full name"
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
                placeholder="Enter your email address"
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
                placeholder="Tell us about your query or requirements"
              />
              {errors.message && <span className="contact-form-error">{errors.message}</span>}
            </div>
            <button type="submit" className="contact-form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
