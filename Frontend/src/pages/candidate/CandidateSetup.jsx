import { useState } from "react";
import Layout from "../../components/Layout";
import { setMockAuth } from "../../utils/mockAuth";
import "./CandidateSetup.css";

function CandidateSetup() {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skills: "",
    experience: "Fresher (0-1 yrs)",
    portfolio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMockAuth({
      isAuthenticated: true,
      role: "candidate",
      user: {
        name: formData.name,
        headline: formData.headline,
        about: formData.about,
        skills: formData.skills ? formData.skills.split(",").map((s) => s.trim()).filter(Boolean) : [],
        experience: formData.experience,
        portfolio: formData.portfolio,
      },
    });
    window.history.pushState({}, "", "/candidate/dashboard");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <Layout variant="authenticated">
      <main className="app-page-container">
        <div className="setup-card">
          <span className="setup-badge">CANDIDATE ONBOARDING</span>
          <h1>Tell us what you can do</h1>
          <p className="setup-subtitle">
            No resume required. Build your skills-first profile and start proving your abilities.
          </p>

          <form className="setup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Headline</label>
              <input
                type="text"
                placeholder="e.g. Backend Developer"
                value={formData.headline}
                onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>About</label>
              <textarea
                rows="4"
                placeholder="Tell us what you can do..."
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <input
                type="text"
                placeholder="Add your skills..."
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Experience Level</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option>Fresher (0-1 yrs)</option>
                  <option>Intermediate (2-4 yrs)</option>
                  <option>Experienced (5+ yrs)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Portfolio</label>
                <input
                  type="text"
                  placeholder="Optional (e.g. github.com/username)"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="primary-action-btn">
              COMPLETE PROFILE SETUP &rarr;
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default CandidateSetup;
