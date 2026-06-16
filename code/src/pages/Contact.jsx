import './Contact.css';

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="hero contact-hero">
        <h1>Get In Touch</h1>
        <p>
          Have a project in mind, a question, or just want to say hello?
          I'd love to hear from you — let's start a conversation.
        </p>
      </section>

      {/* Two-column layout */}
      <div className="contact-layout">
        {/* Left — Contact Form */}
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me more…"></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

        {/* Right — Info Cards */}
        <div className="contact-info">
          <div className="card">
            <span className="icon">✉️</span>
            <h3>Email</h3>
            <p>hello@yourdomain.com</p>
          </div>
          <div className="card">
            <span className="icon">📍</span>
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>
          <div className="card">
            <span className="icon">🌐</span>
            <h3>Socials</h3>
            <p>GitHub · LinkedIn · Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
