import { Link, NavLink, Route, Routes } from "react-router-dom";
import { profile } from "./data/portfolioData";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <div className="portfolio-shell">
      <header className="top-bar">
        <NavLink className="brand" to="/" end>
          Kavya Sree Maniga
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
        <a
          className="action-btn"
          href="/Kavya_Sree_Maniga_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Kavya Sree Maniga · Senior Data Engineer</p>
        <p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)" }}
          >
            GitHub ↗
          </a>
        </p>
      </footer>
    </div>
  );
}
