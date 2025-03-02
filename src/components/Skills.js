import React, { useEffect, useRef } from 'react';
import { FaStar, FaCode, FaUsers, FaChartLine, FaTools, FaDatabase, FaTasks } from 'react-icons/fa';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-category, .metric-card');
    skillElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: <FaChartLine />,
      value: '5+',
      label: 'Years Experience',
    },
    {
      icon: <FaStar />,
      value: '15+',
      label: 'Projects Delivered',
    },
    {
      icon: <FaUsers />,
      value: '20+',
      label: 'Teams Led',
    }
  ];

  const skillCategories = {
    'Languages & Development': {
      icon: <FaCode className="category-icon" />,
      description: 'Programming languages and development technologies',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'HTML/CSS', proficiency: 88 },
        { name: 'MySQL', proficiency: 85 }
      ]
    },
    'Tools & Platforms': {
      icon: <FaTools className="category-icon" />,
      description: 'Professional tools and collaboration platforms',
      skills: [
        { name: 'MS Excel', proficiency: 95 },
        { name: 'Power BI', proficiency: 90 },
        { name: 'JIRA & Confluence', proficiency: 92 },
        { name: 'Figma & Miro', proficiency: 88 },
        { name: 'Epic & Veeva', proficiency: 85 }
      ]
    },
    'Data Analytics': {
      icon: <FaDatabase className="category-icon" />,
      description: 'Data analysis and visualization expertise',
      skills: [
        { name: 'SQL & Databases', proficiency: 92 },
        { name: 'Tableau', proficiency: 88 },
        { name: 'Snowflake', proficiency: 85 },
        { name: 'Data Analysis', proficiency: 90 },
        { name: 'Query Functions', proficiency: 88 }
      ]
    },
    'Project Management': {
      icon: <FaTasks className="category-icon" />,
      description: 'Project management and team collaboration',
      skills: [
        { name: 'Agile/Lean', proficiency: 95 },
        { name: 'Requirement Gathering', proficiency: 92 },
        { name: 'Problem-Solving', proficiency: 90 },
        { name: 'Communication', proficiency: 95 },
        { name: 'Team Leadership', proficiency: 92 }
      ]
    }
  };

  return (
    <section id="skills" ref={skillsRef} className="s-skills dark">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Professional Expertise</h2>
          <p className="section-description">
            Comprehensive skill set combining technical proficiency, data analytics, and project management
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, { icon, description, skills }]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                {icon}
                <h3 className="category-title">{category}</h3>
              </div>
              <p className="category-description">{description}</p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
