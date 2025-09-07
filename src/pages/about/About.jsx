import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Photo Section - Left Side */}
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
            <div className="about-image-container">
              <div className="about-image">
                <img 
                  src="/images/IMG_1134.JPG" 
                  alt="Yana Svet - Instructional Designer"
                  className="img-fluid"
                />
              </div>
              <div className="about-image-decoration"></div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
              </div>

              <p className="about-intro">
                I'm a passionate instructional designer with over 10 years of experience 
                transforming complex concepts into engaging, accessible learning experiences. 
                My mission is to bridge the gap between knowledge and understanding through 
                innovative educational solutions.
              </p>

              {/* <div className="about-highlights">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="highlight-item">
                      <div className="highlight-number">150+</div>
                      <div className="highlight-text">Projects Completed</div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="highlight-item">
                      <div className="highlight-number">50+</div>
                      <div className="highlight-text">Organizations Served</div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="about-skills">
                <h4 className="skills-title">Core Expertise</h4>
                <div className="skills-list">
                  <span className="skill-item">Curriculum Development</span>
                  <span className="skill-item">E-Learning Design</span>
                  <span className="skill-item">Learning Management Systems</span>
                  <span className="skill-item">Assessment Design</span>
                  <span className="skill-item">Educational Technology</span>
                  <span className="skill-item">Training Program Development</span>
                </div>
              </div>

              <div className="about-education">
                <h4 className="education-title">Education & Certifications</h4>
                <div className="education-list">
                  <div className="education-item">
                    <strong>M.Ed. in Instructional Design</strong> - University of Education
                  </div>
                  <div className="education-item">
                    <strong>Certified Professional in Learning and Performance (CPLP)</strong> - ATD
                  </div>
                  <div className="education-item">
                    <strong>Google for Education Certified Trainer</strong>
                  </div>
                </div>
              </div>

              <div className="about-approach">
                <h4 className="approach-title">My Approach</h4>
                <p className="approach-text">
                  I believe that effective learning happens when content is not just informative, 
                  but transformative. My design philosophy centers on learner-centered experiences 
                  that promote engagement, retention, and real-world application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
