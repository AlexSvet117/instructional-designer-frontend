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
                I’m a Learning Architect with a passion for designing transformative learning experiences 
                that blend science, creativity, and strategy. With over a decade of experience in instructional 
                design, curriculum development, and digital learning innovation, I specialize in building scalable, 
                human-centered solutions that drive performance and engagement across industries.
              </p>

              <div className="about-skills">
                <h4 className="skills-title">Core Expertise</h4>
                <div className="skills-list">
                  {/* <span className="skill-item">Curriculum Development</span>
                  <span className="skill-item">E-Learning Design</span>
                  <span className="skill-item">Learning Management Systems</span>
                  <span className="skill-item">Assessment Design</span>
                  <span className="skill-item">Educational Technology</span>
                  <span className="skill-item">Training Program Development</span> */}
                  <span className="skill-item">Curriculum & Multimedia Development</span>
                  <span className="skill-item">Learning Experience Design (LXD)</span>
                  <span className="skill-item">Gamification & Simulation Design</span>
                  <span className="skill-item">Microlearning & vILTs</span>
                  <span className="skill-item">Performance Support (Job Aids, Toolkits)</span>
                  <span className="skill-item">UX Research & Journey Mapping</span>
                  <span className="skill-item">Agile Learning Development</span>
                  <span className="skill-item">LMS & SCORM Integration</span>
                  <span className="skill-item">Accessibility (Section 508 Compliance)</span>
                </div>
              </div>

              <div className="about-education">
                <h4 className="education-title">Education & Certifications</h4>
                <div className="education-list">
                  <div className="education-item">
                    Certified in Agile Instructional Design, Neuroscience for L&D, and Interactive Learning with Articulate 360
                  </div>
                  <div className="education-item">
                    Multiple Certificates of Appreciation from the U.S. Department of State for excellence in teaching and instructional design
                  </div>
                </div>
              </div>

              <div className="about-approach">
                <h4 className="approach-title">My Approach</h4>
                <p className="approach-text">
                  <strong>Grounded in science: </strong> I apply adult learning theory, cognitive psychology, behavioral science, and neuroscience to ensure learning sticks and drives behavior <br />
<strong>Digitally immersive: </strong> From gamified modules and simulations to microlearning and virtual instructor-led trainings (vILTs), I design for impact and accessibility.<br />
<strong>Strategically aligned: </strong> I partner with business leaders, SMEs, and cross-functional teams to ensure every learning initiative supports organizational goals.<br />
<strong>Iterative and agile: </strong> Using Agile/Scrum methodologies, I prototype, test, and refine learning products based on real-time feedback and data.<br />
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
