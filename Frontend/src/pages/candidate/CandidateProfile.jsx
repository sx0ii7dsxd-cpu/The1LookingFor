import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./CandidateProfile.css";

function CandidateProfile() {
  const auth = getMockAuth();
  const hasProfile = Boolean(auth.user?.name);

  if (!hasProfile) {
    return (
      <Layout variant="authenticated">
        <main className="profile-page-container">
          <section className="profile-hero-card">
            <div className="profile-avatar-large">⚡</div>
            <div className="profile-meta">
              <span className="profile-badge">CANDIDATE PROFILE</span>
              <h1>Your profile isn't complete yet.</h1>
              <p className="about">Complete your profile to start building your proof record.</p>
              <div className="profile-actions-bar">
                <a href="/candidate/setup" className="primary-action-btn sm-btn">
                  Complete Profile &rarr;
                </a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        {/* Header Profile Card */}
        <section className="profile-hero-card">
          <div className="profile-avatar-large">⚡</div>
          <div className="profile-meta">
            <span className="profile-badge">CANDIDATE PROOF PROFILE</span>
            <h1>{auth.user.name}</h1>
            {auth.user.headline && <p className="headline">{auth.user.headline}</p>}
            {auth.user.about && <p className="about">{auth.user.about}</p>}

            <div className="profile-actions-bar">
              <a href="/candidate/skill-dna" className="primary-action-btn sm-btn">
                View Skill DNA Matrix
              </a>
            </div>
          </div>
        </section>

        {/* Profile Content Breakdown */}
        <section className="profile-grid">
          <article className="profile-card">
            <h3>Declared Skills</h3>
            {auth.user.skills && auth.user.skills.length > 0 ? (
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                {auth.user.skills.map((s, idx) => (
                  <span key={idx} style={{ background: "rgba(255,255,255,0.06)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", color: "#e2e8f0" }}>
                    {s}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: "#a0aec0", marginTop: "12px" }}>No skills declared yet.</p>
            )}
          </article>

          <article className="profile-card">
            <h3>Verified Skill Proof</h3>
            <p style={{ color: "#a0aec0", marginTop: "12px" }}>No verified challenge proof completed yet.</p>
            <a href="/candidate/challenges" className="text-link" style={{ display: "inline-block", marginTop: "12px" }}>
              Explore Challenges &rarr;
            </a>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default CandidateProfile;
