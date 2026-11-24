import React from 'react';

function Footer() {
  const currentYear = 2026; 

  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <p className="footer-text">All Rights Reserved ©{currentYear} Makgotso Seopa</p>
                

        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon" title="GitHub">
             <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon" title="LinkedIn">
             <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon" title="Instagram">
             <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <p className="footer-text">Portfolio Website| First React Project</p>
      </div>
    </footer>
  );
}

export default Footer;