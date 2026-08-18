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

  const candidatesList = [
    {
      id: "1",
      name: "Rahul Sharma",
      headline: "Java Backend Developer",
      proofScore: "92%",
      skills: ["Java", "Spring Boot", "SQL", "REST APIs"],
      passedChallenges: ["Java Backend", "Debugging", "API Design"],
    },
    {
      id: "2",
      name: "Priya Patel",
      headline: "Distributed Systems & Java Lead",
      proofScore: "95%",
      skills: ["Java", "Distributed Systems", "Redis", "Kafka"],
      passedChallenges: ["System Design", "High-Throughput API", "Indexing"],
    },
    {
      id: "3",
      name: "Amit Kumar",
      headline: "Full Stack Java & Microservices Engineer",
      proofScore: "89%",
      skills: ["Java", "Microservices", "PostgreSQL", "Docker"],
      passedChallenges: ["Java Backend", "System Refactoring"],
    },
    {
      id: "4",
      name: "Neha Gupta",
      headline: "Backend & Performance Optimization Specialist",
      proofScore: "94%",
      skills: ["Java", "Query Tuning", "Spring", "System Design"],
      passedChallenges: ["Query Optimization", "Production Debugging", "Java API"],
    },
  ];

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

        {/* Candidate Cards Grid */}
        <section className="discover-grid">
          {candidatesList.map((cand) => (
            <article key={cand.id} className="talent-card">
              <div className="talent-card-head">
                <div>
                  <h3>{cand.name}</h3>
                  <p className="talent-headline">{cand.headline}</p>
                </div>
                <span className="talent-proof-badge">⚡ {cand.proofScore} Proof</span>
              </div>

              <div className="talent-skills">
                {cand.skills.map((s, idx) => (
                  <span key={idx} className="skill-chip">
                    ✓ {s}
                  </span>
                ))}
              </div>

              <div className="verified-challenges-preview">
                <span className="lbl">Verified Challenges:</span>
                <ul>
                  {cand.passedChallenges.map((ch, idx) => (
                    <li key={idx}>✓ {ch}</li>
                  ))}
                </ul>
              </div>

              <div className="talent-card-foot">
                <a href={`/hirer/candidates/${cand.id}`} className="primary-action-btn sm-btn">
                  VIEW FULL PROOF MATRIX &rarr;
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default DiscoverTalent;
