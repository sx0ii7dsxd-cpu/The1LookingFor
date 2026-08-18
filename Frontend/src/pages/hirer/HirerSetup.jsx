import { useState } from "react";
import Layout from "../../components/Layout";
import { setMockAuth } from "../../utils/mockAuth";
import "./HirerSetup.css";

function HirerSetup() {
  const [formData, setFormData] = useState({
    hiringFor: "My company / organization",
    name: "",
    role: "",
    organization: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMockAuth({
      isAuthenticated: true,
      role: "hirer",
      user: {
        name: formData.name,
        headline: formData.role ? `${formData.role}${formData.organization ? ` at ${formData.organization}` : ""}` : "",
        about: formData.about,
      },
    });
    window.history.pushState({}, "", "/hirer/dashboard");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <Layout variant="authenticated">
      <main className="app-page-container">
        <div className="setup-card">
          <span className="setup-badge">HIRER ONBOARDING</span>
          <h1>Who are you hiring for?</h1>
          <p className="setup-subtitle">
            Individuals and organization leads use The1LookingFor to discover talent based on proof, not resumes.
          </p>

          <form className="setup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Who are you hiring for?</label>
              <select
                value={formData.hiringFor}
                onChange={(e) => setFormData({ ...formData, hiringFor: e.target.value })}
              >
                <option>Myself (Independent / Creator / Influencer / Project)</option>
                <option>My company / organization</option>
                <option>A client (Recruiter / Agency)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your Title / Position</label>
                <input
                  type="text"
                  placeholder="e.g. Lead Developer, Founder, Hiring Lead"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company / Channel (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp or Personal Channel"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>About What You Need</label>
              <textarea
                rows="4"
                placeholder="Describe what skills you are looking for..."
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />
            </div>

            <button type="submit" className="primary-action-btn">
              ENTER HIRER DASHBOARD &rarr;
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default HirerSetup;
