import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <main className="container">
        <h2 className="label">The1LookingFor</h2>
        <h2 className="heading">
          We hire people for their THINKING, not their HISTORY
        </h2>
        <button className="button1">Join "The1LookingFor"</button>
        <section className="benifits">
          <h2>Why Join Us?</h2>
          <ul>
            <li>We treat everybody equal</li>
            <li>No resumes required only skills</li>
            <li>Freshers have opportunities</li>
          </ul>
        </section>
        <p className="description">
          Companies will hire you based on your skills, not your resume. We
          provide a platform for freshers and experienced individuals to showcase
          their abilities and get hired by top companies.
        </p>

        <section className="working" id="how-we-work">
          <h2 className="section-label">How We Work</h2>
          <p className="section-heading">Showcase your skills and get hired</p>
          <p className="section-copy">
            Build a profile, prove what you know, and get discovered by companies
            looking for real talent.
          </p>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3 className="step-title">Create your profile</h3>
              <p className="step-copy">
                Showcase your skills, work, and strengths in one clear
                professional profile.
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <h3 className="step-title">Prove what you know</h3>
              <p className="step-copy">
                Demonstrate your thinking through practical challenges that
                highlight real ability.
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <h3 className="step-title">Get discovered</h3>
              <p className="step-copy">
                Let employers find you for what you can do, not just what is
                written on a resume.
              </p>
            </article>
          </div>
        </section>

        <section className="why-section" id="why-the1lookingfor">
          <div className="why-section-content">
            <div className="why-section-left">
              <p className="why-section-label">WHY THE1LOOKINGFOR</p>
              <h2 className="why-section-title">
                No degree. No resume. Just proof.
              </h2>
              <div className="why-section-list">
                <div className="why-item">
                  <span className="why-item-number">01</span>
                  <h3>No Resume Required</h3>
                  <p>
                    Your abilities matter more than your background. We focus on
                    what you can do, not what you've done in the past.
                  </p>
                </div>
                <div className="why-item">
                  <span className="why-item-number">02</span>
                  <h3>Real Skills. Real Proof.</h3>
                  <p>
                    Show what you can actually do through practical challenges and
                    projects that demonstrate your expertise.
                  </p>
                </div>
                <div className="why-item">
                  <span className="why-item-number">03</span>
                  <h3>Get Seen by the Right People</h3>
                  <p>
                    Let your skills create opportunities by helping companies
                    discover what you can actually bring to the table.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-section-visual">
              <div className="visual-frame-header">
                <div className="visual-frame-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="visual-frame-tag">SKILL PROOF MATRIX</span>
              </div>
              <div className="visual-frame-body">
                <div className="visual-proof-card">
                  <div className="visual-proof-header">
                    <div className="visual-user-info">
                      <span className="visual-avatar-icon">⚡</span>
                      <div>
                        <div className="visual-user-name">Candidate Proof Profile</div>
                        <div className="visual-user-status">Verified DNA Record</div>
                      </div>
                    </div>
                    <span className="visual-badge-green">● VERIFIED</span>
                  </div>
                  <div className="visual-skills-list">
                    <div className="visual-skill-item">
                      <div className="visual-skill-info">
                        <span>Problem Solving & Logic</span>
                        <span className="visual-score">98%</span>
                      </div>
                      <div className="visual-progress-track">
                        <div
                          className="visual-progress-bar"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="visual-skill-item">
                      <div className="visual-skill-info">
                        <span>Practical Challenge Execution</span>
                        <span className="visual-score">95%</span>
                      </div>
                      <div className="visual-progress-track">
                        <div
                          className="visual-progress-bar"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="visual-skill-item">
                      <div className="visual-skill-info">
                        <span>Domain Expertise</span>
                        <span className="visual-score">100%</span>
                      </div>
                      <div className="visual-progress-track">
                        <div
                          className="visual-progress-bar"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="visual-proof-footer">
                    <span className="visual-check-icon">✓</span>
                    <span>14/14 Real-world Challenges Passed</span>
                  </div>
                </div>
              </div>
              <div className="visual-frame-footer">
                <span>Zero Resume Bias • Direct Employer Discovery</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;
