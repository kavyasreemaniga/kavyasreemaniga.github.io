import { ExternalLink, Github, Search } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/portfolioData";

const ALL = "All";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(ALL);

  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = projects.filter((p) => {
    const matchesFilter = activeFilter === ALL || p.category === activeFilter;
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesQuery;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="page-wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <div className="section-head" style={{ marginBottom: 24 }}>
        <p>Portfolio</p>
        <h2>Projects</h2>
      </div>

      {/* Search */}
      <div className="search-row">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search by name, tech, or description…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip${activeFilter === cat ? " active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="muted" style={{ marginTop: 32 }}>No projects match your search.</p>
      )}

      {/* Featured */}
      {featured && (
        <div style={{ marginBottom: 14 }}>
          <article className="project-card featured-card">
            <div className="project-top">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="category-chip">{featured.category}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#2d6a4f",
                      background: "#d8f3dc",
                      border: "1px solid #b7dfc9",
                      borderRadius: 999,
                      padding: "3px 10px",
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h3>{featured.title}</h3>
              </div>
              <div className="project-links">
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {featured.demo && (
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Demo
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
        </div>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <div className="project-grid">
          {rest.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-top">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="category-chip">{p.category}</span>
                  <h3>{p.title}</h3>
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p>{p.description}</p>
              <ul>
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="pill-row" style={{ marginTop: "auto" }}>
                {p.tech.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
