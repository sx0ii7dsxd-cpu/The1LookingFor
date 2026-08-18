import { useState } from "react";
import Layout from "../../components/Layout";
import "./DiscoverTalent.css";

function DiscoverTalent() {
  const [filters, setFilters] = useState({
    skill: "Java",
    minProof: "80%",
    challenge: "Any",
    experience: "Any",
  });



  return (
    <Layout variant="authenticated">
      <main className="discover-container">
        <header className="discover-header">
          <span className="hirer-tag">DISCOVER DEMONSTRATED TALENT</span>
          <h1>Find Candidates by Skill Proof</h1>
          <p>Filter candidates based on verified challenge performance rather than resume claims.</p>
        </header>

        {/* Filter Controls Bar */}
        <section className="filter-bar-card">
          <div className="filter-group">
            <label>Skill</label>
            <select
              value={filters.skill}
              onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
            >
              <option>Java</option>
              <option>Problem Solving</option>
              <option>SQL</option>
              <option>System Design</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Minimum Proof</label>
            <select
              value={filters.minProof}
              onChange={(e) => setFilters({ ...filters, minProof: e.target.value })}
            >
              <option>70%+</option>
              <option>80%+</option>
              <option>90%+</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Passed Challenge</label>
            <select
              value={filters.challenge}
              onChange={(e) => setFilters({ ...filters, challenge: e.target.value })}
            >
              <option>Any</option>
              <option>Java High-Throughput API</option>
              <option>Query Optimization</option>
              <option>System Refactoring</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Experience</label>
            <select
              value={filters.experience}
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            >
              <option>Any</option>
              <option>Fresher (0-1 yrs)</option>
              <option>Intermediate (2-4 yrs)</option>
              <option>Experienced (5+ yrs)</option>
            </select>
          </div>
        </section>

        {/* Empty Candidates State */}
        <section className="discover-grid">
          <article className="filter-bar-card" style={{ width: "100%", gridColumn: "1 / -1", textAlign: "center", padding: "40px 20px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No candidates found yet.</h3>
            <p style={{ color: "var(--text-muted, #a0aec0)" }}>
              Candidates will appear here once people create profiles and build their Skill DNA.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default DiscoverTalent;
