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

        {/* Main Portfolio Grid Layout */}
        <div className="row portfolio-main-grid">
          {/* Left Grid - Projects 1, 2, 3 */}
          <div className="col-lg-8 portfolio-left-grid">
            {/* Top Row - Projects 1 & 2 */}
            <div className="row mb-3">
              {filteredItems.slice(0, 2).map((item) => (
                <div key={item.id} className="col-6">
                  <div className="portfolio-item portfolio-small">
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <h4 className="portfolio-title">{item.title}</h4>
                          <p className="portfolio-client">{item.client}</p>
                          <p className="portfolio-description">{item.description}</p>
                          <div className="portfolio-tech">
                            {item.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">{tech}</span>
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
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Row - Project 3 (Full Width) */}
            {filteredItems.length > 2 && (
              <div className="row">
                <div className="col-12">
                  <div className="portfolio-item portfolio-wide">
                    <div className="portfolio-image">
                      <img src={filteredItems[2].image} alt={filteredItems[2].title} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <h4 className="portfolio-title">{filteredItems[2].title}</h4>
                          <p className="portfolio-client">{filteredItems[2].client}</p>
                          <p className="portfolio-description">{filteredItems[2].description}</p>
                          <div className="portfolio-tech">
                            {filteredItems[2].tech.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">{tech}</span>
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
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Grid - Projects 4 & 5 */}
          <div className="col-lg-4 portfolio-right-grid">
            {/* Project 4 */}
            {filteredItems.length > 3 && (
              <div className="mb-3">
                <div className="portfolio-item portfolio-tall">
                  <div className="portfolio-image">
                    <img src={filteredItems[3].image} alt={filteredItems[3].title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <h4 className="portfolio-title">{filteredItems[3].title}</h4>
                        <p className="portfolio-client">{filteredItems[3].client}</p>
                        <p className="portfolio-description">{filteredItems[3].description}</p>
                        <div className="portfolio-tech">
                          {filteredItems[3].tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
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
                </div>
              </div>
            )}
            
            {/* Project 5 */}
            {filteredItems.length > 4 && (
              <div>
                <div className="portfolio-item portfolio-tall">
                  <div className="portfolio-image">
                    <img src={filteredItems[4].image} alt={filteredItems[4].title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <h4 className="portfolio-title">{filteredItems[4].title}</h4>
                        <p className="portfolio-client">{filteredItems[4].client}</p>
                        <p className="portfolio-description">{filteredItems[4].description}</p>
                        <div className="portfolio-tech">
                          {filteredItems[4].tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
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
                </div>
              </div>
            )}
          </div>
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