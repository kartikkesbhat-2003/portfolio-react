import React from 'react';
import './Projects.css';
import {ProjectCard} from '../Common/ProjectCard';
import project_1 from '../../assets/projects/project_1.webp';

export const Projects = () => {
    const projects = [
        {
          image: project_1,
          name: 'Creative@Home',
          description: 'A website that provides roadmap for various fields in programming and helps people learn to code for free.',
          techStack: ['React', 'JavaScript', 'Node', 'html', 'css' ],
        },
        {
          image: project_1,
          name: 'Opinometer',
          description: 'A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.',
          techStack: ['React', 'Python', 'Chart.js'],
        },
        {
          image: project_1,
          name: 'Prayer Time API',
          description: 'It\'s an easy-to-use API to get today\'s (and tomorrow\'s) prayer times in any city in the world, based on Muslim Pro.',
          techStack: ['Python', 'Flask', 'BeautifulSoup'],
        },
        {
          image: project_1,
          name: 'Portfolio Website',
          description: 'A personal portfolio website to showcase projects and skills.',
          techStack: ['React', 'CSS'],
        },
      ];
    
      return (
        <section className="projects-section">
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
              />
            ))}
          </div>
        </section>
      );
}
