import React from 'react';
import './Resume.css'; // Import a new CSS file for styling

// Resume component that displays a downloadable resume link
const Resume = () => (
  <section className="resume-section">
    <h2>Resume</h2>
    <a href="/Christopher_Concepcion_NEW.pdf" download className="download-button">Download Resume</a>
    
    <div className="skills-container">
      <div className="skills-category">
        <h3>Technical Skills</h3>
        <ul>
          <li>JavaScript (ES6+), React.js, Node.js</li>
          <li>HTML5, CSS3, Responsive Web Design</li>
          <li>RESTful APIs, Git, CRM & ATS Systems</li>
          <li>Technical Jargon & Processes</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Excellent Communication & Interpersonal Skills</li>
          <li>Problem-Solving & Adaptability</li>
          <li>Objection Handling & Negotiation</li>
          <li>Team Collaboration & Leadership</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Industry Skills</h3>
        <ul>
          <li>Recruitment & Talent Sourcing</li>
          <li>Sales & Customer Service Expertise</li>
          <li>Building & Maintaining Candidate Relationships</li>
          <li>Project Management & Delivery Processes</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Resume; // Export the Resume component
