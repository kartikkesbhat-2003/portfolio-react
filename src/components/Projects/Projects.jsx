import React from 'react';
import './Projects.css';
import {ProjectCard} from '../Common/ProjectCard';
import project_1 from '../../assets/projects/project_1.svg';
import project_2 from '../../assets/projects/project_2.svg';
import project_3 from '../../assets/projects/project_3.svg';
import project_4 from '../../assets/projects/project_4.png';
import project_5 from '../../assets/projects/project_5.png';
import project_6 from '../../assets/projects/project_6.png';
import project_7 from '../../assets/projects/project_7.png';
import project_8 from '../../assets/projects/project_8.png';
import project_9 from '../../assets/projects/project_9.png';

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
      image: project_9,
      name: 'Collex - Campus Marketplace',
      description: 'A MERN-based e-commerce platform designed for college students.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication',],
      demo: 'https://collex.app/',
    },
    {
      image: project_4,
      name: 'StudyNotion',
      description: 'An online platform for creating and enrolling in courses.',
      techStack: ['React', 'JavaScript', 'Node', 'HTML', 'CSS'],
    },
    {
      image: project_5,
      name: 'ReferMe',
      description: 'A notes sharing platform for students to share and access study materials.',
      techStack: ['React', 'JavaScript', 'Node', 'Express', 'MongoDB', 'Razorpay'],
      demo: 'https://referme.tech/',
    },
    {
      image: project_6,
      name: 'Kronix',
      description: 'Task management app to organize and prioritize tasks effectively.',
      techStack: ['Next', 'TypeScript', 'Node', 'MongoDB', 'Tailwind CSS'],
    },
    {
      image: project_7,
      name: 'Grass Detection using ML',
      description: 'A machine learning model to detect grass in images for agricultural applications.',
      techStack: ['Python', 'Jupyter Notebook', 'Machine Learning', 'OpenCV', 'YOLOv8'],
    },
    {
      image: project_8,
      name: 'AI-Based Eye movement and pupil dialation detection',
      description: 'A project to analyze eye movements and pupil dilation using AI techniques.',
      techStack: ['Python', 'OpenCV', 'Machine Learning', 'Dlib', 'TensorFlow', 'PyTorch'],
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
  ];
  
  
    
      return (
        <section className="projects-section" id='work'>
          <div className='projects-header'>
            <span className='eyebrow'>Selected Work</span>
            <h1>All creative works</h1>
            <p>Pairing pragmatic engineering with purposeful design across responsive web apps, internal tools, and community projects.</p>
            <a href="https://github.com/kartikkesbhat-2003?tab=repositories" target="_blank" rel="noopener noreferrer" className="explore-link">Explore more →</a>
          </div>
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
