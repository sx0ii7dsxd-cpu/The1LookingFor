import Layout from "../../components/Layout";
import "./HirerDashboard.css";

function HirerOpportunities() {
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

        <article className="opp-card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No opportunities yet.</h3>
          <p style={{ color: "var(--text-muted, #a0aec0)", marginBottom: "24px" }}>
            Create an opportunity to start hiring.
          </p>
          <a href="/hirer/opportunities/new" className="primary-action-btn sm-btn">
            + Create Opportunity
          </a>
        </article>
      </main>
    </Layout>
  );
}

export default HirerOpportunities;
