import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./CandidateDashboard.css";

function CandidateDashboard() {
  const auth = getMockAuth();
  const userName = auth.user?.name || "Siddharth";

  return (
    <Layout variant="authenticated">
      <main className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <span className="dashboard-tag">CANDIDATE DASHBOARD</span>
            <h1>Welcome back, {userName}.</h1>
            <p>Your skills speak louder than any resume.</p>
          </div>
          <a href="/candidate/challenges" className="primary-action-btn">
            Explore Challenges &rarr;
          </a>
        </header>

        <section className="dashboard-grid">
          {/* Skill DNA Card */}
          <article className="dash-card skill-dna-preview">
            <div className="card-top">
              <h3>Skill DNA Matrix</h3>
              <a href="/candidate/skill-dna" className="text-link">
                Full Breakdown &rarr;
              </a>
            </div>
            <div className="dna-bars">
              <div className="dna-bar-item">
                <div className="dna-bar-info">
                  <span>Java & Backend</span>
                  <span className="score">91%</span>
                </div>
                <div className="track"><div className="fill" style={{ width: "91%" }}></div></div>
              </div>
              <div className="dna-bar-item">
                <div className="dna-bar-info">
                  <span>Problem Solving & Logic</span>
                  <span className="score">87%</span>
                </div>
                <div className="track"><div className="fill" style={{ width: "87%" }}></div></div>
              </div>
              <div className="dna-bar-item">
                <div className="dna-bar-info">
                  <span>System Design</span>
                  <span className="score">82%</span>
                </div>
                <div className="track"><div className="fill" style={{ width: "82%" }}></div></div>
              </div>
            </div>
          </article>

          {/* Stats Card */}
          <article className="dash-card stats-card">
            <h3>Verified Proof Stats</h3>
            <div className="stats-list">
              <div className="stat-item">
                <span className="num">14</span>
                <span className="lbl">Challenges Passed</span>
              </div>
              <div className="stat-item">
                <span className="num">92%</span>
                <span className="lbl">Overall Proof Score</span>
              </div>
              <div className="stat-item">
                <span className="num">5</span>
                <span className="lbl">Employer Views</span>
              </div>
            </div>
          </article>
        </section>

        {/* Recommended Challenges */}
        <section className="dashboard-section">
          <div className="section-head">
            <h2>Recommended Skill Challenges</h2>
            <a href="/candidate/challenges" className="text-link">View All</a>
          </div>
          <div className="challenge-cards-grid">
            <article className="ch-card">
              <span className="ch-level">Intermediate • 30 mins</span>
              <h3>Java High-Throughput API Challenge</h3>
              <p>Demonstrate your ability to structure REST endpoints for concurrency and caching.</p>
              <a href="/candidate/challenges/1" className="secondary-btn">Start Challenge</a>
            </article>

            <article className="ch-card">
              <span className="ch-level">Advanced • 25 mins</span>
              <h3>Database Indexing & Query Tuning</h3>
              <p>Optimize heavy SQL queries and fix performance bottlenecks in complex schemas.</p>
              <a href="/candidate/challenges/2" className="secondary-btn">Start Challenge</a>
            </article>

            <article className="ch-card">
              <span className="ch-level">Intermediate • 20 mins</span>
              <h3>Practical System Refactoring</h3>
              <p>Clean up messy legacy logic while maintaining API contracts and stability.</p>
              <a href="/candidate/challenges/3" className="secondary-btn">Start Challenge</a>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateDashboard;
