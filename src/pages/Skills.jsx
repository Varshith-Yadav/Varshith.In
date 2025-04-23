import React from 'react';
import '../Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java']
    },
    {
      title: 'Frontend',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'React.js']
    },
    {
      title: 'DevOps',
      icon: '🛠️',
      skills: ['Docker', 'Jenkins', 'Kubernetes']
    },
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: ['Google Cloud Platform (GCP)']
    },
    {
      title: 'Tools & Platforms',
      icon: '📦',
      skills: ['Git', 'GitHub']
    }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h2 className="category-title">
              <span>{category.icon}</span>
              {category.title}
            </h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 