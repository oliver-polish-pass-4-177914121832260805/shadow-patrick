import React, { useState } from 'react';
import './Contact.css';

const contactDetails = [
  { icon: '✉️', label: 'Email', value: 'hello@example.com' },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
  { icon: '🐦', label: 'Twitter', value: '@example' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/example' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Let's talk.</h1>
      </section>

      {/* Body */}
      <section className="contact-body">
        {/* Left - Info */}
        <div className="contact-info">
          <p className="contact-intro">
            I'm open to freelance, collaborations, and full-time conversations.
            Best way to reach me is email or the form.
          </p>

          <ul className="contact-list">
            {contactDetails.map((item) => (
              <li key={item.label} className="contact-list-item">
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success">
              <p>✅ Thanks — I'll be in touch.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project…"
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
