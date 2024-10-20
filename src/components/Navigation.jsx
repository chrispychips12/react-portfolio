import React from 'react';

// Navigation component that displays links to different sections
const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume']; // Define the sections

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={currentSection === section ? 'active' : ''} // Highlight the current section
            onClick={() => setCurrentSection(section)} // Set the current section on click
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
