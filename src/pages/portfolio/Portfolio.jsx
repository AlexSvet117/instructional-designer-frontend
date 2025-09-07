import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Learning Platform',
      category: 'e-learning',
      description: 'Comprehensive e-learning platform for employee onboarding and skill development',
      image: '/images/portfolio-1.jpg',
      tech: ['Articulate Storyline', 'LMS Integration', 'SCORM'],
      client: 'Tech Solutions Inc.'
    },
    {
      id: 2,
      title: 'Medical Training Simulation',
      category: 'simulation',
      description: 'Interactive medical training modules with virtual patient scenarios',
      image: '/images/portfolio-2.jpg',
      tech: ['Virtual Reality', 'Interactive Media', 'Assessment'],
      client: 'Healthcare Academy'
    },
    {
      id: 3,
      title: 'Leadership Development Program',
      category: 'curriculum',
      description: 'Multi-module leadership training curriculum with assessments',
      image: '/images/portfolio-3.jpg',
      tech: ['Curriculum Design', 'Video Production', 'Gamification'],
      client: 'Global Corporation'
    },
    {
      id: 4,
      title: 'Mobile Learning App',
      category: 'e-learning',
      description: 'Mobile-first learning application for professional development',
      image: '/images/portfolio-4.jpg',
      tech: ['Mobile Design', 'Microlearning', 'Push Notifications'],
      client: 'Startup Accelerator'
    },
    {
      id: 5,
      title: 'Safety Training Modules',
      category: 'simulation',
      description: 'Industrial safety training with immersive scenarios',
      image: '/images/portfolio-5.jpg',
      tech: ['3D Simulations', 'Compliance Training', 'Certification'],
      client: 'Manufacturing Co.'
    },
    {
      id: 6,
      title: 'University Course Design',
      category: 'curriculum',
      description: 'Complete course redesign for online university program',
      image: '/images/portfolio-6.jpg',
      tech: ['Academic Design', 'Video Lectures', 'Peer Assessment'],
      client: 'State University'
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'e-learning', label: 'E-Learning' },
    { id: 'simulation', label: 'Simulations' },
    { id: 'curriculum', label: 'Curriculum' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Portfolio</h2>
              <div className="section-divider mx-auto"></div>
              <p className="section-subtitle">
                A showcase of innovative instructional design projects that transformed learning experiences and delivered measurable results
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className="portfolio-filters text-center">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="row portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4 className="portfolio-title">{item.title}</h4>
                      <p className="portfolio-description">{item.description}</p>
                      <div className="portfolio-tech">
                        {item.tech.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="portfolio-actions">
                        <button className="btn-view">
                          <i className="fas fa-eye"></i>
                          View Details
                        </button>
                        <button className="btn-external">
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h5 className="info-title">{item.title}</h5>
                  <p className="info-client">{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="portfolio-cta">
              <h3 className="cta-title">Interested in working together?</h3>
              <p className="cta-description">
                Let's discuss how I can help transform your learning objectives into engaging educational experiences
              </p>
              <button className="btn-portfolio"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-paper-plane me-2"></i>
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;