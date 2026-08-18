import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./HirerDashboard.css";

function HirerDashboard() {
  const auth = getMockAuth();
  const name = auth.user?.name;

  return (
    <Layout variant="authenticated">
      <main className="hirer-dashboard-container">
        <header className="hirer-dash-header">
          <div>
            <span className="hirer-tag">HIRER DASHBOARD</span>
            <h1>{name ? `Welcome, ${name}.` : "Welcome to your dashboard."}</h1>
            <p>Find people who can actually do the work. Based on proof, not history.</p>
          </div>

          <div className="dash-actions">
            <a href="/hirer/opportunities/new" className="primary-action-btn">
              + CREATE OPPORTUNITY
            </a>
            <a href="/hirer/discover" className="secondary-btn">
              Discover Talent &rarr;
            </a>
          </div>
        </header>

        {/* Opportunities Overview Empty State */}
        <section className="hirer-section">
          <div className="section-head">
            <h2>Your Opportunities</h2>
          </div>

          <article className="opp-card" style={{ textAlign: "center", padding: "40px 20px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>You haven't created any opportunities yet.</h3>
            <p style={{ color: "var(--text-muted, #a0aec0)", marginBottom: "24px" }}>
              Create your first opportunity to start finding people based on demonstrated skills.
            </p>
            <a href="/hirer/opportunities/new" className="primary-action-btn sm-btn">
              + Create Opportunity
            </a>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default HirerDashboard;
