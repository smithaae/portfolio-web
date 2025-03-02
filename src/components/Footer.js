import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-brand">
            <h2>Jasmitha Eluri</h2>
            <p>Product Manager & Strategic Leader</p>
          </div>
          
          <div className="footer-contact">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>44 Dinsmore Ave, apt 503<br />Framingham, MA 01702</p>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+1-857-299-0748</p>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>jasmithaeluri@gmail.com</p>
            </div>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/jasmitha-chowdary" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://medium.com/@jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaMedium />
            </a>
            <a href="https://twitter.com/jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className="footer-nav">
          <div className="nav-group">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jasmitha Eluri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
