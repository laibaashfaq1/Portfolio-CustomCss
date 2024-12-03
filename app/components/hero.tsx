import React from 'react';
import Navbar from './nabvar';
import '../style/hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-content">
        <p data-aos="zoom-in-up" className="hero-text">
          <span className="hero-word">I am</span>
          <span className="hero-word">Laiba</span>
          <span className="hero-word">Ashfaq</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
