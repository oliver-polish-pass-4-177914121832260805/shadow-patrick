import React from 'react';
import './Home.css';

const featuredProjects = [
  {
    title: 'Pulse Analytics',
    description:
      'A real-time business intelligence dashboard that turns raw event streams into actionable insights with live visualizations.',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
  },
  {
    title: 'Voyager CMS',
    description:
      'A headless content platform with a drag-and-drop page builder, role-based workflows, and a blazing-fast GraphQL API.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Nimbus Deploy',
    description:
      'An opinionated CI/CD toolkit that takes apps from commit to production in minutes with zero-config cloud deployments.',
    tags: ['Go', 'Terraform', 'AWS', 'GitHub Actions'],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Alex</span>
          </h1>
          <p className="hero-tagline">
            I design and build thoughtful digital experiences — blending clean
            code with bold ideas to ship products people love.
          </p>
          <div className="hero-actions">
            <a href="/projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="featured-section section">
        <h2 className="featured-heading">Featured Work</h2>
        <p className="featured-sub">
          A selection of projects I've designed and shipped recently.
        </p>

        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article className="card featured-card" key={project.title}>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="card-tags">
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
    </>
  );
}
