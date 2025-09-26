import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Boosting Engagement Activity',
      category: 'e-learning',
      description: 'A gamified innovative solution for a lengthier course to help learners reset their cognitive capacity. This approach combines a behavioral framework + gamification.',
      image: '/images/Project 1.png',
      tech: ['Articulate Storyline'],
      client: 'Global Corporation',
      projectUrl:'https://360.articulate.com/review/content/6e850652-161d-4a29-8e87-1fc86c203768/review?version=6'
    },
    {
      id: 2,
      title: 'Seven Rules of the Performance-Focused Learning',
      category: 'infographic',
      description: 'Upskilling the team on the performance-focused training vs knowledge-based one',
      image: '/images/Project 2.png',
      tech: ['Canva'],
      client: 'Global Corporation',
      projectUrl:'/images/Project 2_pdf.pdf'
    },
    {
      id: 3,
      title: "What's the Buyer Motivation",
      category: 'e-learning',
      description: 'Gamified microlearning on Buyer’ Motivation. Applied gamified framework called Socratic String – a framework that boosts learner confidence through answering questions with a low possibility of failure. Learners have 0 to little knowledge of the concepts',
      image: '/images/Project 5.png',
      tech: ['Articulate Storyline'],
      client: 'Global Corporation',
      projectUrl:'https://360.articulate.com/review/content/b4ff2536-0e74-460c-9cfe-9ebb2d5eb4f7/review'
    },
    {
      id: 4,
      title: 'Activating Customer Video and Internet Equipment',
      category: 'tool simulation',
      description: 'Tool simulation based on a customer scenario',
      image: '/images/Project 4.png',
      tech: ['Articulate Storyline'],
      client: 'Global Corporation',
      projectUrl:''
    },
    {
      id: 5,
      title: 'Overcoming Sales Objections Effectively',
      category: 'e-learning',
      description: 'A microlearning on Overcoming Sales Objections – combines gamification and performance-focused methodology. ',
      image: '/images/Project 3.png',
      tech: ['Articulate Storyline'],
      client: 'Global Corporation',
      projectUrl:'https://360.articulate.com/review/content/e7a8b87c-0b83-4fc6-a367-958a94a4ca40/review?version=1'
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'e-learning', label: 'E-Learning' },
    { id: 'tool simulation', label: 'Tool Simulations' },
    { id: 'infographic', label: 'Infographic' }
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
  <button 
    className="btn-view"
    onClick={() => window.open(item.projectUrl, '_blank')}
  >
    <i className="fas fa-external-link-alt"></i>
    View Project
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
  <button 
    className="btn-view"
    onClick={() => window.open(filteredItems[2].projectUrl, '_blank')}
  >
    <i className="fas fa-external-link-alt"></i>
    View Project
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
  <button 
    className="btn-view"
    onClick={() => window.open(filteredItems[3].projectUrl, '_blank')}
  >
    <i className="fas fa-external-link-alt"></i>
    View Project
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
  <button 
    className="btn-view"
    onClick={() => window.open(filteredItems[4].projectUrl, '_blank')}
  >
    <i className="fas fa-external-link-alt"></i>
    View Project
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