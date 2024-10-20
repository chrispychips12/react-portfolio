import React from 'react';
import Navigation from './Navigation';

// Header component 
const Header = ({ setCurrentSection }) => (
  <header>
    <Navigation setCurrentSection={setCurrentSection} /> 
  </header>
);

export default Header;
