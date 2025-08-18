import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import desctop from './IMG/Desktop.png';

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
    <div>
    <img className='contact-img-form' src={desctop}></img>
    <p className='contact-text-form'>let's Start  a Conversation</p>
    <div className='contact-non_diply-div'>
      <div className='contact-info-side'>
        <p className="contact-title">Have questions? We're here to help!</p>
        <p className='for-bold-text'>Whether you're curious about our courses, need help choosing the right program, or want to know about placements and timings — our team is ready to assist you.
Reach out to us and we’ll get back to you as soon as possible!</p><br/>
        <p className='for-bold-text'>✅ What you can contact us for:</p><br/>
        <p>Course details & fees<br/>

          Demo class scheduling<br/>

          Certification & placement support<br/>

          Technical support or queries</p><br/>

          <p className='for-bold-text'>📬 Get in Touch</p><br/>
        <p>📍 Address: 4th Floor, Bhosale Shinde Arcade, JM Road, Near Deccan Bus Stop, Pune<br/>

          📞 Phone: 8767899362<br/>

          📧 Email: aniketsupekar2004@gmail.com<br/>

          🌐 Website: [Your Website URL]<br/>

          🕒 Office Hours: 9:00 AM – 7:00 PM (Mon – Sat)<br/>
          
          </p>

      </div>
      
    


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
    </div>
    </div>
  );
};

export default Contact;

