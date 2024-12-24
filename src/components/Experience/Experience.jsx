import React from 'react';
import './Experience.css'; // Add custom styling in this file

export const Experience = () => {
  return (
    <section className="experience" id='experience-skills'>
      <h2>💼 Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <div className='dot'></div>
          <h3>Web Development Intern</h3>
          <p className="company-name">DC Info Tech Pvt. Ltd.</p>
          <p className="duration">October 2024 - Present</p>
          <ul>
            <li>Worked on front-end development with HTML, CSS, and JavaScript.</li>
            <li>Collaborated on the implementation of responsive web designs.</li>
            <li>Contributed to improving UI/UX of client projects.</li>
            <li>Utilized React.js for interactive web applications.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <div className='dot'></div>
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

