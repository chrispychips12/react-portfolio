import React from 'react';

// AboutMe component that displays a brief bio and a placeholder image
const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <img 
      src="https://picsum.photos/150" // Placeholder image URL
      alt="Developer Avatar" 
      style={{ width: '150px', borderRadius: '50%' }} 
    />
    <p>
      Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications.
      I love coding and enjoy learning new technologies.
    </p>
  </section>
);

export default AboutMe;
