import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'E-commerce Platform',
    description: 'Full-stack storefront with cart, checkout, and Stripe integration.',
    tags: ['React', 'Node.js'],
  },
  {
    name: 'Weather App',
    description: 'Real-time forecasts with location search and animated radar maps.',
    tags: ['React Native', 'OpenWeather API'],
  },
  {
    name: 'Task Manager',
    description: 'Kanban-style productivity tool with drag-and-drop and due dates.',
    tags: ['Vue.js', 'Firebase'],
  },
  {
    name: 'AI Chat Interface',
    description: 'Conversational UI powered by large language models with streaming responses.',
    tags: ['TypeScript', 'OpenAI API'],
  },
  {
    name: 'Blog Platform',
    description: 'Markdown-based CMS with SEO optimization and RSS feed generation.',
    tags: ['Next.js', 'MDX'],
  },
  {
    name: 'Design System',
    description: 'Reusable component library with tokens, themes, and Storybook docs.',
    tags: ['Figma', 'Storybook'],
  },
];

const filters = ['All', 'Web', 'Mobile', 'Design'];

export default function Projects() {
  return (
    <>
      <section className="hero projects-hero">
        <h1>Projects</h1>
        <p>A selection of work I've built — from production apps to open-source tools.</p>
      </section>

      <section className="section">
        <div className="filter-bar">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`filter-btn${i === 0 ? ' active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="card-grid">
          {projects.map((p) => (
            <div className="card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div>
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
