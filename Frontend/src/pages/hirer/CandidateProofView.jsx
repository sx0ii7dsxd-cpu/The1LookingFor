import { useState } from "react";
import Layout from "../../components/Layout";
import "../candidate/CandidateProfile.css";
import "../candidate/CandidateSkillDNA.css";

function CandidateProofView({ id = "1" }) {
  const [invited, setInvited] = useState(false);

  const candidate = {
    name: "Rahul Sharma",
    role: "Java Backend Developer",
    overallScore: "92%",
    about:
      "Specializes in building distributed Java microservices and high-throughput APIs. Has completed 14 verified challenges on The1LookingFor with high problem-solving execution scores.",
    skills: [
      { name: "Java & Backend Architecture", score: 94 },
      { name: "Problem Solving & Logic", score: 91 },
      { name: "Database & SQL Tuning", score: 87 },
      { name: "Communication & Design Specs", score: 82 },
    ],
    verifiedChallenges: [
      "Java High-Throughput API Challenge (94% score)",
      "Database Indexing & Query Tuning (89% score)",
      "Practical System Refactoring (91% score)",
    ],
  };

  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        {/* Candidate Summary Header */}
        <section className="profile-hero-card">
          <div className="profile-avatar-large">⚡</div>
          <div className="profile-meta">
            <span className="profile-badge">VERIFIED SKILL PROOF RECORD</span>
            <h1>{candidate.name}</h1>
            <p className="headline">{candidate.role}</p>
            <p className="about">{candidate.about}</p>

            <div className="profile-actions-bar">
              <button
                className="primary-action-btn sm-btn"
                onClick={() => setInvited(true)}
              >
                {invited ? "✓ INVITED TO OPPORTUNITY" : "INVITE TO OPPORTUNITY &rarr;"}
              </button>
              <span className="badge-verified">Overall Proof Score: {candidate.overallScore}</span>
            </div>
          </div>
        </section>

        {/* Skill Proof Matrix & Verified History */}
        <section className="profile-grid">
          {/* Left: Skill Matrix */}
          <article className="profile-card">
            <h3>SKILL PROOF MATRIX</h3>
            <div className="skills-matrix-list" style={{ marginTop: "16px" }}>
              {candidate.skills.map((s, idx) => (
                <div key={idx} className="matrix-row">
                  <div className="row-info">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-score">{s.score}%</span>
                  </div>
                  <div className="matrix-track">
                    <div className="matrix-fill" style={{ width: `${s.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Right: Verified Challenge Proof */}
          <article className="profile-card">
            <h3>Verified Challenge Proof</h3>
            <div className="projects-list">
              {candidate.verifiedChallenges.map((ch, idx) => (
                <div key={idx} className="project-item">
                  <h4>✓ {ch}</h4>
                  <p>Verified through automated practical execution environment.</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateProofView;
