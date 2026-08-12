import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="available-text">AVAILABLE FOR WORK</p>
          <h1 className="hero-title">
            Hi, I'm <span>Pratik</span>
          </h1>
          <p className="hero-description">
            Freelance <strong>UI/UX Designer & Frontend Developer</strong>. I design and build digital products
            that people love to use — fast, clean, and accessible.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              View my work 
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <button className="btn-secondary">
              Get in touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>34+</h3>
              <p>Projects done</p>
            </div>
            <div className="stat-item">
              <h3>21+</h3>
              <p>Happy clients</p>
            </div>
            <div className="stat-item">
              <h3>5y</h3>
              <p>Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="profile icon" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
