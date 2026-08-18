import Layout from "../../components/Layout";
import "./OpportunityDetails.css";

function OpportunityDetails() {
  return (
    <Layout variant="authenticated">
      <main className="opp-details-container">
        <article className="opp-info-card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Opportunity not found</h1>
          <p style={{ color: "var(--text-muted, #a0aec0)", marginBottom: "24px" }}>
            No active opportunity exists with this ID. Create an opportunity to start receiving candidate applications.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <a href="/hirer/opportunities/new" className="primary-action-btn sm-btn">
              + Create Opportunity
            </a>
            <a href="/hirer/opportunities" className="secondary-btn">
              Back to Opportunities
            </a>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default OpportunityDetails;
