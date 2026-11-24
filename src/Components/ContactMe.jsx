import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(); 
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Assests/Makgotso Seopa CV.pdf'; 
    link.download = 'Makgotso Seopa CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0b3g3ju', 
      'template_56itemh', 
      form.current, 
      'EqvTPGxedOm4LhGK1'
    )
    .then((result) => {
        console.log("Email successfully sent:", result.text);
        setIsSubmitted(true);
    }, (error) => {
        console.log("Failed to send email:", error.text);
        alert("Something went wrong, please try again or email me directly.");
    });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact <span className="highlight">Me</span></h2>
        
        {isSubmitted ? (
          <div className="success-message-container">
            <h3 className="success-text">Thank you, {formData.name}!</h3>
            <p className="contact-subtext">I have received your message and will reach out soon.</p>
            <button 
              className="submit-btn-form" 
              onClick={() => setIsSubmitted(false)}
              style={{ marginTop: '20px' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <p className="contact-subtext">
              I am looking forward to hearing from you. You can use the form below or 
              <a href="mailto:seopamakgotso@gmail.com" className="email-direct-link"> email me directly</a>.
            </p>

            <form ref={form} className="contact-form-layout" onSubmit={handleFormSubmit}>
              <div className="form-input-group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Name" 
                  className="contact-field" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="E-Mail" 
                  className="contact-field" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="tel" 
                  name="user_contact" 
                  placeholder="Contact No." 
                  className="contact-field" 
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
              </div>

              <textarea 
                name="message" 
                placeholder="Enquire about Me" 
                className="contact-textarea"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>

              <div className="btn-group">
                <button type="submit" className="submit-btn-form">Submit</button>
                <button type="button" className="download-btn" onClick={handleDownload}>Download CV</button>
              </div>
            </form> 
          </>
        )}
      </div>
    </section>
  );
}

export default Contact