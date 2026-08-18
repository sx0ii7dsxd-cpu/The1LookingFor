import { useState } from "react";
import Layout from "../../components/Layout";
import { setMockAuth } from "../../utils/mockAuth";
import "./CandidateSetup.css";

function CandidateSetup() {
  const [formData, setFormData] = useState({
    name: "Siddharth Sharma",
    headline: "Backend Engineer & Problem Solver",
    about: "Passionate developer focused on building scalable systems, high-performance APIs, and solving core algorithmic challenges.",
    skills: "Java, Spring Boot, System Design, SQL, Problem Solving",
    experience: "Intermediate (2-4 yrs)",
    portfolio: "github.com/siddharth-dev",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMockAuth({
      isAuthenticated: true,
      role: "candidate",
      user: {
        name: formData.name,
        headline: formData.headline,
        skills: formData.skills.split(",").map((s) => s.trim()),
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Professional Headline</label>
              <input
                type="text"
                placeholder="e.g. Backend Engineer, Systems Designer"
                value={formData.headline}
                onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>About Your Thinking & Strengths</label>
              <textarea
                rows="4"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Primary Skills (Comma separated)</label>
              <input
                type="text"
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
                <label>GitHub / Portfolio Link</label>
                <input
                  type="text"
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
