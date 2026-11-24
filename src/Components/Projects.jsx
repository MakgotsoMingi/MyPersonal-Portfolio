import React, { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const allProjects = [
    { title: "E-Commerce website", type: "Completed", img: "Assests/Screenshot 2026-04-11 110842.png", githubUrl: "https://github.com/MakgotsoMingi/ProjectThree" },
    { title: "Weather Web App", type: "Completed", img: "Assests/Screenshot 2026-05-06 234152.png", githubUrl: "https://github.com/MakgotsoMingi/WeatherApp" },
    { title: "Task Manager with Chat interface", type: "Completed", img: "Assests/Screenshot 2026-05-07 000135.png", githubUrl: "https://github.com/MakgotsoMingi/SimpleSteps" },
    { title: "Medical Dashboard", type: "Complex", img: "Assests/Screenshot 2026-05-06 234509.png", githubUrl: "https://github.com/MakgotsoMingi/Mingi--Clinical-Care-Dashboard" },
    { title: "AI Recycling Arm", type: "Complex", img: "Assests/Screenshot 2026-05-03 020750.png", githubUrl: "" },
    { title: "Calculator App| React", type: "Completed", img: "Assests/Screenshot 2026-05-04 060944.png", githubUrl: "" },
    { title: "Resturant Website| Template", type: "Completed", img: "Assests/Screenshot 2026-05-06 234129.png", githubUrl: "https://github.com/MakgotsoMingi/QuickBites-E-Commerce-" },
    { title: "Trip Planner", type: "Complex | AI", img: "Assests/Screenshot 2026-05-06 225404.png", githubUrl: "", liveUrl: "https://partyrock.aws/u/MakgotsoM/gIMAf3N5O/TripShare-Budget-Travel-Planner" },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  const handleToggle = () => {
    if (!showAll) {
      setLoading(true);
      setTimeout(() => {
        setShowAll(true);
        setLoading(false);
      }, 800);
    } else {
      setShowAll(false);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="projects-grid">
          {displayedProjects.map((p, index) => {
            const isPending = !p.githubUrl && !p.liveUrl;
            const hasLiveApp = !!p.liveUrl;
            
            return (
              <div key={index} className={`project-card ${isPending ? 'pending' : 'active'}`}>
                <div className="project-image-container">
                  <img src={p.img} alt={p.title} className="project-img" />
                  
                  <div className="project-overlay">
                    {isPending ? (
                      <span className="coming-soon-text">Uploading Soon...</span>
                    ) : hasLiveApp ? (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="view-link">
                        Try AI App
                      </a>
                    ) : (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="view-link">
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-info">
                  <span className="project-type">{p.type}</span>
                  <h4 className="project-title">{p.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="show-more-trigger" onClick={handleToggle}>
        <p>{showAll ? "Show Less" : "Show All Projects"}</p>
        <div className={`arrow-icon ${showAll ? 'up' : 'down'}`}>
           {showAll ? '↑' : '↓'}
        </div>
      </div>
    </section>
  );
};

export default Projects;