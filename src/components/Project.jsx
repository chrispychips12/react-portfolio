import React from 'react';

// Project component that displays individual project details
const Project = ({ title, image, repoLink }) => (
  <div className="project">
    <img src={image} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
