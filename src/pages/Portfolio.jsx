import React from 'react';
import Project from '../components/Project'; // Import the Project component

// Portfolio component that displays a list of projects
const Portfolio = () => {
  // Project data
  const projects = [
    {
      title: 'Project One',
      image: 'https://picsum.photos/200', // Placeholder image
      appLink: 'https://example.com', // TODO: Replace with actual link
      repoLink: 'https://github.com/yourusername/project-one', // TODO: Replace with actual link
    },
    {
      title: 'Project Two',
      image: 'https://picsum.photos/200', // Placeholder image
      appLink: 'https://example.com', // TODO: Replace with actual link
      repoLink: 'https://github.com/chrsipychips12', 
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project 
            key={project.title} 
            title={project.title} 
            image={project.image} 
            appLink={project.appLink} 
            repoLink={project.repoLink} 
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

