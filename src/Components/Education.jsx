import React from 'react';

function Education() {
  return (
    <section id="education" className="education-container">
      <div className="education-card">
        
        <h3 className="education-title">
          <span className="accent-text">My</span> Educational Background
        </h3>
        
        <div className="education-content">
          <p className="institution-tag">Software Development Student at Belgium Campus</p>
          
          <div className="roles-grid">
            <div className="role-item">
              <div className="role-header">
                <strong>Front-End Development</strong>
                <span className="module-code">WPR261 & WFS361</span>
              </div>
              <p className="module-desc">Developing advanced web application using HTML and now React and other Mordern Frameworks .</p>
            </div>

            <div className="role-item">
              <div className="role-header">
                <strong>System Architecture & Project Management</strong>
                <span className="module-code">PRJ361 & BME261</span>
              </div>
              <p className="module-desc">Managing the lifecycle of technical projects, like the AI-powered recycling robotic arm that we are creating for our Year-End Project.</p>
            </div>

            <div className="role-item">
              <div className="role-header">
                <strong>Database Engineering</strong>
                <span className="module-code">DBR361 & DBD261 & DBC362 & DBF361</span>
              </div>
              <p className="module-desc">Mastering relational database design and advanced T-SQL for high-performance data systems.</p>
            </div>

            <div className="role-item">
              <div className="role-header">
                <strong>Computer Architecture</strong>
                <span className="module-code">IOT / COA161</span>
              </div>
              <p className="module-desc">Understanding low-level system logic to optimize software performance and hardware integration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;