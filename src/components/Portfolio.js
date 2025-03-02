import React, { useState } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Healthcare Analytics Platform",
      shortDescription: "AI-driven healthcare analytics platform for patient care optimization",
      fullDescription: "Led the development of an innovative healthcare analytics platform that leverages AI and machine learning to optimize patient care pathways. The platform processes millions of patient records to provide actionable insights for healthcare providers.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      impact: [
        "Reduced patient readmission rates by 35%",
        "Improved diagnostic accuracy by 40%",
        "Generated $2.5M in annual cost savings"
      ],
      role: "Product Manager",
      duration: "12 months",
      link: "#"
    },
    {
      id: 2,
      title: "FinTech Payment Solution",
      shortDescription: "Modern payment processing platform for global transactions",
      fullDescription: "Spearheaded the development of a cutting-edge payment processing platform that handles cross-border transactions with enhanced security and reduced processing times.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
      technologies: ["Node.js", "MongoDB", "Docker", "Stripe API"],
      impact: [
        "Processed $50M in transactions within first quarter",
        "Reduced transaction time by 60%",
        "Achieved 99.99% uptime"
      ],
      role: "Product Owner",
      duration: "9 months",
      link: "#"
    },
    {
      id: 3,
      title: "Smart Energy Management",
      shortDescription: "IoT-based energy monitoring and optimization system",
      fullDescription: "Developed an intelligent energy management system that uses IoT sensors and real-time analytics to optimize energy consumption in commercial buildings.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800",
      technologies: ["IoT", "Azure", "React Native", "GraphQL"],
      impact: [
        "20% reduction in energy costs",
        "Implementation in 50+ commercial buildings",
        "ROI achieved within 6 months"
      ],
      role: "Product Manager",
      duration: "15 months",
      link: "#"
    },
    {
      id: 4,
      title: "E-commerce Analytics Dashboard",
      shortDescription: "Real-time analytics platform for e-commerce businesses",
      fullDescription: "Created a comprehensive analytics dashboard that provides real-time insights into e-commerce metrics, customer behavior, and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      technologies: ["React", "Redux", "Firebase", "D3.js"],
      impact: [
        "Increased conversion rates by 25%",
        "Optimized inventory turnover by 40%",
        "Reduced customer churn by 30%"
      ],
      role: "Product Owner",
      duration: "8 months",
      link: "#"
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="modal-links">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Repository
            </a>
          </div>
        </div>

        <div className="modal-body">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-details">
            <div className="detail-section">
              <h3>Overview</h3>
              <p>{project.fullDescription}</p>
            </div>

            <div className="detail-section">
              <h3>Role & Duration</h3>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
            </div>

            <div className="detail-section">
              <h3>Technologies</h3>
              <div className="tech-stack">
                <FaTools className="tech-icon" />
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Impact & Results</h3>
              <ul className="impact-list">
                {project.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-description">
          Showcasing innovative products that drive business growth
        </p>

        <div className="portfolio-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="portfolio-item"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-content">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className="portfolio-tech">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
