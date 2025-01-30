import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="about-title" data-aos="fade-up">About <span className="highlight">Zigaura</span></h2>

        <div className="about-section" data-aos="fade-up">
          <h3 className="section-heading">Mission</h3>
          <p className="section-text">
            Our mission is to <span className="italic">empower gig artists and event hosts</span> by creating a <span className="highlight">secure platform</span> for collaboration, visibility, and growth.
          </p>
        </div>

        <div className="about-section" data-aos="fade-up">
          <h3 className="section-heading">Vision</h3>
          <p className="section-text">
            We envision to be <span className="highlight">India's leading community</span> where artists can share their talent, and hosts can <span className="italic">discover and book incredible performers effortlessly.</span>
          </p>
        </div>

        <div className="about-section" data-aos="fade-up">
          <h3 className="section-heading">Why Choose <span className="highlight">Zigaura?</span></h3>
          <ul className="about-grid">
        {[
            { title: "Seamless Connections", desc: "Easily link up with gig artists and event hosts." },
            { title: "Exclusive Gigs", desc: "Access verified opportunities and top talent." },
            { title: "Security", desc: "Find safe and secure matchings with on-time payment." },
            { title: "Quick Onboarding", desc: "Fill a form, get connected, simple and fast." },
            { title: "Personalized Support", desc: "Get guidance for gigs and career growth." },
            { title: "Curated Talent", desc: "Hosts find the perfect artist for their events." },
        ].map((item, index) => (
            <li key={index} className="about-card" aria-label={item.title} data-aos="fade-up">
            <h3 className="about-card-title">{item.title}</h3>
            <p className="about-card-text">{item.desc}</p>
             </li>
        ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
