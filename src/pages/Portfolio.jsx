import React from 'react';
import Project from '../components/Project'; // Import the Project component

// Portfolio component that displays a list of projects
const Portfolio = () => {
  // Project data
  const projects = [
    {
      title: 'Prework Study Guide',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/prework-study-guide',
    },
    {
      title: 'Mini Project 1',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/mini-project-1',
    },
    {
      title: 'Advanced CSS Wireframe',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/Advanced-CSS-Wireframe-1',
    },
    {
      title: 'USYD Challenge Week 1',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/USYD-Challenge-week1',
    },
    {
      title: 'Pay Roll Tracker',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/Pay-Roll-Tracker',
    },
    {
      title: 'Personal Blog Template',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/Personal-Blog-Template',
    },
    {
      title: 'Personal Task Board',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/personal-task-board',
    },
    {
      title: 'Weather Dashboard',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/weather-dashboard',
    },
    {
      title: 'ReadMe Generator',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/potential-enigma',
    },
    {
      title: 'SVG Logo Generator',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/svg-logo-generator',
    },
    {
      title: 'Express Note Taker',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/express-note-taker',
    },
    {
      title: 'Employee Tracker',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
      repoLink: 'https://github.com/chrispychips12/employee-tracker',
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
            repoLink={project.repoLink} 
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
