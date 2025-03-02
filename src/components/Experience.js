import React from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaMapMarkerAlt, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "Leading Technology Company",
      period: "2020 - Present",
      location: "Boston, MA",
      highlights: [
        "Led strategic product initiatives resulting in $10M+ revenue impact",
        "Successfully delivered 20+ projects with cross-functional teams",
        "Implemented data-driven decision making processes improving feature adoption by 45%",
        "Developed and executed comprehensive product roadmaps aligned with business objectives"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Information Systems",
      institution: "Northeastern University",
      period: "2018 - 2020",
      location: "Boston, MA",
      highlights: ["GPA: 3.96/4.0"]
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Bennett University",
      period: "2014 - 2018",
      location: "India",
      highlights: []
    }
  ];

  const certifications = [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      year: "2023"
    },
    {
      title: "Google Product Management Certificate",
      issuer: "Google",
      year: "2022"
    },
    {
      title: "Advanced Product Strategy Certification",
      issuer: "Product School",
      year: "2021"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-description">
          Transforming ideas into impactful products through strategic leadership
        </p>

        <div className="timeline">
          <h3 className="timeline-section-title">
            <FaBriefcase className="section-icon" /> Work Experience
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">
                    <FaBuilding className="timeline-icon" /> {exp.company}
                  </span>
                </div>
                
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <FaCalendar className="timeline-icon" /> {exp.period}
                  </span>
                  <span className="timeline-location">
                    <FaMapMarkerAlt className="timeline-icon" /> {exp.location}
                  </span>
                </div>
                
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="highlight-item">
                      <span className="highlight-dot"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <h3 className="timeline-section-title">
            <FaGraduationCap className="section-icon" /> Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <span className="timeline-company">
                    <FaBuilding className="timeline-icon" /> {edu.institution}
                  </span>
                </div>
                
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <FaCalendar className="timeline-icon" /> {edu.period}
                  </span>
                  <span className="timeline-location">
                    <FaMapMarkerAlt className="timeline-icon" /> {edu.location}
                  </span>
                </div>
                
                {edu.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="highlight-item">
                        <span className="highlight-dot"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <h3 className="timeline-section-title">
            <FaCertificate className="section-icon" /> Certifications
          </h3>
          {certifications.map((cert, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaCertificate />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{cert.title}</h3>
                  <span className="timeline-company">
                    <FaBuilding className="timeline-icon" /> {cert.issuer}
                  </span>
                </div>
                
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <FaCalendar className="timeline-icon" /> {cert.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
