import Layout from "../../components/Layout";
import "./CandidateSkillDNA.css";

function CandidateSkillDNA() {
  return (
    <Layout variant="authenticated">
      <main className="dna-container">
        <header className="dna-header">
          <span className="page-tag">VERIFIED PROOF MATRIX</span>
          <h1>Skill DNA Record</h1>
          <p>Zero resume bias. 100% verified proof of practical ability.</p>
        </header>

        <section className="dna-grid">
          <article className="dna-card dna-main" style={{ width: "100%", gridColumn: "1 / -1" }}>
            <div className="dna-head">
              <div>
                <h2>Your Skill DNA is waiting to be built.</h2>
                <p>Complete challenges to generate your first proof record.</p>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <a href="/candidate/challenges" className="primary-action-btn sm-btn">
                Explore Challenges &rarr;
              </a>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateSkillDNA;
