import Layout from "../../components/Layout";
import { getMockAuth } from "../../utils/mockAuth";
import "./CandidateProfile.css";

function PublicCandidateProfile({ username }) {
  const auth = getMockAuth();
  const isSelf = auth.user?.name && (
    !username ||
    auth.user.name.toLowerCase().replace(/\s+/g, "-") === username?.toLowerCase()
  );

  if (isSelf && auth.user?.name) {
    return (
      <Layout variant="public">
        <main className="profile-page-container">
          <section className="profile-hero-card">
            <div className="profile-avatar-large">⚡</div>
            <div className="profile-meta">
              <span className="profile-badge">PUBLIC CANDIDATE PROFILE</span>
              <h1>{auth.user.name}</h1>
              {auth.user.headline && <p className="headline">{auth.user.headline}</p>}
              {auth.user.about && <p className="about">{auth.user.about}</p>}
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout variant="public">
      <main className="profile-page-container">
        <section className="profile-hero-card">
          <div className="profile-avatar-large">👤</div>
          <div className="profile-meta">
            <span className="profile-badge">PUBLIC PROFILE</span>
            <h1>Candidate not found.</h1>
            <p className="about">Public profiles will appear here once a candidate creates one.</p>
            <div className="profile-actions-bar" style={{ marginTop: "16px" }}>
              <a href="/" className="primary-action-btn sm-btn">
                Back to Home &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default PublicCandidateProfile;
