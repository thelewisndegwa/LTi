import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import Gallery from './components/Gallery';
import Notes from './components/Notes';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    scrollToSection('gallery');
  };

  return (
    <div className={`app ${theme}`}>
      <Header 
        theme={theme} 
        onThemeToggle={toggleTheme}
        onNavClick={scrollToSection}
      />
      <Hero onScrollToGallery={scrollToGallery} />
      <StoryTimeline />
      <Gallery />
      <Notes />
    </div>
  );
}

export default App;

