import './Contact.css';

function Contact() {
  return (
    <div className="page-contact">
      <section className="hero">
        <span className="hero-badge">Contact</span>
        <h1>Let's Connect</h1>
        <p className="subtitle">Have a project in mind, or just want to chat? I'd love to hear from you.</p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h3>Send a message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Or find me at</h3>
            <div className="info-card">
              <div className="info-card-icon">📧</div>
              <h4>Email</h4>
              <p>hello@alexchen.dev</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">💼</div>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/alexchen</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">🐙</div>
              <h4>GitHub</h4>
              <p>github.com/alexchen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
