import { useState } from 'react';

function Header({ theme, onThemeToggle, onNavClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">L 💛 T</div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {/* <a href="#story" onClick={(e) => { e.preventDefault(); handleNavClick('story'); }}>
            Our Story
          </a> */}
          <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>
            Gallery
          </a>
          <a href="#notes" onClick={(e) => { e.preventDefault(); handleNavClick('notes'); }}>
            Notes
          </a>
          <button 
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

