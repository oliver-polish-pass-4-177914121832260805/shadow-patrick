import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const categories = ['All', 'Product', 'Engineering', 'Creative'];

const projects = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    category: 'Product',
    description: 'A real-time analytics platform redesigned for clarity, speed, and executive-level decision making.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'Verdant Commerce',
    category: 'Engineering',
    description: 'Headless e-commerce engine built on event-driven architecture handling 50k concurrent users.',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    id: 3,
    title: 'Luminary Brand System',
    category: 'Creative',
    description: 'Full visual identity and design system for a climate-tech startup, from logo to component library.',
    gradient: 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
  },
  {
    id: 4,
    title: 'Pulse Health API',
    category: 'Engineering',
    description: 'HIPAA-compliant REST API powering wearable health data ingestion for 200k+ daily active users.',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
  },
  {
    id: 5,
    title: 'Arc Social Redesign',
    category: 'Product',
    description: 'Led the product strategy and UX overhaul that lifted daily engagement by 38% in three months.',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
  },
  {
    id: 6,
    title: 'Kinetic Motion Reel',
    category: 'Creative',
    description: 'Animated brand film combining 3D renders and motion typography for a fintech product launch.',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #6366F1 100%)',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="projects-hero">
        <h1>Projects</h1>
        <p>A selection of recent work across product, code, and creative direction.</p>
      </section>

      {/* Filter Bar */}
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-card-image"
              style={{ background: project.gradient }}
            />
            <div className="project-card-body">
              <span className="project-card-tag">{project.category}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <a href="#" className="project-card-link">
                View case study →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Strip */}
      <section className="projects-cta">
        <p>Have a project in mind?</p>
        <Link to="/contact" className="cta-link">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
