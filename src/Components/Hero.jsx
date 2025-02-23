




import React from "react";
import "../Css/Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Explore.</h1>
        <p className="hero-subtitle">
          Look deep into nature, and then you will understand everything better.
        </p>
        <button className="hero-button">Keep Going</button>
      </div>
    </section>
  );
};

export default HeroSection;
