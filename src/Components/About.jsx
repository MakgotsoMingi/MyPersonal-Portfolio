import React from 'react';


function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-card">
        <div className="about-image-wrapper">
          <div className="about-profile-container">
            <img src="Assests/Screenshot 2026-05-05 122623.png" alt="Makgotso Seopa" 
              className="about-pic"
            />
          </div>
        </div>

        <div className="about-text-content">
          <h2>About <span className="highlight">Me</span></h2>
          <p>
            I am a passionate software development student at Belgium Campus, 
            dedicated to building reliable, easy-to-use, and durable software solutions. 
            My journey is driven by a love for full-stack web development and a growing 
            expertise in data science and analytics.
          </p>
          <p>
            Whether I'm designing complex doctor dashboards in React or working 
            on AI-powered hardware integrations, I focus on creating technology 
            that can withstand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;