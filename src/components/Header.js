import React, { useState, useEffect } from 'react';
import { HiDownload } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const headerOffset = 80;
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`s-header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li>
              <a href="/resume.pdf" className="nav-button" download>
                <HiDownload /> Resume
              </a>
            </li>
            <li>
              <a href="mailto:jasmithaeluri@gmail.com" className="nav-button">
                <MdEmail /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
