import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./CandidateDashboard.css";

function CandidateDashboard() {
  const auth = getMockAuth();
  const userName = auth.user?.name;

  return (
    <Layout variant="authenticated">
      <main className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <span className="dashboard-tag">CANDIDATE DASHBOARD</span>
            <h1>{userName ? `Welcome back, ${userName}.` : "Welcome to your dashboard."}</h1>
            <p>Your skills speak louder than any resume.</p>
          </div>
          <a href="/candidate/challenges" className="primary-action-btn">
            Explore Challenges &rarr;
          </a>
        </header>

        <section className="dashboard-grid">
          {/* Skill DNA Empty Card */}
          <article className="dash-card skill-dna-preview">
            <div className="card-top">
              <h3>Your Skill DNA</h3>
              <a href="/candidate/skill-dna" className="text-link">
                View Skill DNA &rarr;
              </a>
            </div>
            <div style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--text-main, #ffffff)", marginBottom: "8px" }}>
                Your Skill DNA hasn't been built yet.
              </p>
              <p style={{ color: "var(--text-muted, #a0aec0)", marginBottom: "20px" }}>
                Complete your profile and challenges to start building your proof record.
              </p>
              <a href="/candidate/setup" className="primary-action-btn sm-btn">
                Complete Profile &rarr;
              </a>
            </div>
          </article>

          {/* Challenges Empty Card */}
          <article className="dash-card stats-card">
            <h3>Challenges</h3>
            <div style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--text-main, #ffffff)", marginBottom: "8px" }}>
                No challenges completed yet.
              </p>
              <p style={{ color: "var(--text-muted, #a0aec0)", marginBottom: "20px" }}>
                Prove your skills by completing practical challenges.
              </p>
              <a href="/candidate/challenges" className="secondary-btn">
                Explore Challenges &rarr;
              </a>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateDashboard;
