import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contacts.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'sarah.johnson@email.com',
      link: 'mailto:sarah.johnson@email.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      details: 'San Francisco, CA',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin-in',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/sarah-johnson-id',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-instagram',
      platform: 'Instagram',
      url: 'https://instagram.com/sarah_instructional_design',
      color: '#e4405f'
    },
    {
      icon: 'fab fa-twitter',
      platform: 'Twitter',
      url: 'https://twitter.com/sarah_learns',
      color: '#1da1f2'
    },
    {
      icon: 'fas fa-globe',
      platform: 'Website',
      url: 'https://sarahjohnson-id.com',
      color: '#ffffff'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-divider mx-auto"></div>
              <p className="section-subtitle">
                Ready to transform your learning programs? Let's discuss how we can create engaging educational experiences together
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 mb-5">
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project discussion, consultation, etc."
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, timeline, and learning objectives..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-contact">
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="col-lg-4">
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                I'm always excited to discuss new projects and learning challenges. Feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-content">
                      <h5 className="contact-title">{item.title}</h5>
                      {item.link ? (
                        <a href={item.link} className="contact-link">
                          {item.details}
                        </a>
                      ) : (
                        <span className="contact-text">{item.details}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h4 className="social-title">Follow me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      title={social.platform}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="availability-section">
                <h4 className="availability-title">Availability</h4>
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span className="status-text">Available for new projects</span>
                </div>
                <p className="availability-note">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="row">
          <div className="col-12">
            <div className="contact-cta text-center">
              <h3 className="cta-title">Ready to start your project?</h3>
              <p className="cta-description">
                Let's create something amazing together. Book a free consultation to discuss your learning objectives.
              </p>
              <button className="btn-consultation">
                <i className="fas fa-calendar-alt me-2"></i>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;