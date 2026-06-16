import React, { useState } from 'react';
import './Contact.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="contact-hero page-hero flex-center">
        <div style={{ textAlign: 'center' }}>
          <h1>Get in Touch</h1>
          <p className="subtitle">
            Have a project in mind, a question, or just want to say hi?
            I&rsquo;m always open to interesting conversations and collaboration.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="contact-body">
        {/* Form column */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea…"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <div className="submit-row">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>

          {sent && (
            <div className="success-message" role="status" aria-live="polite">
              <span className="check-icon">✓</span>
              Thanks, I'll get back to you!
            </div>
          )}
        </form>

        {/* Info sidebar */}
        <aside className="contact-info">
          <h2>Contact Info</h2>

          <div className="info-card">
            <div className="info-label">Email</div>
            <div className="info-value">
              <a href="mailto:hello@alex.dev">hello@alex.dev</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-label">Location</div>
            <div className="info-value">📍 San Francisco, CA</div>
          </div>

          <div className="info-card">
            <div className="info-label">Social</div>
            <nav className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57v-2.23c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 00-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.12-3.18s1-.33 3.3 1.23a11.4 11.4 0 016 0C17.3 4.36 18.3 4.7 18.3 4.7a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.24 3.22c0 4.62-2.8 5.63-5.48 5.92a2.87 2.87 0 01.82 2.23v3.29c0 .31.22.69.83.57A12 12 0 0012 .3" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 01-2.07-2.06 2.06 2.06 0 014.12 0 2.06 2.06 0 01-2.05 2.06zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.53A1.75 1.75 0 001.77 24h20.46A1.75 1.75 0 0024 22.26V1.73A1.75 1.75 0 0022.23 0z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.24 2H22.3l-8.88 10.13L23.9 22h-8.27l-6.44-8.42L2 22h-4.07l9.5-10.83L.73 2h8.48l5.81 7.69L18.24 2zm-1.45 17.76h2.26L7.36 4.27H4.94l11.85 15.49z" />
                </svg>
                Twitter
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
