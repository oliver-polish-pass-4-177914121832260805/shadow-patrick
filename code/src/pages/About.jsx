import './About.css'

const skills = [
  { icon: '⚛️', name: 'React', desc: 'Component-driven UIs with hooks, context, and modern patterns' },
  { icon: '🔷', name: 'TypeScript', desc: 'Type-safe codebases that scale with confidence' },
  { icon: '🟢', name: 'Node.js', desc: 'REST APIs, real-time services, and server-side tooling' },
  { icon: '🎨', name: 'UI/UX Design', desc: 'Figma to pixel-perfect, accessible interfaces' },
  { icon: '🐍', name: 'Python', desc: 'Automation, data pipelines, and ML prototypes' },
  { icon: '☁️', name: 'Cloud / AWS', desc: 'Deployments with Lambda, S3, ECS, and IaC' },
]

const timeline = [
  {
    year: '2018',
    role: 'B.S. Computer Science',
    desc: 'Graduated with a focus on human-computer interaction and software engineering. Built my first full-stack app in a dorm room and never looked back.',
  },
  {
    year: '2019',
    role: 'Frontend Developer — BrightLoop Studio',
    desc: 'Joined a small agency crafting polished web products for startups. Learned the craft of shipping fast without sacrificing quality.',
  },
  {
    year: '2021',
    role: 'Senior Developer — Nimbus Health',
    desc: 'Led the frontend rebuild of a patient-facing telehealth platform serving 200k+ users. Deep-dived into performance, accessibility, and design systems.',
  },
  {
    year: '2024',
    role: 'Freelance Creative Developer',
    desc: 'Working independently with select clients on interactive experiences, design engineering, and React ecosystem consulting.',
  },
]

export default function About() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────── */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="subtitle">
          I build things for the web that feel as good as they look — blending craft, curiosity, and a healthy obsession with the details.
        </p>
      </section>

      {/* ── Bio ────────────────────────────────── */}
      <section className="about-bio" aria-label="Biography">
        <div className="about-bio__avatar" aria-hidden="true">A</div>
        <div className="about-bio__text">
          <p>
            Hey, I'm Alex. I studied Computer Science because I loved the idea of turning
            abstract problems into tangible, visual solutions. Somewhere between algorithms
            class and a late-night Figma session, I realised the sweet spot for me lives right
            where engineering meets design.
          </p>
          <p>
            Over the past six years I've shipped products for agencies, health-tech startups,
            and my own side projects. I care deeply about the small things — smooth transitions,
            thoughtful empty states, the way a button feels when you click it.
          </p>
          <p>
            These days I'm focused on the React ecosystem: Next.js, server components, and
            building design systems that teams actually enjoy using. When I'm not coding you'll
            find me sketching UI concepts, tweaking my Neovim config, or experimenting with
            generative art.
          </p>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────── */}
      <section className="about-skills" aria-label="Skills">
        <h2>Skills</h2>
        <div className="card-grid">
          {skills.map((s) => (
            <article className="card" key={s.name}>
              <div className="card__icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Experience Timeline ─────────────────── */}
      <section className="about-timeline" aria-label="Experience timeline">
        <h2>Experience</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline__item" key={item.year}>
              <span className="timeline__year">{item.year}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
