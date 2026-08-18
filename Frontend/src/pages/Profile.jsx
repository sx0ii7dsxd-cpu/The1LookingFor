import Layout from "../components/Layout";
import CandidateProfile from "./candidate/CandidateProfile";
import { getMockAuth } from "../utils/mockAuth";
import "./Profile.css";

function Profile() {
  const auth = getMockAuth();
  const isCandidate = auth.role === "candidate";

  if (isCandidate) {
    return <CandidateProfile />;
  }

  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        <section className="profile-hero-card">
          <div className="profile-avatar-large">💼</div>
          <div className="profile-meta">
            <span className="profile-badge">HIRER PROFILE</span>
            <h1>{auth.user?.name || "Alex Vance"}</h1>
            <p className="headline">{auth.user?.headline || "Engineering Lead & Talent Scout"}</p>
            <p className="about">
              Hiring top software engineering candidates based on demonstrated skill proof and real-world challenge execution.
            </p>

            <div className="profile-actions-bar">
              <a href="/hirer/dashboard" className="primary-action-btn sm-btn">
                Hirer Dashboard &rarr;
              </a>
              <a href="/hirer/opportunities/new" className="secondary-btn">
                + Create Opportunity
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Profile;
