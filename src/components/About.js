import React from 'react';
import { FaAward, FaLightbulb, FaChartLine, FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';
import profileImage from '../assets/images/image-linkedin.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Transforming Ideas into Impactful Products
          </p>
        </div>

        <div className="about-grid">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Jasmitha Eluri" />
            </div>
            <h3 className="profile-name">Jasmitha Eluri</h3>
            <p className="profile-title">Product Manager & Strategic Leader</p>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <FaAward className="stat-icon" />
              <div className="stat-info">
                <h4>Experience</h4>
                <p>5+ Years</p>
              </div>
            </div>
            <div className="stat-card">
              <FaLightbulb className="stat-icon" />
              <div className="stat-info">
                <h4>Projects</h4>
                <p>20+ Delivered</p>
              </div>
            </div>
            <div className="stat-card">
              <FaChartLine className="stat-icon" />
              <div className="stat-info">
                <h4>Revenue Impact</h4>
                <p>$10M+</p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <div className="info-card education">
              <div className="card-header">
                <FaGraduationCap className="card-icon" />
                <h3>Education</h3>
              </div>
              <ul className="info-list">
                <li>
                  <span className="degree">Master's in Information Systems</span>
                  <span className="institution">Northeastern University</span>
                  <span className="gpa">GPA: 3.96/4.0</span>
                </li>
                <li>
                  <span className="degree">Bachelor's in Computer Science</span>
                  <span className="institution">Bennett University</span>
                </li>
              </ul>
            </div>

            <div className="info-card certifications">
              <div className="card-header">
                <FaCertificate className="card-icon" />
                <h3>Certifications</h3>
              </div>
              <ul className="info-list">
                <li>Certified Scrum Product Owner (CSPO)</li>
                <li>Google Product Management Certificate</li>
                <li>Advanced Product Strategy Certification</li>
              </ul>
            </div>

            <div className="info-card expertise">
              <div className="card-header">
                <FaBriefcase className="card-icon" />
                <h3>Core Expertise</h3>
              </div>
              <ul className="expertise-list">
                <li>
                  <span className="expertise-dot"></span>
                  <span>Strategic Product Development & Innovation</span>
                </li>
                <li>
                  <span className="expertise-dot"></span>
                  <span>Data-Driven Decision Making</span>
                </li>
                <li>
                  <span className="expertise-dot"></span>
                  <span>Cross-Functional Team Leadership</span>
                </li>
                <li>
                  <span className="expertise-dot"></span>
                  <span>Agile & Scrum Methodologies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bio-section">
            <p>
              As a Product Manager with over 5 years of experience, I specialize in transforming complex business challenges into elegant product solutions. My approach combines strategic thinking with technical expertise, always focusing on delivering measurable business impact while ensuring exceptional user experiences.
            </p>
            <p>
              My journey in product management has been marked by successful launches of innovative products, strategic partnerships, and consistent revenue growth. I'm particularly passionate about leveraging data analytics and user research to drive product decisions and create solutions that truly resonate with users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
