import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title signika-500-font">Welcome to Zigaura</h1>
        <p className="hero-subtitle signika-200-font">
        Connecting Artists and Gig Hosts across India
        </p>
        <button className="hero-button signika-200-font">Join us</button>
        <p className="hero-p signika-200-font">Ready to Connect? Fill out this form and discover our amazing community</p>
      </div>
      <div className="hero-image">
        <img src="/background.jpg" alt="Hero Background" />
      </div>
    </section>
  );
}

export default HeroSection;
