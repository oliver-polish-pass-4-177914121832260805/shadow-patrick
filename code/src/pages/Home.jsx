import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  {
    id: 1,
    title: 'Nova Dashboard',
    description: 'A real-time analytics dashboard built for a SaaS startup to track user engagement and KPIs.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    id: 2,
    title: 'Bloom E-Commerce',
    description: 'Full-stack e-commerce platform with inventory management and seamless checkout experience.',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    id: 3,
    title: 'Waypoint Mobile App',
    description: 'Trip planning app with collaborative itineraries and live location sharing for travel groups.',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
];

const services = [
  {
    title: 'Design',
    description:
      'Crafting intuitive interfaces and visual systems that feel effortless to use and aligned with your brand.',
  },
  {
    title: 'Development',
    description:
      'Building performant, accessible web applications with modern frameworks and clean, maintainable code.',
  },
  {
    title: 'Strategy',
    description:
      'Helping teams prioritize features, define product roadmaps, and turn ideas into shippable outcomes.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Welcome to my portfolio</p>
          <h1 className="hero__headline">Hi, I'm Alex Morgan</h1>
          <p className="hero__subtitle">
            I design and build digital products that solve real problems. Let's make something great together.
          </p>
          <Link to="/projects" className="hero__cta">
            View My Work
          </Link>
        </div>
      </section>

      <section className="section featured">
        <div className="section__header">
          <h2 className="section__title">Featured Work</h2>
          <p className="section__subtitle">
            A selection of recent projects I'm proud of.
          </p>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.id}>
              <div
                className="project-card__image"
                style={{ background: project.gradient }}
              />
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <Link to="/projects" className="project-card__link">
                  View Project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="section__header">
          <h2 className="section__title">What I Do</h2>
          <p className="section__subtitle">
            Three disciplines, one goal — shipping impactful work.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
