import Layout from "../../components/Layout";
import "./CandidateProfile.css";

function PublicCandidateProfile({ username = "siddharth-sharma" }) {
  const nameFormatted = username
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <Layout variant="public">
      <main className="profile-page-container">
        {/* Header Profile Card */}
        <section className="profile-hero-card">
          <div className="profile-avatar-large">⚡</div>
          <div className="profile-meta">
            <span className="profile-badge">VERIFIED CANDIDATE PROFILE</span>
            <h1>{nameFormatted}</h1>
            <p className="headline">Java Backend Developer & Problem Solver</p>
            <p className="about">
              Focuses on high-throughput backend services, concurrency tuning, and system reliability. Verified through 14 real-world coding challenges on The1LookingFor.
            </p>

            <div className="profile-actions-bar">
              <a href="/signin" className="primary-action-btn sm-btn">
                INVITE TO OPPORTUNITY &rarr;
              </a>
              <span className="badge-verified">Overall Proof Score: 92%</span>
            </div>
          </div>
        </section>

        {/* Profile Content Breakdown */}
        <section className="profile-grid">
          {/* Left: Verified Skill Matrix */}
          <article className="profile-card">
            <h3>Verified Skill Proof</h3>
            <div className="mini-dna-list">
              <div className="mini-row">
                <span>Java & Spring Boot</span>
                <span className="score">94%</span>
              </div>
              <div className="mini-row">
                <span>Problem Solving & Logic</span>
                <span className="score">91%</span>
              </div>
              <div className="mini-row">
                <span>SQL & Query Tuning</span>
                <span className="score">87%</span>
              </div>
              <div className="mini-row">
                <span>API Design & Architecture</span>
                <span className="score">96%</span>
              </div>
            </div>
          </article>

          {/* Right: Verified Challenges */}
          <article className="profile-card">
            <h3>Passed Practical Challenges</h3>
            <div className="projects-list">
              <div className="project-item">
                <h4>✓ Java High-Throughput API Challenge</h4>
                <p>Verified 2 days ago • Passed with 94% execution score</p>
              </div>
              <div className="project-item">
                <h4>✓ Database Indexing & Query Tuning</h4>
                <p>Verified 5 days ago • Passed with 89% query speed score</p>
              </div>
              <div className="project-item">
                <h4>✓ Practical System Refactoring</h4>
                <p>Verified 1 week ago • Passed with 91% code clarity score</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default PublicCandidateProfile;
