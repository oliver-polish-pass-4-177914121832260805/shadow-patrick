import './Projects.css'

function Projects() {
  return (
    <div className="page-projects">
      <section className="hero">
        <span className="hero-badge">Portfolio</span>
        <h1>My Projects</h1>
        <p>A selection of work I'm proud of — from side projects to production apps.</p>
      </section>

      <section className="section">
        <div className="card-grid card-grid-2">
          <div className="card">
            <h4>TaskFlow</h4>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag tag-cyan">TypeScript</span>
            </div>
            <p>A kanban-style task manager with drag-and-drop, real-time sync, and team collaboration.</p>
          </div>

          <div className="card">
            <h4>WeatherLens</h4>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag tag-green">API</span>
            </div>
            <p>Weather dashboard with 7-day forecasts, radar maps, and location-based alerts.</p>
          </div>

          <div className="card">
            <h4>CodeVault</h4>
            <div className="project-tags">
              <span className="tag tag-pink">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <p>A snippet manager for developers — organize, tag, and share code across teams.</p>
          </div>

          <div className="card">
            <h4>PixelGrid</h4>
            <div className="project-tags">
              <span className="tag">Canvas API</span>
              <span className="tag tag-cyan">WebGL</span>
            </div>
            <p>Interactive pixel art editor with layers, animation timeline, and export to GIF/PNG.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
