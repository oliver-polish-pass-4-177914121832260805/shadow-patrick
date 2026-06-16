import React from 'react';
import './About.css';

const values = [
  { emoji: '🎨', name: 'Craft', description: 'Every pixel and every line of code is an expression of care.' },
  { emoji: '💡', name: 'Clarity', description: 'We strip away noise so the message and the experience feel effortless.' },
  { emoji: '🤝', name: 'Collaboration', description: 'Great work is born when strategy, design, and engineering move as one.' },
];

const team = [
  { name: 'Jamie Chen', role: 'Founder & Strategy', bio: 'Charted the course from a two-person garage to a studio that ships worldwide.', gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)' },
  { name: 'Marcus Rivera', role: 'Lead Engineer', bio: 'Turns ambitious designs into bulletproof, scalable products.', gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)' },
  { name: 'Priya Sharma', role: 'Design Director', bio: 'Believes the best interfaces are the ones people never have to think about.', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)' },
  { name: 'Alex Okafor', role: 'Full-Stack Developer', bio: 'Bridges front-end polish with back-end reliability on every project.', gradient: 'linear-gradient(135deg, #10B981, #14B8A6)' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <h1 className="about-hero__title">About Horizon</h1>
        <p className="about-hero__subtitle">
          We're a small studio with a big belief — that thoughtful design and sharp
          engineering can make the digital world feel a little more human.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2 className="about-story__heading">Our Story</h2>
        <p className="about-story__text">
          Horizon started in 2020 as a two-person team working out of a shared desk in
          Brooklyn. Jamie and Marcus had spent years watching agencies prioritize speed
          over substance, and they wanted to build something different — a studio where
          craft wasn't a luxury, it was the default. With one designer and one engineer,
          they took on their first client projects, obsessing over every detail and
          learning that the best digital products come from people who genuinely care
          about the people using them.
        </p>
        <p className="about-story__text">
          Six years later, Horizon has grown into a tight-knit team of strategists,
          designers, and engineers who blend creative vision with technical precision.
          We've shipped products for startups finding their footing and enterprises
          reimagining their platforms. Our work spans brand identity, product design,
          and full-stack development — but what ties it all together is a shared
          obsession with clarity, quality, and the quiet confidence that comes from
          knowing every decision was intentional.
        </p>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2 className="about-values__heading">Our Values</h2>
        <div className="about-values__grid">
          {values.map((v) => (
            <article key={v.name} className="about-values__card">
              <span className="about-values__emoji">{v.emoji}</span>
              <h3 className="about-values__name">{v.name}</h3>
              <p className="about-values__desc">{v.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* The Team */}
      <section className="about-team">
        <h2 className="about-team__heading">The Team</h2>
        <div className="about-team__grid">
          {team.map((member) => (
            <article key={member.name} className="about-team__card">
              <div
                className="about-team__avatar"
                style={{ background: member.gradient }}
                aria-hidden="true"
              />
              <h3 className="about-team__name">{member.name}</h3>
              <p className="about-team__role">{member.role}</p>
              <p className="about-team__bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
