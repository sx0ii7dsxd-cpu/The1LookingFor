import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./CandidateProfile.css";

function CandidateProfile() {
  const auth = getMockAuth();
  const userName = auth.user?.name || "Siddharth Sharma";
  const userHeadline = auth.user?.headline || "Backend Engineer & System Designer";

  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        {/* Header Profile Card */}
        <section className="profile-hero-card">
          <div className="profile-avatar-large">⚡</div>
          <div className="profile-meta">
            <span className="profile-badge">CANDIDATE PROOF PROFILE</span>
            <h1>{userName}</h1>
            <p className="headline">{userHeadline}</p>
            <p className="about">
              Specialized in high-performance Java backends, microservices design, and scalable database architectures. Proven through 14 verified coding challenges.
            </p>

            <div className="profile-actions-bar">
              <a href="/candidate/siddharth-sharma" className="secondary-btn">
                Preview Public Profile &rarr;
              </a>
              <a href="/candidate/skill-dna" className="primary-action-btn sm-btn">
                View Full Skill DNA Matrix
              </a>
            </div>
          </div>
        </section>

        {/* Profile Content Breakdown */}
        <section className="profile-grid">
          {/* Left: Skill Proof Matrix */}
          <article className="profile-card">
            <h3>Verified Skill Matrix</h3>
            <div className="mini-dna-list">
              <div className="mini-row">
                <span>Java & Spring Boot</span>
                <span className="score">94%</span>
              </div>
              <div className="mini-row">
                <span>Problem Solving & Algorithms</span>
                <span className="score">91%</span>
              </div>
              <div className="mini-row">
                <span>SQL & Database Optimization</span>
                <span className="score">87%</span>
              </div>
              <div className="mini-row">
                <span>API Design & Architecture</span>
                <span className="score">96%</span>
              </div>
            </div>
          </article>

          {/* Right: Featured Projects & Proof */}
          <article className="profile-card">
            <h3>Demonstrated Projects</h3>
            <div className="projects-list">
              <div className="project-item">
                <h4>Distributed Task Queue</h4>
                <p>Built a fault-tolerant async queue in Java with redis-backed locking and dead letter retries.</p>
              </div>
              <div className="project-item">
                <h4>High-Concurrency API Gateway</h4>
                <p>Designed a custom rate-limiting gateway handling 15,000 req/sec with sub-5ms latency.</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateProfile;
