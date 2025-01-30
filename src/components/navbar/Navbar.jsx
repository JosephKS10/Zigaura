import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ footerRef, aboutRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    if (footerRef.current) {
      window.scrollTo({
        top: footerRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop - 50, // Adjust offset for smooth scrolling
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="left-nav">
        <img src="/logo-z.png" alt="logo" className="logo-image" />
        <div className="navbar-logo">
          <h1 className="signika-500-font">Zigaura</h1>
          <p>
            <i>&quot;Bridging Talent with Opportunities&quot;</i>
          </p>
        </div>
      </div>

      <ul className={`navbar-links signika-500-font ${isMenuOpen ? "show" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={scrollToAbout}>About Us</a></li>
        <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
        <li><a href="#contact" onClick={scrollToFooter}>Contact Us</a></li>
      </ul>
      <div
        className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
