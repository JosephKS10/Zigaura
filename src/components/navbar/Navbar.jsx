import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className='signika-500-font'>Zigaura</h1>
        <p><i>&quot;Bridging Talent with Opportunities&quot;</i></p>
      </div>
      <ul className={`navbar-links signika-500-font ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Us</a></li>
        <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
      </ul>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
