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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [referralName, setReferralName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [errors, setErrors] = useState({
    referralName: "",
    contactNumber: "",
    email: "",
    selectedRole: "",
  });

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setContactNumber(value);

    setErrors((prev) => ({
      ...prev,
      contactNumber: value.length === 10 ? "" : "Please enter a valid 10-digit phone number.",
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(value) ? "" : "Please enter a valid email address.",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let validationErrors = {};
  
    if (!referralName.trim()) validationErrors.referralName = "Referral name is required.";
    if (contactNumber.length !== 10) validationErrors.contactNumber = "Please enter a valid 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) validationErrors.email = "Please enter a valid email address.";
    if (!selectedRole) validationErrors.selectedRole = "Please select either Artist or Host.";
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
  
      const formData = {
        referralName,
        contactNumber,
        email,
        selectedRole,
      };
  
      try {
          const response = await fetch("https://script.google.com/macros/s/AKfycbxO6zTlwKHIKjgBwPTCZQ2VpIdzEFqE_5Ud3rSqVe045a7aREP7W78slX5q8CcLvXPw_g/exec", {
          method: "POST",
          mode: "no-cors", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(response);
        setIsSubmitting(false);
        setShowSuccessMessage(true);
  
        setTimeout(() => {
          handleClose();
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
      }
    }
  };
  

  const handleClose = () => {
    setIsOpen(false);
    setSelectedRole(null);
    setReferralName("");
    setContactNumber("");
    setEmail("");
    setIsSubmitting(false);
    setShowSuccessMessage(false);
    setErrors({
      referralName: "",
      contactNumber: "",
      email: "",
      selectedRole: "",
    });
  };

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
        <button className="hero-button signika-200-font" onClick={() => setIsOpen(true)}>
          Join us
        </button>
        <p className="hero-p signika-200-font">
          Ready to Connect? Fill out this form and discover our amazing community
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

      {/* Popup Form */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            {showSuccessMessage || (<h2 className="popup-title signika-500-font">Join Us</h2>)}

            {showSuccessMessage ? (
              <div className="success-message">
                <p className="signika-200-font">Thank you! Your details has been submitted.</p>
                <p className="signika-200-font">Our team will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="signika-200-font">What best describes you?</label>
                <div className="role-selection">
                  <button
                    type="button"
                    className={selectedRole === "Artist" ? "role-button selected" : "role-button"}
                    onClick={() => setSelectedRole("Artist")}
                  >
                    Artist
                  </button>
                  <button
                    type="button"
                    className={selectedRole === "Host" ? "role-button selected" : "role-button"}
                    onClick={() => setSelectedRole("Host")}
                  >
                    Host
                  </button>
                </div>
                {errors.selectedRole && <p className="error-message">{errors.selectedRole}</p>}

                <label className="signika-200-font">Referral Name:</label>
                <input
                  type="text"
                  placeholder="Enter referral name"
                  className="signika-200-font"
                  value={referralName}
                  onChange={(e) => setReferralName(e.target.value)}
                />
                {errors.referralName && <p className="error-message">{errors.referralName}</p>}

                <label className="signika-200-font">Contact No.:</label>
                <div className="phone-input">
                  <span className="country-code">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    className="signika-200-font"
                    value={contactNumber}
                    onChange={handlePhoneChange}
                    maxLength="10"
                  />
                </div>
                {errors.contactNumber && <p className="error-message">{errors.contactNumber}</p>}

                <label className="signika-200-font">E-mail Id:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="signika-200-font"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <p className="popup-note signika-200-font">Our team will contact you soon</p>

                <div className="popup-buttons">
                  <button type="submit" className="signika-200-font" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  <button type="button" onClick={handleClose} className="signika-200-font">
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
