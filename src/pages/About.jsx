import React from 'react';
import { Link } from 'react-router-dom';
import '../About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="image-placeholder">
        Add Your Image Here
      </div>
      
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-text">
          <p>
            Hey there! I'm <span className="highlight">Varshith Yadav</span>, a first-year B.Tech Computer Science student at Polaris School of Technology.
            I'm passionate about cloud computing, DevOps, and automation. Currently, I'm diving into <span className="tech-stack">Google Cloud, Jenkins, Docker, and Kubernetes</span> to build end-to-end DevOps pipelines.
          </p>

          <p>
            I love building full-stack web apps using the <span className="tech-stack">MERN stack</span> and have worked on projects like a PG Finder web app and a containerized Hello World server with Docker Compose.
          </p>

          <p>
            My short-term goal is to land a DevOps/AIOps internship by <span className="tech-stack">June 2025</span>, and eventually transition into MLOps and robotics.
          </p>

          <p>
            Outside of tech, I enjoy learning through YouTube, exploring automation tools, and tinkering with new tech stacks.
          </p>

          <Link to="/contact" className="connect-button">
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
