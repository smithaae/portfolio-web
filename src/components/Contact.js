import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-description">
          Let's connect and discuss how we can create amazing products together
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:jasmitha.eluri@email.com">jasmitha.eluri@email.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/jasmithaeluri" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <h3>Location</h3>
                <p>San Francisco Bay Area</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
