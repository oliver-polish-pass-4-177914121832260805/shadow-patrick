import React from 'react';
import './About.css';

const skills = [
  'React',
  'TypeScript',
  'Figma',
  'Node.js',
  'Design Systems',
  'CSS / Tailwind',
  'Next.js',
  'Prototyping',
  'User Research',
  'Creative Coding',
];

const timeline = [
  {
    year: '2016',
    title: 'Started in Product Design',
    description: 'Joined a small studio in Brooklyn, designing interfaces for early-stage startups.',
  },
  {
    year: '2018',
    title: 'Moved into Frontend Engineering',
    description: 'Began writing production code alongside designers, bridging the gap between mock-up and markup.',
  },
  {
    year: '2021',
    title: 'Led a Design System at Scale',
    description: 'Built and maintained a component library adopted by four product teams across the organization.',
  },
  {
    year: '2024',
    title: 'Went Independent',
    description: 'Launched a freelance practice focused on design-engineering partnerships and creative technology.',
  },
];

export default function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__heading">About Me</h1>
        </div>
      </section>

      {/* Bio */}
      <section className="about-bio">
        <div className="about-bio__avatar">
          <div className="about-bio__circle" aria-label="Alex Morgan initials">
            AM
          </div>
        </div>
        <div className="about-bio__text">
          <p>
            I'm a designer and frontend engineer based in Brooklyn, New York.
            For the past eight years I've been working at the intersection of
            visual design and code, helping teams build products that are both
            beautiful and technically sound.
          </p>
          <p>
            My background spans product design, creative prototyping, and
            frontend architecture. I believe the best digital experiences emerge
            when the people shaping pixels also understand the systems that
            render them.
          </p>
          <p>
            I'm drawn to craft—the typography, the micro-interactions, the
            performance budgets. Every detail is an opportunity to show care for
            the people who use what we build.
          </p>
          <p>
            When I'm not designing or coding, you'll find me experimenting with
            generative art, exploring record shops, or walking the Brooklyn
            waterfront with a camera.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="about-skills">
        <h2 className="section-heading">Skills &amp; Tools</h2>
        <div className="about-skills__list">
          {skills.map((skill) => (
            <span className="about-skills__chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <h2 className="section-heading">Journey</h2>
        <div className="about-timeline__list">
          {timeline.map((item) => (
            <div className="about-timeline__item" key={item.year}>
              <span className="about-timeline__year">{item.year}</span>
              <div className="about-timeline__content">
                <h3 className="about-timeline__title">{item.title}</h3>
                <p className="about-timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
