import React from 'react';
import Navigation from './Navigation';

// Header component 
const Header = ({ setCurrentSection }) => (
  <header>
    <h1>Christopher Concepcion</h1> 
    <Navigation setCurrentSection={setCurrentSection} /> 
  </header>
);

export default Header;
