import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure elements are visible
    setIsVisible(true);
    
    // Add animation classes with delay for staggered animation
    const animateElements = () => {
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      const heroDescription = document.querySelector('.hero-description');
      const ctaButtons = document.querySelectorAll('.btn');
      const socialLinks = document.querySelectorAll('.social-link');
      
      // Make sure elements are visible
      if (heroTitle) heroTitle.style.opacity = '1';
      if (heroSubtitle) heroSubtitle.style.opacity = '1';
      if (heroDescription) heroDescription.style.opacity = '1';
      
      // Make social links visible with delay
      socialLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateY(0)';
        }, 1000 + (index * 150));
      });
      
      // Animate CTA buttons
      ctaButtons.forEach((btn, index) => {
        setTimeout(() => btn.classList.add('animate-fade-in-up'), 1800 + (index * 150));
      });
    };
    
    // Run animation after a short delay
    setTimeout(animateElements, 100);
    
    // Add floating animation to background shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      shape.classList.add(`floating-${index + 1}`);
    });
  }, []);

  const descriptionText = "Results-driven Product Manager with a proven track record in AI-driven healthcare, fintech, and smart home technology. Adept at leading cross-functional teams, defining and executing product strategies, and driving customer-centric innovation. Expertise in Agile methodologies, data-driven decision-making, and go-to-market strategies, resulting in increased efficiency, user satisfaction, and revenue growth. Strong technical foundation in Python, SQL, and data visualization tools, with hands-on experience in AI, machine learning, and data analytics.";

  const titleStyle = {
    opacity: 1,
    visibility: 'visible',
    display: 'block'
  };

  const socialLinkStyle = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease'
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {isVisible && (
          <>
            <h1 className="hero-title" style={titleStyle}>
              Hi, I'm Jasmitha Eluri <span className="wave">👋</span>
            </h1>
            <h2 className="hero-subtitle" style={titleStyle}>Product Manager & Strategic Leader</h2>
          </>
        )}
        <div className="hero-description" style={titleStyle}>
          <TypeAnimation
            sequence={[descriptionText]}
            wrapper="p"
            speed={70}
            cursor={true}
            repeat={0}
            className="typing-text"
          />
        </div>
        
        <div className="social-links-container" style={{ margin: '3rem 0', position: 'relative', zIndex: 100 }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Connect With Me</h3>
          <nav className="social-links">
            <a href="https://www.linkedin.com/in/jasmitha-chowdary/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" style={socialLinkStyle}>
              <div className="social-icon-wrapper">
                <FaLinkedin className="social-icon" />
                <span className="social-text">LinkedIn</span>
              </div>
            </a>
            
            <a href="https://github.com/jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link github" style={socialLinkStyle}>
              <div className="social-icon-wrapper">
                <FaGithub className="social-icon" />
                <span className="social-text">GitHub</span>
              </div>
            </a>
            
            <a href="https://medium.com/@jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link medium" style={socialLinkStyle}>
              <div className="social-icon-wrapper">
                <FaMedium className="social-icon" />
                <span className="social-text">Medium</span>
              </div>
            </a>
            
            <a href="https://twitter.com/jasmithaeluri" target="_blank" rel="noopener noreferrer" className="social-link twitter" style={socialLinkStyle}>
              <div className="social-icon-wrapper">
                <FaTwitter className="social-icon" />
                <span className="social-text">Twitter</span>
              </div>
            </a>
            
            <a href="mailto:jasmithaeluri@gmail.com" className="social-link email" style={socialLinkStyle}>
              <div className="social-icon-wrapper">
                <FaEnvelope className="social-icon" />
                <span className="social-text">Email</span>
              </div>
            </a>
          </nav>
        </div>

        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Let's Connect</a>
          <a href="/resume.pdf" className="btn btn-secondary" download>View Resume</a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
    </section>
  );
};

export default Hero;
