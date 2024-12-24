import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; 

export const Contact = () => {
  
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3e719201-9c4a-435d-bc71-f290e9ffde7e");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          event.target.reset();
        } else {
          console.log("Error", data);
        }
      };


  return (
    <>
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <h3>Let's talk</h3>
          <p>
          I'm excited to work on impactful web projects. Feel free to reach out with ideas or opportunities—let's create something amazing!
          </p>
          <ul>
            <li>
              <MdEmail style={{ marginRight: "8px" }} /> kkesbhat1601@gmail.com
            </li>
            <li>
              <MdPhone style={{ marginRight: "8px" }} /> +91 8856987832
            </li>
            <li>
              <MdLocationOn style={{ marginRight: "8px" }} /> Pune, India
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Write your message here</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
    <footer className="footer">
        <p>© {new Date().getFullYear()} Kartik Kesbhat. All rights reserved.</p>
    </footer>
    </>
  );
};

