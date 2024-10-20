import React from 'react';
import TypingEffect from '../components/TypingEffect';

// AboutMe component that displays a brief bio and a placeholder image
const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <TypingEffect />
    <img 
      src="https://picsum.photos/150" // Placeholder image URL
      alt="Christopher Concepcion" 
      style={{ width: '150px', borderRadius: '50%' }} 
    />
    <p>
      Hello! I'm Christopher Concepcion, a passionate web developer with experience in building dynamic and responsive web applications.
      I love coding and enjoy learning new technologies. My goal is to create user-friendly and efficient applications that solve real-world problems.
    </p>
    <p>
      You can view my work at <a href="https://seejayc.com" target="_blank" rel="noopener noreferrer">seejayc.com</a>.
    </p>
  </section>
);

export default AboutMe;
