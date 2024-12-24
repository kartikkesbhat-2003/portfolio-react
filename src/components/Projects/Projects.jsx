import React from 'react';
import './Projects.css';
import {ProjectCard} from '../Common/ProjectCard';
import project_1 from '../../assets/projects/project_1.svg';
import project_2 from '../../assets/projects/project_2.svg';
import project_3 from '../../assets/projects/project_3.svg';

export const Projects = () => {
  const projects = [
    {
      image: project_1,
      name: 'Personal Portfolio Website',
      description: 'A portfolio website showcasing projects, skills, and experience.',
      techStack: ['React', 'JavaScript', 'Node', 'HTML', 'CSS'],
      demo: 'https://kkesbhat.netlify.app/',
    },
    {
      image: project_2,
      name: 'Mosam Check',
      description: 'A weather app that shows current location weather and allows searching by place.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'API',],
      demo: 'https://mosamcheck.netlify.app/',
    },
    {
      image: project_3,
      name: 'Enigma Key',
      description: 'A strong password generator for creating secure passwords.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'API',],
      demo: 'https://enigmakey.netlify.app/',
    },
    {
      image: project_1,
      name: 'StudyNotion',
      description: 'An online platform for creating and enrolling in courses.',
      techStack: ['React', 'JavaScript', 'Node', 'HTML', 'CSS'],
      demo: 'https://studynotion.netlify.app/',
    },
  ];
  
  
    
      return (
        <section className="projects-section" id='work'>
          <h1>💻 All Creative Works.</h1>
          <p>Here's some of my projects that I have worked on.</p>
          <a href="#" className="explore-link">Explore more →</a>
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                demo={project.demo}
              />
            ))}
          </div>
        </section>
      );
}
