import './Projects.css';

const projects = [
  {
    title: 'FinTrack Dashboard',
    description: 'A real-time financial analytics dashboard for portfolio managers with interactive charts, risk modeling, and automated reporting.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'MediConnect',
    description: 'Telehealth platform connecting patients with specialists — featuring video consultations, secure records, and appointment scheduling.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React Native', 'WebRTC', 'AWS', 'HIPAA'],
  },
  {
    title: 'EcoRoute',
    description: 'Sustainable logistics planner that optimizes delivery routes for minimal carbon footprint while maintaining cost efficiency.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Vue.js', 'Python', 'Mapbox', 'ML'],
  },
  {
    title: 'Artisan Marketplace',
    description: 'E-commerce platform for independent artisans — curated storefronts, secure payments, and a built-in audience discovery engine.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Sanity'],
  },
  {
    title: 'CodeMentor AI',
    description: 'AI-powered code review tool that provides contextual suggestions, detects anti-patterns, and generates documentation automatically.',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    tags: ['TypeScript', 'OpenAI', 'VS Code', 'Rust'],
  },
  {
    title: 'UrbanPulse',
    description: 'City experience app that surfaces hidden gems, local events, and community-curated guides for urban explorers.',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Maps'],
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="projects-hero">
        <h1 className="projects-hero__title">Projects</h1>
        <p className="projects-hero__subtitle">
          A selection of work spanning web apps, mobile experiences, and design systems — each built to solve real problems.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="projects-filter-bar">
        <button className="projects-filter-btn projects-filter-btn--active">All</button>
        <button className="projects-filter-btn">Web</button>
        <button className="projects-filter-btn">Mobile</button>
        <button className="projects-filter-btn">Design</button>
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className="project-card__image"
              style={{ background: project.gradient }}
            />
            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="project-card__tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href="#" className="project-card__link">View Case Study →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
