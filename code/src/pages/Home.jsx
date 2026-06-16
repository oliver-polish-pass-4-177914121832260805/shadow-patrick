import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    icon: '🧭',
    title: 'Strategy',
    description: 'We define the vision, audience, and roadmap so every decision moves the needle.',
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'From wireframes to polished interfaces — experiences people love to use.',
  },
  {
    icon: '⚙️',
    title: 'Engineering',
    description: 'Robust, scalable code that brings designs to life and stands up to real-world use.',
  },
];

const projects = [
  {
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    title: 'Lumina Dashboard',
    description: 'A real-time analytics platform for SaaS teams.',
  },
  {
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
    title: 'Verdant E-Commerce',
    description: 'A sustainable fashion brand\'s online storefront.',
  },
  {
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    title: 'Pulse Health App',
    description: 'Mobile wellness tracking with personalized insights.',
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            We build digital products<br /> that matter
          </h1>
          <p className="home-hero__subtitle">
            Horizon is a modern digital studio that turns bold ideas into polished,
            high-impact products — from first sketch to launch day and beyond.
          </p>
          <Link to="/projects" className="home-hero__cta">
            See Our Work
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="home-services">
        <div className="home-section__inner">
          <h2 className="home-section__heading">What We Do</h2>
          <div className="home-services__grid">
            {services.map((s) => (
              <article key={s.title} className="home-card">
                <span className="home-card__icon" aria-hidden="true">{s.icon}</span>
                <h3 className="home-card__title">{s.title}</h3>
                <p className="home-card__desc">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="home-featured">
        <div className="home-section__inner">
          <h2 className="home-section__heading">Featured Work</h2>
          <div className="home-featured__grid">
            {projects.map((p) => (
              <article key={p.title} className="home-card home-card--project">
                <div
                  className="home-card__image"
                  style={{ background: p.gradient }}
                  aria-hidden="true"
                />
                <h3 className="home-card__title">{p.title}</h3>
                <p className="home-card__desc">{p.description}</p>
                <Link to="/projects" className="home-card__link">
                  See More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <div className="home-cta__inner">
          <h2 className="home-cta__title">Ready to start?</h2>
          <p className="home-cta__subtitle">
            Let's talk about your next project and bring your vision to life.
          </p>
          <Link to="/contact" className="home-cta__button">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
