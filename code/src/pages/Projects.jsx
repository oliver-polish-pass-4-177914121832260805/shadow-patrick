import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'FinFlow Dashboard',
    description: 'A real-time financial analytics platform that consolidates portfolio data, risk metrics, and market insights into a single intuitive interface.',
    tags: ['React', 'D3', 'Node'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'MedConnect',
    description: 'A telehealth scheduling app enabling seamless video consultations, appointment management, and secure patient-provider communication.',
    tags: ['Next.js', 'WebRTC', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'EcoTrack',
    description: 'Sustainability metrics platform for global supply chains — visualizing carbon footprints, waste reduction, and compliance at a glance.',
    tags: ['Vue', 'Python', 'Mapbox'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Marketplace Hub',
    description: 'A curated e-commerce experience connecting independent artisans with conscious consumers, featuring seamless payments and storytelling.',
    tags: ['React Native', 'Stripe', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    title: 'CodeLens',
    description: 'An AI-powered code review tool that catches bugs, suggests optimizations, and enforces team standards directly inside the editor.',
    tags: ['TypeScript', 'OpenAI', 'VS Code'],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'CityPulse',
    description: 'An urban discovery and events app that curates local experiences — from hidden gems to live events — tailored to your interests.',
    tags: ['Flutter', 'Firebase', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="projects-hero">
        <h1>Our Work</h1>
        <p>
          We build digital products that solve real problems — from financial
          dashboards and telehealth platforms to AI-powered developer tools and
          urban discovery apps.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="projects-card" key={project.title}>
              <div
                className="projects-card-image"
                style={{ background: project.gradient }}
                aria-hidden="true"
              />
              <div className="projects-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projects-tags">
                  {project.tags.map((tag) => (
                    <span className="projects-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="projects-case-link">
                  View Case Study <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
