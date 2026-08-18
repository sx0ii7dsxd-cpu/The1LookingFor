import Layout from "../../components/Layout";
import "./CandidateSkillDNA.css";

function CandidateSkillDNA() {
  const skills = [
    { name: "Java & Backend Architecture", score: 91, passed: "5/5 Challenges" },
    { name: "Problem Solving & Logic", score: 87, passed: "4/4 Challenges" },
    { name: "Database & SQL Optimization", score: 84, passed: "3/3 Challenges" },
    { name: "API Design & Protocols", score: 94, passed: "2/2 Challenges" },
    { name: "System Design & Scalability", score: 82, passed: "2/2 Challenges" },
    { name: "Code Cleanliness & Refactoring", score: 88, passed: "3/3 Challenges" },
  ];

  const verifiedProofList = [
    { name: "Java High-Throughput API Challenge", date: "Verified 2 days ago", score: "94%" },
    { name: "Database Indexing & Query Tuning", date: "Verified 5 days ago", score: "89%" },
    { name: "Practical System Refactoring", date: "Verified 1 week ago", score: "91%" },
    { name: "Algorithmic Logic Puzzle", date: "Verified 2 weeks ago", score: "86%" },
    { name: "API Design Specification", date: "Verified 3 weeks ago", score: "96%" },
  ];

  return (
    <Layout variant="authenticated">
      <main className="dna-container">
        <header className="dna-header">
          <span className="page-tag">VERIFIED PROOF MATRIX</span>
          <h1>Skill DNA Record</h1>
          <p>Zero resume bias. 100% verified proof of practical ability.</p>
        </header>

        <section className="dna-grid">
          {/* Main Matrix Card */}
          <article className="dna-card dna-main">
            <div className="dna-head">
              <div>
                <h2>Verified Skill Scores</h2>
                <p>Calculated directly from real-world challenge performance</p>
              </div>
              <span className="badge-verified">● VERIFIED RECORD</span>
            </div>

            <div className="skills-matrix-list">
              {skills.map((s, idx) => (
                <div key={idx} className="matrix-row">
                  <div className="row-info">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-count">{s.passed}</span>
                    <span className="skill-score">{s.score}%</span>
                  </div>
                  <div className="matrix-track">
                    <div className="matrix-fill" style={{ width: `${s.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Verified History Sidebar */}
          <article className="dna-card dna-side">
            <h3>Passed Proof Challenges</h3>
            <div className="proof-history-list">
              {verifiedProofList.map((item, idx) => (
                <div key={idx} className="proof-item">
                  <div className="item-icon">✓</div>
                  <div className="item-details">
                    <span className="item-title">{item.name}</span>
                    <span className="item-date">{item.date}</span>
                  </div>
                  <span className="item-score">{item.score}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateSkillDNA;
