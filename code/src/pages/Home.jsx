import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    icon: '🎨',
    title: 'Product Design',
    description:
      'Crafting intuitive interfaces and experiences that delight users and solve real problems through research-driven design.',
  },
  {
    icon: '⚡',
    title: 'Frontend Engineering',
    description:
      'Building performant, accessible web applications with modern frameworks and a keen eye for detail.',
  },
  {
    icon: '✨',
    title: 'Creative Technology',
    description:
      'Exploring the intersection of design and code—interactive prototypes, generative art, and experimental interfaces.',
  },
];

const featuredProjects = [
  {
    title: 'Lumina Dashboard',
    tagline: 'A real-time analytics platform for SaaS teams.',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)',
  },
  {
    title: 'Verdant Mobile',
    tagline: 'Plant-care companion app with smart reminders.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__heading">Hi, I'm Alex Morgan</h1>
          <p className="home-hero__subtitle">
            Designer &amp; engineer building thoughtful digital products.
          </p>
          <div className="home-hero__ctas">
            <Link to="/projects" className="btn btn--solid">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="home-intro">
        <h2 className="section-heading">What I Do</h2>
        <div className="home-intro__cards">
          {services.map((s) => (
            <div className="home-intro__card" key={s.title}>
              <span className="home-intro__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="home-intro__title">{s.title}</h3>
              <p className="home-intro__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="home-featured">
        <h2 className="section-heading">Featured Work</h2>
        <div className="home-featured__grid">
          {featuredProjects.map((p) => (
            <Link to="/projects" className="home-featured__tile" key={p.title}>
              <div
                className="home-featured__image"
                style={{ background: p.gradient }}
                aria-hidden="true"
              />
              <div className="home-featured__info">
                <h3 className="home-featured__title">{p.title}</h3>
                <p className="home-featured__tagline">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
