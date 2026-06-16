import './About.css'

const skills = [
  {
    title: 'Frontend',
    desc: 'Building responsive, accessible interfaces with modern frameworks and clean component architecture.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend',
    desc: 'Designing RESTful APIs and event-driven services with a focus on performance and reliability.',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Design',
    desc: 'Translating ideas into intuitive user experiences through wireframes, prototypes, and visual systems.',
    tags: ['Figma', 'Design Systems', 'Motion'],
  },
  {
    title: 'DevOps',
    desc: 'Automating builds, deployments, and infrastructure to ship fast and keep environments stable.',
    tags: ['Docker', 'CI/CD', 'AWS'],
  },
]

const timeline = [
  {
    year: '2018',
    title: 'Started Freelancing',
    desc: 'Launched my independent practice, building websites and branding for small businesses and startups.',
  },
  {
    year: '2019',
    title: 'First Full-Time Role',
    desc: 'Joined a fintech startup as a frontend engineer, shipping the customer dashboard from zero to launch.',
  },
  {
    year: '2021',
    title: 'Led a Platform Rewrite',
    desc: 'Spearheaded the migration of a legacy monolith to a modern React + Node microservices architecture.',
  },
  {
    year: '2023',
    title: 'Senior Engineer',
    desc: 'Promoted to senior engineer, mentoring a team of four and driving adoption of design-system tooling.',
  },
  {
    year: '2025',
    title: 'Open-Source & AI',
    desc: 'Began contributing to open-source AI tooling and integrating LLMs into production workflows.',
  },
]

function About() {
  return (
    <>
      <section className="hero about-hero">
        <h1>About Me</h1>
        <p>A developer who loves turning complex problems into simple, beautiful solutions.</p>
      </section>

      {/* ── Story ── */}
      <section className="section">
        <h2>My Story</h2>
        <div className="about-story">
          <div className="about-avatar" aria-label="Avatar placeholder">P</div>
          <div className="about-story-text">
            <p>
              I'm Patrick — a full-stack developer based in the Pacific Northwest. I've spent the
              last seven years building products that live at the intersection of design and
              engineering, from fintech dashboards to real-time collaboration tools.
            </p>
            <p>
              I care deeply about the craft: clean code, thoughtful UX, and systems that scale
              gracefully. When I'm not writing code, you'll find me hiking, sketching UI concepts in
              a notebook, or tinkering with mechanical keyboards.
            </p>
            <p>
              I believe the best software is built by small, empowered teams that ship early, listen
              to users, and iterate relentlessly. That philosophy guides every project I take on.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section about-skills">
        <h2>Skills</h2>
        <div className="card-grid">
          {skills.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section">
        <h2>Timeline</h2>
        <div className="about-timeline">
          {timeline.map((m) => (
            <div className="about-timeline-entry" key={m.year}>
              <span className="about-timeline-year">{m.year}</span>
              <h3 className="about-timeline-title">{m.title}</h3>
              <p className="about-timeline-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
