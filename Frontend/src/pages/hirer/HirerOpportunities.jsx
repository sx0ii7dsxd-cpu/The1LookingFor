import Layout from "../../components/Layout";
import "./HirerDashboard.css";

function HirerOpportunities() {
  const opportunities = [
    {
      id: "1",
      title: "Java Backend Developer",
      type: "Full-Time",
      candidates: 12,
      status: "ACTIVE",
      skills: "Java, Spring Boot, PostgreSQL, Microservices",
      budget: "$100k - $140k",
    },
    {
      id: "2",
      title: "High-Throughput API Specialist",
      type: "Contract",
      candidates: 8,
      status: "ACTIVE",
      skills: "Java, Caching, Redis, Concurrency",
      budget: "$65/hr",
    },
    {
      id: "3",
      title: "System Refactoring Engineer",
      type: "Project",
      candidates: 5,
      status: "DRAFT",
      skills: "Software Architecture, Java, Testing",
      budget: "$8,000 fixed",
    },
  ];

  return (
    <Layout variant="authenticated">
      <main className="hirer-dashboard-container">
        <header className="hirer-dash-header">
          <div>
            <span className="hirer-tag">MANAGE OPPORTUNITIES</span>
            <h1>Your Listed Opportunities</h1>
            <p>Review candidate applications, proof scores, and challenge submissions.</p>
          </div>

          <a href="/hirer/opportunities/new" className="primary-action-btn">
            + CREATE OPPORTUNITY
          </a>
        </header>

        <div className="opportunities-grid">
          {opportunities.map((op) => (
            <article key={op.id} className="opp-card">
              <div className="opp-top">
                <span className={`status-pill ${op.status.toLowerCase()}`}>{op.status}</span>
                <span className="type-lbl">{op.type} • {op.budget}</span>
              </div>
              <h3>{op.title}</h3>
              <p className="cand-skills">Required: {op.skills}</p>
              <p className="cand-count">⚡ {op.candidates} Verified Candidates</p>
              <a href={`/hirer/opportunities/${op.id}`} className="secondary-btn">
                View Opportunity & Candidates &rarr;
              </a>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default HirerOpportunities;
