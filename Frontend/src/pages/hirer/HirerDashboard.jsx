import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./HirerDashboard.css";

function HirerDashboard() {
  const auth = getMockAuth();
  const name = auth.user?.name || "Alex";

  const opportunities = [
    { id: "1", title: "Java Backend Developer", candidates: 12, status: "ACTIVE", type: "Full-Time" },
    { id: "2", title: "High-Throughput API Specialist", candidates: 8, status: "ACTIVE", type: "Contract" },
    { id: "3", title: "System Refactoring Engineer", candidates: 5, status: "DRAFT", type: "Project" },
  ];

  const recentCandidates = [
    { id: "1", name: "Rahul Sharma", role: "Java Backend Developer", score: "92%", skills: "Java, Spring, SQL" },
    { id: "2", name: "Priya Patel", role: "Systems Architect", score: "95%", skills: "Java, Distributed Systems" },
    { id: "3", name: "Amit Kumar", role: "Backend Engineer", score: "89%", skills: "Java, Microservices" },
  ];

  return (
    <Layout variant="authenticated">
      <main className="hirer-dashboard-container">
        <header className="hirer-dash-header">
          <div>
            <span className="hirer-tag">HIRER DASHBOARD</span>
            <h1>Welcome, {name}.</h1>
            <p>Find people who can actually do the work. Based on proof, not history.</p>
          </div>

          <div className="dash-actions">
            <a href="/hirer/opportunities/new" className="primary-action-btn">
              + CREATE OPPORTUNITY
            </a>
            <a href="/hirer/discover" className="secondary-btn">
              Discover Verified Talent &rarr;
            </a>
          </div>
        </header>

        {/* Opportunities Overview */}
        <section className="hirer-section">
          <div className="section-head">
            <h2>Your Opportunities</h2>
            <a href="/hirer/opportunities" className="text-link">View All</a>
          </div>

          <div className="opportunities-grid">
            {opportunities.map((op) => (
              <article key={op.id} className="opp-card">
                <div className="opp-top">
                  <span className={`status-pill ${op.status.toLowerCase()}`}>{op.status}</span>
                  <span className="type-lbl">{op.type}</span>
                </div>
                <h3>{op.title}</h3>
                <p className="cand-count">⚡ {op.candidates} Verified Candidates Applied</p>
                <a href={`/hirer/opportunities/${op.id}`} className="secondary-btn">
                  View Opportunity & Candidates &rarr;
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Verified Candidates Discovery Preview */}
        <section className="hirer-section">
          <div className="section-head">
            <h2>Top Matched Candidates by Skill Proof</h2>
            <a href="/hirer/discover" className="text-link">Search All Talent</a>
          </div>

          <div className="candidate-cards-grid">
            {recentCandidates.map((cand) => (
              <article key={cand.id} className="cand-proof-card">
                <div className="cand-head">
                  <div>
                    <h4>{cand.name}</h4>
                    <span className="cand-role">{cand.role}</span>
                  </div>
                  <span className="proof-score">{cand.score} Proof</span>
                </div>
                <p className="cand-skills">Skills: {cand.skills}</p>
                <a href={`/hirer/candidates/${cand.id}`} className="primary-action-btn sm-btn">
                  VIEW PROOF MATRIX &rarr;
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HirerDashboard;
