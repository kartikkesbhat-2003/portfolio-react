import React, { useState } from 'react';
import './Skills.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaGitlab, 
  FaBootstrap, FaFigma, FaWordpress, FaChrome, FaLinux, FaWindows 
} from 'react-icons/fa';

import { 
  SiCplusplus, SiC, SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiVisualstudiocode, SiNetlify, SiJupyter 
} from 'react-icons/si';

// Skills data
const skills = [
  // Languages
  { name: 'HTML', icon: <FaHtml5 className='icon' /> },
  { name: 'CSS', icon: <FaCss3Alt className='icon' /> },
  { name: 'JavaScript', icon: <FaJs className='icon' /> },
  { name: 'C++', icon: <SiCplusplus className='icon' /> },
  { name: 'C', icon: <SiC className='icon' /> },

  // Frontend Frameworks & Libraries
  { name: 'React', icon: <FaReact className='icon' /> },

  // Styling
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='icon' /> },
  { name: 'Bootstrap', icon: <FaBootstrap className='icon' /> },

  // Backend Frameworks
  { name: 'Node.js', icon: <FaNodeJs className='icon' /> },
  { name: 'Express.js', icon: <SiExpress className='icon' /> },

  // Databases
  { name: 'MongoDB', icon: <SiMongodb className='icon' /> },
  { name: 'MySQL', icon: <SiMysql className='icon' /> },

  // Dev Tools
  { name: 'Git', icon: <FaGitAlt className='icon' /> },
  { name: 'GitHub', icon: <FaGithub className='icon' /> },

  // Miscellaneous
  { name: 'Figma', icon: <FaFigma className='icon' /> },
  { name: 'WordPress', icon: <FaWordpress className='icon' /> },
  { name: 'Linux', icon: <FaLinux className='icon' /> },
  { name: 'Windows', icon: <FaWindows className='icon' /> },
];

export const Skills = ({ logo, communityName, role, duration, description }) => {

  return (
    <div className="skills-carousel-section">
      <h2 className="skills-carousel-heading">
        💻 <span>Skills</span> 🚀
      </h2>
      <div className="skills-carousel">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
