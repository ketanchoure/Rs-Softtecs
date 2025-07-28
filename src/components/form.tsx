import React, { useState } from 'react';
import './form.css';
//import fdesing from "../components/IMG/form-desing.png";

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}, Number: ${number}, Email: ${email}`);
  };

  return (
    <div className="form-container">
      {/* <img className='fdesing' src={fdesing}> */}
      <form onSubmit={handleSubmit}>
        <h1 className='hed'>Welcome to Rs Softtecs</h1>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input"
            required
            placeholder='Your Full Name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="number" className="form-label">Number</label>
          <input
            id="number"
            type="tel"
            value={number}
            onChange={e => setNumber(e.target.value)}
            className="form-input"
            required
            placeholder='Your Number'
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="form-input"
            required
            placeholder='Your Email'
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      {/* </img> */}
    </div>
  );
};

export default Form;
