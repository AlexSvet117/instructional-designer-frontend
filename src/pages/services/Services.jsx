import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: 'fas fa-users',
      title: 'Training Program Development',
      description: 'End-to-end corporate training solutions that align with business objectives and drive employee performance through targeted skill development.'
    },
    {
      id: 2,
      icon: 'fas fa-laptop-code',
      title: 'E-Learning Design',
      description: 'Interactive digital courses and multimedia learning experiences that engage learners through innovative ideas, gamification, and evidence-based principles.'
    },
    {
      id: 3,
      icon: 'fas fa-clipboard-check',
      title: 'Learning Assessment',
      description: 'Comprehensive evaluation strategies and testing frameworks that measure learning outcomes and provide actionable insights for continuous improvement.'
    },
    {
      id: 4,
      icon: 'fas fa-book-open',
      title: 'Curriculum Development',
      description: 'Custom learning pathways designed to meet specific educational objectives and learner needs, incorporating best practices in instructional design and pedagogy.'
    },
    {
      id: 5,
      icon: 'fas fa-graduation-cap',
      title: 'LMS Implementation',
      description: 'Strategic planning and deployment of learning management systems, including content migration, user training, and ongoing optimization.'
    },
    {
      id: 6,
      icon: 'fas fa-lightbulb',
      title: 'Instructional Consulting',
      description: 'Expert guidance on learning strategy, instructional methodologies, and educational technology to maximize training effectiveness and ROI.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Services</h2>
              <div className="section-divider mx-auto"></div>
              <p className="section-subtitle">
                Comprehensive instructional design solutions to transform your learning objectives into engaging educational experiences
              </p>
            </div>
          </div>
        </div>

        <div className="row services-grid">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-5">
              <div className="service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <div className="title-divider"></div>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="services-cta">
              <p className="cta-text">Ready to enhance your learning programs?</p>
              <button className="btn-services"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-arrow-right me-2"></i>
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;