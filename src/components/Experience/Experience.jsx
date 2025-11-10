import React from 'react';
import './Experience.css'; // Add custom styling in this file

export const Experience = () => {
  return (
    <section className="experience" id='experience-skills'>
      <div className='experience-header'>
        <span className='eyebrow'>Career Journey</span>
        <h2>Insightful roles that shaped my craft</h2>
        <p>Designing and engineering experiences across startups and community-led teams with a focus on impact, performance, and meaningful collaboration.</p>
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Junior Software Developer</h3>
          <p className="company-name">Supergensys Healthtech Pvt Ltd</p>
          <p className="duration">July 2025 - Present</p>
          <ul>
            <li>As a Junior Software Developer at Supergensys Healthtech, I contribute to the development of scalable, full-stack web applications focused on improving healthcare outcomes through technology.</li>
            <li>My role involves collaborating with cross-functional teams to design, develop, and deploy innovative healthcare solutions.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Web Development Intern</h3>
          <p className="company-name">RN Web Brand Solution</p>
          <p className="duration">September 2023 - January 2024</p>
          <ul>
            <li>Built responsive UIs with React.js, creating 20+ reusable components, reducing development time by 30%.</li>
            <li>Integrated third-party APIs and optimized state management, boosting responsiveness by 40% and cutting load times.</li>
            <li>Transformed wireframes into features, collaborating cross-functionally to increase user engagement by 15%.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h3>Open Source Contributor</h3>
          <p className="company-name">GirlScript</p>
          <p className="duration">July 2024 - Present</p>
          <ul>
            <li>Contributed to various open-source projects under the GirlScript initiative.</li>
            <li>Collaborated with other developers to build and enhance features for community-driven projects.</li>
            <li>Worked on bug fixes, feature enhancements, and code optimization.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

