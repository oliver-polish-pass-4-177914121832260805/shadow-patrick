import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-home">
      <section className="hero">
        <span className="hero-badge">Welcome to my portfolio</span>
        <h1>Hi, I'm Alex Chen</h1>
        <p>A full-stack developer crafting elegant digital experiences with code and creativity.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
        </div>
      </section>

      <section className="section highlights">
        <h2>What I Do</h2>
        <div className="card-grid card-grid-3">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h4>Web Development</h4>
            <p>Building performant, accessible web applications with modern frameworks and best practices.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <h4>UI/UX Design</h4>
            <p>Designing intuitive interfaces that delight users and solve real problems.</p>
          </div>
          <div className="card">
            <div className="card-icon">🚀</div>
            <h4>Performance</h4>
            <p>Optimizing applications for speed, scalability, and exceptional user experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
