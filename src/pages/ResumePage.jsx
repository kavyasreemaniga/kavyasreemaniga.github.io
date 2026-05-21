import { Download, Linkedin, Mail } from "lucide-react";
import { certifications, education, experience, profile, techStack } from "../data/portfolioData";

export default function ResumePage() {
  return (
    <main className="page-wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>

      {/* ── HEADER ── */}
      <div className="resume-hero">
        <div className="surface-card" style={{ borderLeft: "3px solid #52b788" }}>
          <h1
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 400,
              margin: "0 0 4px",
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 15,
              color: "var(--accent)",
              fontWeight: 500,
            }}
          >
            {profile.role}
          </p>
          <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.65 }}>
            {profile.blurb}
          </p>
          <div className="summary-grid" style={{ marginTop: 16 }}>
            <p>📍 {profile.location}</p>
            <p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                LinkedIn ↗
              </a>
            </p>
            <p>
              <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>
                {profile.email}
              </a>
            </p>
            <p>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                GitHub ↗
              </a>
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a
            href={profile.resume}
            download
            className="solid-btn no-print"
            style={{ justifyContent: "center" }}
          >
            <Download size={16} /> Download PDF
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="ghost-btn no-print"
            style={{ justifyContent: "center" }}
          >
            <Mail size={16} /> Get in Touch
          </a>
          <div
            style={{
              background: "var(--accent-soft)",
              border: "1px solid var(--tag-border)",
              borderRadius: 10,
              padding: "12px 16px",
              fontSize: 13,
              color: "var(--accent)",
              lineHeight: 1.55,
            }}
          >
            <strong>H1B Transfer</strong><br />
            No visa processing delay. Cost advantage to employer — no new cap required.
          </div>
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <section className="section">
        <div className="section-head">
          <p>Work History</p>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
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
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section">
        <div className="section-head">
          <p>Technical Skills</p>
          <h2>Stack</h2>
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

      {/* ── EDUCATION ── */}
      <section className="section">
        <div className="section-head">
          <p>Academic Background</p>
          <h2>Education</h2>
        </div>
        <div className="edu-grid">
          {education.map((ed) => (
            <article key={ed.degree} className="surface-card">
              <h3 style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontSize: "1.05rem", margin: "0 0 6px" }}>
                {ed.degree}
              </h3>
              <p className="company" style={{ margin: "0 0 4px" }}>{ed.school}</p>
              <p style={{ margin: 0, fontSize: 13, color: "var(--muted)" }}>
                {ed.location} · {ed.year}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section">
        <div className="section-head">
          <p>Credentials</p>
          <h2>Certifications</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">
              <h4>{cert.name}</h4>
              <span>{cert.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-band no-print" style={{ width: "100%", marginBottom: 0 }}>
        <div>
          <h2>Let's connect</h2>
          <p>
            Open to Senior Data Engineer roles in healthcare, fintech, and tech.
            H1B transfer — no visa processing delay.
          </p>
        </div>
        <div className="contact-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-item"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="contact-link-item">
            <Mail size={16} /> {profile.email}
          </a>
        </div>
      </section>
    </main>
  );
}
