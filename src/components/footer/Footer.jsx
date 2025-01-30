import React, { forwardRef } from "react";
import "./Footer.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// eslint-disable-next-line react/display-name
const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">

        <div className="footer-left">
          <h2 className="footer-brand">Zigaura</h2>
          <p>Email: <a href="mailto:zigauraindia@gmail.com">zigauraindia@gmail.com</a></p>
          <p>Contact: <a href="tel:+918800865167">+91 8800865167</a></p>
        </div>


        <div className="footer-center"></div>


        <div className="footer-social">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/zigaura.india/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>


      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Zigaura. All rights reserved.
      </div>
    </footer>
  );
});

export default Footer;
