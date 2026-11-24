import React from 'react';

function Skills() {
  const techStack = [
    { name: 'HTML5', iconClass: 'fab fa-html5' },
    { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
    { name: 'JavaScript', iconClass: 'fab fa-js' },
    { name: 'React', iconClass: 'fab fa-react' },
    { name: 'Figma', iconClass: 'fab fa-figma' },
    { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
    { name: 'Node.js', iconClass: 'fab fa-node-js' },
    { name: 'T-SQL', iconClass: 'fas fa-database' }
    
  ];

  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <div className="skills-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="skill-card" title={tech.name}>
            <i className={`${tech.iconClass} skill-icon-font`}></i>
            <p className="skill-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;