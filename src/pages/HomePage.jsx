import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import { experience, profile, projects, stats, techStack } from "../data/portfolioData";

const featuredRepos = [
  {
    name: "healthcare-analytics-dbt",
    description: "End-to-end healthcare analytics platform — Snowflake, dbt Medallion architecture, Airflow, Synthea FHIR R4, SCD Type 2 patient spine.",
    lang: "Python",
    langColor: "#3572A5",
    topics: ["dbt", "Snowflake", "Airflow"],
    url: "https://github.com/kavyasreemaniga/healthcare-analytics-dbt",
  },
  {
    name: "kavyasreemaniga.github.io",
    description: "This portfolio — React 19, Vite, React Router, custom CSS design system. Deployed via GitHub Actions to GitHub Pages.",
    lang: "JavaScript",
    langColor: "#f1e05a",
    topics: ["React", "Vite"],
    url: "https://github.com/kavyasreemaniga/kavyasreemaniga.github.io",
  },
];

export default function HomePage() {
  const featured = projects.find((p) => p.featured);

  return (
    <main className="page-wrap">
      {/* ── HERO ── */}
      <section className="hero hero-home" style={{ "--hero-image": `url(${heroImage})` }}>
        <div className="hero-copy">
          <p className="eyebrow">Senior Data Engineer</p>
          <h1>
            Building data<br />
            platforms that <em>scale.</em>
          </h1>
          <p className="lead">{profile.blurb}</p>
          <div className="hero-cta">
            <Link className="solid-btn" to="/projects">View Projects</Link>
            <Link className="ghost-btn" to="/resume">Resume</Link>
          </div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
              <Github size={15} /> GitHub
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={15} /> Email
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <img src={heroImage} alt="Kavya Sree Maniga portrait" />
          </div>
          <div className="cloud-badge-row">
            {["GCP", "AWS", "Azure"].map((cloud) => (
              <div key={cloud} className="cloud-badge">
                <span className="cb-label">Cloud</span>
                <span className="cb-value">{cloud}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── TECH STACK ── */}
      <section className="section">
        <div className="section-head">
          <p>Core Competencies</p>
          <h2>Technical Stack</h2>
        </div>
        <div className="stack-grid">
          {techStack.map((group) => (
            <article key={group.category} className="surface-card">
              <h3>{group.category}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section">
        <div className="section-head">
          <p>Career Snapshot</p>
          <h2>Recent Experience</h2>
        </div>
        <div className="timeline">
          {experience.slice(0, 2).map((job) => (
            <article key={`${job.company}-${job.period}`} className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <p className="period">
                  {job.period}
                  <span>{job.location}</span>
                </p>
              </div>
              <ul>
                {job.highlights.slice(0, 3).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <Link className="ghost-btn" to="/resume">See full experience →</Link>
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      {featured && (
        <section className="section">
          <div className="section-head">
            <p>Featured Work</p>
            <h2>Latest Project</h2>
          </div>
          <article className="project-card featured-card">
            <div className="project-top">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="category-chip">{featured.category}</span>
                <h3>{featured.title}</h3>
              </div>
              <div className="project-links">
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
            <p>{featured.description}</p>
            <ul>
              {featured.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <div className="pill-row">
              {featured.tech.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
          </article>
          <div style={{ marginTop: 16 }}>
            <Link className="ghost-btn" to="/projects">All projects →</Link>
          </div>
        </section>
      )}

      {/* ── GITHUB REPOS ── */}
      <section className="section">
        <div className="section-head">
          <p>Open Source</p>
          <h2>Featured Repositories</h2>
        </div>
        <div className="repos-grid">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <h4>
                <Github size={15} />
                {repo.name}
                <ExternalLink size={12} style={{ marginLeft: "auto", opacity: 0.4 }} />
              </h4>
              <p>{repo.description}</p>
              <div className="pill-row" style={{ marginBottom: 4 }}>
                {repo.topics.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
              <div className="repo-meta">
                <span className="repo-lang">
                  <span className="lang-dot" style={{ background: repo.langColor }} />
                  {repo.lang}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ marginBottom: 72 }}>
        <div className="contact-band" style={{ width: "100%", margin: 0 }}>
          <div>
            <h2>Open to new opportunities</h2>
            <p>
              Actively looking for Senior Data Engineer roles. H1B transfer — no visa processing delay.
              Happy to connect about roles in healthcare, fintech, or tech.
            </p>
          </div>
          <div className="contact-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="contact-link-item">
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
