import Layout from "../../components/Layout";
import "./OpportunityDetails.css";

function OpportunityDetails({ id = "1" }) {
  const opportunity = {
    title: "Java Backend Developer",
    status: "ACTIVE",
    type: "Full-Time",
    budget: "$100k - $140k",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST APIs"],
    description:
      "We are looking for a backend engineer who excels at building resilient APIs, managing database transactions, and writing clean, scalable Java code. Selection is based 100% on practical challenge proof.",
    challenge: "Java High-Throughput API Challenge (30 mins)",
  };

  const candidates = [
    { id: "1", name: "Rahul Sharma", score: "94%", passed: "Passed Java & API Challenges", date: "Applied 1 day ago" },
    { id: "2", name: "Priya Patel", score: "91%", passed: "Passed Java & System Design", date: "Applied 2 days ago" },
    { id: "3", name: "Amit Kumar", score: "88%", passed: "Passed API & Query Tuning", date: "Applied 3 days ago" },
  ];

  return (
    <Layout variant="authenticated">
      <main className="opp-details-container">
        <header className="opp-details-header">
          <div>
            <div className="opp-meta-pills">
              <span className="status-pill active">{opportunity.status}</span>
              <span className="type-lbl">{opportunity.type} • {opportunity.budget}</span>
            </div>
            <h1>{opportunity.title}</h1>
            <p>{opportunity.description}</p>
          </div>

          <div className="opp-header-btns">
            <button className="secondary-btn">Edit Opportunity</button>
            <button className="secondary-btn danger-text">Close Opportunity</button>
          </div>
        </header>

        <section className="opp-details-grid">
          {/* Opportunity Specs */}
          <article className="opp-info-card">
            <h3>Required Skill Proof</h3>
            <div className="skills-tag-cloud">
              {opportunity.skills.map((s, idx) => (
                <span key={idx} className="skill-pill">{s}</span>
              ))}
            </div>

            <h3 style={{ marginTop: "24px" }}>Attached Skill Challenge</h3>
            <div className="attached-challenge-box">
              <span className="ch-badge">VERIFIED CHALLENGE</span>
              <h4>{opportunity.challenge}</h4>
              <p>Candidates complete this challenge to prove their backend capability.</p>
            </div>
          </article>

          {/* Applied Candidates List */}
          <article className="opp-candidates-card">
            <h3>Applied Candidates ({candidates.length})</h3>
            <div className="candidates-list">
              {candidates.map((c) => (
                <div key={c.id} className="candidate-row-item">
                  <div className="cand-main-info">
                    <h4>{c.name}</h4>
                    <span className="passed-info">{c.passed}</span>
                    <span className="date-info">{c.date}</span>
                  </div>
                  <div className="cand-actions">
                    <span className="proof-tag">{c.score} Proof</span>
                    <a href={`/hirer/candidates/${c.id}`} className="primary-action-btn sm-btn">
                      VIEW PROOF &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default OpportunityDetails;
