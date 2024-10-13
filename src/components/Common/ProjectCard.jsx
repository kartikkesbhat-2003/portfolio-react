import React from 'react';
import './ProjectCard.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ image, name, description, techStack }) => {
    return (
        <div className="project-card">

          <div className="project-image">
            <img src={`${image}`} alt={name} />
          </div>

          <div className="project-details">

            <div className="project-header">

              <div className='project-title'>
                <h2>{name}</h2>
                <a href="#" className="external-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className='project-title' />
                </a>
              </div>
              
              <div className="tags">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tag ${tech.toLowerCase()}`}>
                    {tech}
                  </span>
                ))}
              </div>
            
            </div>

            <p className="project-description">{description}</p>
            
          </div>

        </div>
      );
}
