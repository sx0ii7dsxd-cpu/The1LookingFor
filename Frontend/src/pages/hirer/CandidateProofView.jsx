import { useState } from "react";
import Layout from "../../components/Layout";
import "../candidate/CandidateProfile.css";
import "../candidate/CandidateSkillDNA.css";

function CandidateProofView() {
  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        <section className="profile-hero-card">
          <div className="profile-avatar-large">👤</div>
          <div className="profile-meta">
            <span className="profile-badge">SKILL PROOF RECORD</span>
            <h1>Candidate proof record not found.</h1>
            <p className="about">Proof records will appear here once candidates complete challenges.</p>
            <div className="profile-actions-bar" style={{ marginTop: "16px" }}>
              <a href="/hirer/discover" className="primary-action-btn sm-btn">
                Discover Talent &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateProofView;
