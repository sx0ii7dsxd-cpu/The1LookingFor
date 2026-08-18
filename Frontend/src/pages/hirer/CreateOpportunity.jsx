import { useState } from "react";
import Layout from "../../components/Layout";
import "./CreateOpportunity.css";

function CreateOpportunity() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    type: "Full-Time",
    budget: "",
    challenge: "Java Backend API Challenge",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", "/hirer/opportunities");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <Layout variant="authenticated">
      <main className="app-page-container">
        <div className="setup-card wide-card">
          <span className="setup-badge">CREATE OPPORTUNITY</span>
          <h1>Describe what you need</h1>
          <p className="setup-subtitle">
            Define the skills and proof requirements. Candidates will demonstrate their ability through challenges.
          </p>

          <form className="setup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Opportunity Title</label>
              <input
                type="text"
                placeholder="e.g. Java Backend Engineer, Video Editor, Systems Architect"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>What are you looking for? (Description)</label>
              <textarea
                rows="4"
                placeholder="Describe the problem, projects, and goals for this role..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Required Skills (Comma separated)</label>
              <input
                type="text"
                placeholder="e.g. Java, Spring Boot, PostgreSQL, Microservices"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Opportunity Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Freelance / Project</option>
                  <option>Contract</option>
                </select>
              </div>

              <div className="form-group">
                <label>Salary / Budget Range</label>
                <input
                  type="text"
                  placeholder="e.g. $90k - $130k or $50/hr"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Attach Practical Skill Challenge (Optional)</label>
              <select
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              >
                <option>Java Backend API Challenge</option>
                <option>Database Query Optimization</option>
                <option>Practical System Refactoring</option>
                <option>Custom Challenge</option>
              </select>
            </div>

            <button type="submit" className="primary-action-btn">
              CREATE & PUBLISH OPPORTUNITY &rarr;
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default CreateOpportunity;
