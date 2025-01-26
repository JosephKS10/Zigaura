import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const images = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title signika-500-font">Welcome to Zigaura</h1>
        <p className="hero-subtitle signika-200-font">
          Connecting Artists and Gig Hosts across India
        </p>
        <button className="hero-button signika-200-font">Join us</button>
        <p className="hero-p signika-200-font">
          Ready to Connect? Fill out this form and discover our amazing
          community
        </p>
      </div>
      <div className="hero-image">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
