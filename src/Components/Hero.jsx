import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-wrapper">
        
        <div className="hero-left">
          <h1 className="hero-name">
            <span className="name-accent">MS.</span> MAKGOTSO SEOPA
          </h1>
         <p className="hero-roles-list">
                Front-End Developer • Back-End Developer • Full-Stack Developer • UI/UX Designer • 
                Software Engineer • System Administrator • Database Administrator • 
                DevOps Engineer • Cybersecurity Specialist • Data Analyst • Data Scientist
              </p>
          
        </div>

        <div className="hero-right">
          <div className="atomic-container">
            <div className="orbit-gradient orbit-clockwise"></div>
            <div className="orbit-gradient orbit-counter"></div>
            
            <div className="profile-frame-inner">
              <img 
                src="Assests/WhatsApp Image 2026-04-09 at 9.42.46 PM.jpeg" 
                alt="Makgotso Seopa" 
                className="profile-img-hero"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;