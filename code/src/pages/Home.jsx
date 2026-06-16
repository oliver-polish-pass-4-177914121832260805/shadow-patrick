import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  {
    name: 'Lumina Dashboard',
    description:
      'A real-time analytics dashboard built for SaaS teams to monitor KPIs and user engagement.',
    tags: ['React', 'D3.js', 'Node'],
  },
  {
    name: 'Verdant E-Commerce',
    description:
      'Full-stack storefront with cart, checkout, and Stripe integration for a sustainable goods brand.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    name: 'Aether Design System',
    description:
      'A component library and design token system adopted across three product teams.',
    tags: ['Figma', 'Storybook', 'CSS'],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero home-hero">
        <h1>Hi, I'm Patrick</h1>
        <p>
          Designer &amp; developer crafting thoughtful digital experiences —
          from pixel-perfect interfaces to the systems that power them.
        </p>
      </section>

      {/* Featured Work */}
      <section className="section">
        <h2>Featured Work</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section home-cta">
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>
        <div className="btn-group">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
