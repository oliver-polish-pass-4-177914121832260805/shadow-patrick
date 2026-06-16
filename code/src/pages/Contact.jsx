import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Let's Work Together</h1>
          <p className="contact-hero-subtitle">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="contact-body">
        <div className="contact-body-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form-textarea"
                  placeholder="Tell us about your project..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contact-form-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon contact-info-icon--email"></div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-detail">hello@horizonstudio.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon contact-info-icon--location"></div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Location</h3>
                <p className="contact-info-detail">San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon contact-info-icon--social"></div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Social</h3>
                <div className="contact-info-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">LinkedIn</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">Twitter</a>
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
