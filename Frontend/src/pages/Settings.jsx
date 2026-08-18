import { useState } from "react";
import Layout from "../components/Layout";
import { getMockAuth, setMockAuth, logoutMock } from "../utils/mockAuth";
import "./Settings.css";

function Settings() {
  const auth = getMockAuth();
  const [role, setRole] = useState(auth.role || "candidate");
  const [name, setName] = useState(auth.user?.name || "Demo User");

  const handleSave = (e) => {
    e.preventDefault();
    setMockAuth({
      role,
      user: { ...auth.user, name },
    });
    alert("Settings saved successfully!");
  };

  return (
    <Layout variant="authenticated">
      <main className="app-page-container">
        <div className="setup-card wide-card">
          <span className="setup-badge">ACCOUNT SETTINGS</span>
          <h1>Preferences & Profile</h1>
          <p className="setup-subtitle">Manage your account information and application role.</p>

          <form className="setup-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Active Account Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="candidate">Candidate (Looking for opportunities)</option>
                <option value="hirer">Hirer (Looking for talent)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notification Preferences</label>
              <div className="checkbox-group">
                <label className="checkbox-lbl">
                  <input type="checkbox" defaultChecked /> Challenge proof updates
                </label>
                <label className="checkbox-lbl">
                  <input type="checkbox" defaultChecked /> Opportunity recommendations
                </label>
              </div>
            </div>

            <div className="settings-actions-bar">
              <button type="submit" className="primary-action-btn sm-btn">
                SAVE PREFERENCES
              </button>

              <button
                type="button"
                className="secondary-btn danger-text"
                onClick={logoutMock}
              >
                Sign Out
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default Settings;
