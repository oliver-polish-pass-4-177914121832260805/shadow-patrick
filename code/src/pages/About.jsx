import React from 'react';
import './About.css';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GraphQL', icon: '◆' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '🔀' },
  { name: 'Next.js', icon: '▲' },
];

const timeline = [
  { year: '2016', role: 'Junior Frontend Developer', company: 'PixelCraft Studios' },
  { year: '2018', role: 'Senior UI Engineer', company: 'Wavelength Digital' },
  { year: '2021', role: 'Lead Product Designer & Developer', company: 'Nimbus Labs' },
  { year: '2024', role: 'Freelance Creative Technologist', company: 'Independent' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-heading">About Me</h1>
          <p className="about-hero-tagline">
            Designer, developer, and lifelong tinkerer — turning ideas into interfaces people love.
          </p>
        </div>
      </section>

      {/* Two-Column Bio */}
      <section className="about-bio">
        <div className="about-bio-left">
          <div className="about-avatar" aria-label="Avatar placeholder" />
          <h2 className="about-name">Alex Morgan</h2>
          <p className="about-title">Creative Technologist &amp; Full-Stack Designer</p>
        </div>
        <div className="about-bio-right">
          <p>
            I got my start back in 2016, fresh out of a graphic design program and absolutely
            obsessed with the idea that code could be a creative medium. I landed a junior role at
            a tiny agency called PixelCraft Studios, where I learned that building for the web is
            equal parts empathy, craft, and stubbornness. Those early days of wrestling with CSS
            floats and jQuery plugins taught me resilience — and a deep appreciation for modern tooling.
          </p>
          <p>
            Over the next several years I moved into increasingly senior roles, eventually leading
            product design and frontend engineering at Nimbus Labs. There I had the chance to ship
            three products from zero to launch, build a design system used by forty engineers, and
            mentor a small team of incredibly talented designers and developers. It was also where I
            fell in love with the space between design and engineering — the messy, fertile ground
            where prototypes become products.
          </p>
          <p>
            Today I work independently as a creative technologist, partnering with startups and
            established teams who need someone fluent in both design and code. Whether it's rapid
            prototyping, full-stack web applications, or accessibility audits, I bring eight-plus
            years of cross-disciplinary experience and a genuine enthusiasm for solving hard problems
            with elegant solutions.
          </p>
          <p>
            When I'm not at a keyboard you'll find me trail running, experimenting with generative
            art, or trying (and mostly failing) to bake sourdough that looks as good as the
            Instagram posts. I believe great work comes from curiosity, collaboration, and just
            enough caffeine.
          </p>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="about-skills">
        <h2 className="about-section-heading">Skills &amp; Tools</h2>
        <div className="about-skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="about-skill-chip">
              <span className="about-skill-icon">{skill.icon}</span>
              <span className="about-skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <h2 className="about-section-heading">Career Timeline</h2>
        <div className="about-timeline-track">
          {timeline.map((item, index) => (
            <div key={index} className="about-timeline-item">
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <span className="about-timeline-year">{item.year}</span>
                <h3 className="about-timeline-role">{item.role}</h3>
                <p className="about-timeline-company">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
