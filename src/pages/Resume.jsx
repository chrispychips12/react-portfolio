import React from 'react';

// Resume component that displays a downloadable resume link
const Resume = () => (
  <section>
    <h2>Resume</h2>
    <a href="path/to/your/resume.pdf" download>Download Resume</a> {/* TODO: upload resume and add file path */}
    <ul>
      <li>Proficiency 1</li>
      <li>Proficiency 2</li>
      <li>Proficiency 3</li>
    </ul>
  </section>
);

export default Resume; // Export the Resume component

