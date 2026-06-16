import './Projects.css';

const projects = [
  {
    title: 'TaskFlow',
    description:
      'A full-featured task management application with drag-and-drop Kanban boards, real-time collaboration, and smart deadline tracking. Built to help teams stay organized without the overhead.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    link: '#',
  },
  {
    title: 'ShopSphere',
    description:
      'A modern e-commerce platform with product search, cart management, Stripe checkout, and an admin dashboard for inventory control. Designed for small-to-medium retailers.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    title: 'WeatherLens',
    description:
      'An interactive weather dashboard that visualizes forecast data from multiple APIs. Features animated charts, location-based search, and severe-weather alerts.',
    tags: ['React', 'D3.js', 'OpenWeather API', 'CSS'],
    link: '#',
  },
  {
    title: 'DevBlog CMS',
    description:
      'A headless content management system tailored for developer blogs. Supports Markdown authoring, syntax highlighting, tag-based navigation, and RSS generation.',
    tags: ['Astro', 'MDX', 'SQLite', 'Vercel'],
    link: '#',
  },
  {
    title: 'FitPulse',
    description:
      'A fitness tracking app that logs workouts, visualizes progress over time, and provides AI-powered training suggestions. Syncs with wearable devices via Bluetooth.',
    tags: ['React Native', 'Firebase', 'TensorFlow Lite'],
    link: '#',
  },
  {
    title: 'OpenLedger',
    description:
      'A personal finance dashboard that aggregates bank transactions, categorizes spending, and generates monthly reports. Privacy-first — all data stays on-device.',
    tags: ['Vue.js', 'IndexedDB', 'Chart.js', 'PWA'],
    link: '#',
  },
];

const categories = ['All', 'Web App', 'Mobile', 'Dashboard', 'CMS'];

export default function Projects() {
  return (
    <main className="projects-page">
      {/* Hero */}
      <section className="projects-hero">
        <div className="projects-hero__inner">
          <h1 className="projects-hero__title">My Projects</h1>
          <p className="projects-hero__subtitle">
            A selection of things I've built — from quick experiments to
            production-ready applications. Each one taught me something new.
          </p>
        </div>
      </section>

      {/* Filter bar (visual only) */}
      <section className="section projects-filters">
        <div className="projects-filters__bar" role="group" aria-label="Filter projects by category">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`projects-filter-btn${i === 0 ? ' projects-filter-btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project cards */}
      <section className="section projects-grid-section">
        <div className="card-grid projects-grid">
          {projects.map(({ title, description, tags, link }) => (
            <article key={title} className="card project-card">
              <h2 className="project-card__title">{title}</h2>
              <p className="project-card__desc">{description}</p>

              <ul className="project-card__tags gap-sm" aria-label={`Technologies used in ${title}`}>
                {tags.map((tag) => (
                  <li key={tag} className="tag">{tag}</li>
                ))}
              </ul>

              <a href={link} className="btn btn-outline project-card__link" aria-label={`View ${title} project`}>
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
