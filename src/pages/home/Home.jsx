import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import About from '../about/About';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contacts/Contacts';


function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">Yana Svet</Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className="nav-link btn-link" 
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn-link" 
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn-link" 
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn-link" 
                  onClick={() => scrollToSection('portfolio')}
                >
                  Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn-link" 
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="wave-animation"></div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1 className="hero-title">
                  Creating Meaningful Learning Experiences
                </h1>
                <p className="hero-subtitle">
                  Learning Architect & Experience Designer
                </p>
                <p className="hero-description">
                  Transforming complex concepts into engaging, accessible learning journeys. 
                  With over 10 years of experience in educational technology and curriculum design, 
                  I help organizations build impactful training programs that drive real results.
                </p>
                <button 
                  className="btn-custom"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <i className="fas fa-arrow-right me-2"></i>
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>

      
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <button 
            className="scroll-btn"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </section>

      {/* Placeholder sections for future development */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;