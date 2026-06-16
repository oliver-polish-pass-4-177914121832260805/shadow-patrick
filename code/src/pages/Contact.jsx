import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Let's Connect</h1>
          <p>
            I'm always open to new opportunities, collaborations, and
            conversations. Whether you have a project in mind or just want to
            say hello — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="contact-body">
        {/* Left: Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                required
              />
            </div>
            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info-wrapper">
          <h2>Contact Info</h2>

          <div className="contact-info-cards">
            <div className="contact-info-card">
              <span className="info-dot info-dot--email" />
              <div>
                <h3>Email</h3>
                <a href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev</a>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="info-dot info-dot--location" />
              <div>
                <h3>Location</h3>
                <p>New York, NY</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="info-dot info-dot--social" />
              <div>
                <h3>Social</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
