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

  const hasProfile = Boolean(auth.user?.name);

  return (
    <Layout variant="authenticated">
      <main className="profile-page-container">
        <section className="profile-hero-card">
          <div className="profile-avatar-large">💼</div>
          <div className="profile-meta">
            <span className="profile-badge">HIRER PROFILE</span>
            {hasProfile ? (
              <>
                <h1>{auth.user.name}</h1>
                {auth.user.headline && <p className="headline">{auth.user.headline}</p>}
                {auth.user.about && <p className="about">{auth.user.about}</p>}
                <div className="profile-actions-bar">
                  <a href="/hirer/dashboard" className="primary-action-btn sm-btn">
                    Hirer Dashboard &rarr;
                  </a>
                  <a href="/hirer/opportunities/new" className="secondary-btn">
                    + Create Opportunity
                  </a>
                </div>
              </>
            ) : (
              <>
                <h1>Your profile isn't complete yet.</h1>
                <p className="about">Complete your hirer profile to start creating opportunities and finding talent.</p>
                <div className="profile-actions-bar">
                  <a href="/hirer/setup" className="primary-action-btn sm-btn">
                    Complete Profile &rarr;
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Profile;
