import { useState } from 'react';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import AboutMe from './pages/AboutMe'; // Import AboutMe page
import Portfolio from './pages/Portfolio'; // Import Portfolio page
import Contact from './pages/Contact'; // Import Contact page
import Resume from './pages/Resume'; // Import Resume page
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me') // State to track the current section

  // Function to render the current section based on state
  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} /> {/* Render Header */}
      <h1>My Portfolio</h1>
      {renderSection()} {/* Render the current section */}
      <Footer /> {/* Render Footer */}
    </div>
  );
}

export default App
