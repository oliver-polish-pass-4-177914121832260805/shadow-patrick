import './About.css';

export default function About() {
  return (
    <div className="page-about">
      {/* Hero */}
      <section className="hero">
        <span className="hero-badge">About Me</span>
        <h1>The Story So Far</h1>
        <p className="subtitle">
          From curious tinkerer to professional developer — always learning, always building.
        </p>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="about-grid">
          <div className="about-text">
            <h3>A bit about me</h3>
            <p>
              I started writing HTML at 14 because I wanted to make my Neopets page look cool.
              That curiosity turned into a career — I studied Computer Science, cut my teeth at
              early-stage startups, and spent years at design agencies shipping work for clients
              across industries.
            </p>
            <p>
              These days I freelance and build open-source tools. I care about clean code,
              accessible interfaces, and the small details that make software feel polished.
            </p>
            <p>
              When I'm not coding, you'll find me trail running, reading sci-fi, or experimenting
              with generative art.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">40+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">∞</span>
              <span className="stat-label">Curiosity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <h3>Tech Stack</h3>
        <div className="card-grid card-grid-3">
          <div className="card">
            <h4>Frontend</h4>
            <div className="skills-list">
              <div className="skill-item">React / Next.js</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">Tailwind CSS</div>
              <div className="skill-item">Framer Motion</div>
            </div>
          </div>

          <div className="card">
            <h4>Backend</h4>
            <div className="skills-list">
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Python / FastAPI</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">Redis</div>
            </div>
          </div>

          <div className="card">
            <h4>Tools &amp; Infra</h4>
            <div className="skills-list">
              <div className="skill-item">Docker</div>
              <div className="skill-item">AWS / Vercel</div>
              <div className="skill-item">Git / GitHub</div>
              <div className="skill-item">CI/CD</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
