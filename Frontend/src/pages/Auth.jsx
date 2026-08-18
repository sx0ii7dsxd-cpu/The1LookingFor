import { useState } from "react";
import "./Auth.css";

function Auth() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-page-wrapper">
      <header className="auth-site-header">
        <div className="auth-site-header-inner">
          <a href="/" className="auth-site-logo">
            THE1LOOKINGFOR
          </a>

          <nav className={`auth-site-nav ${mobileMenuOpen ? "nav-open" : ""}`}>
            <a href="/#how-we-work" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="/#why-the1lookingfor" onClick={() => setMobileMenuOpen(false)}>
              Why The1LookingFor
            </a>
            <a href="/#candidates" onClick={() => setMobileMenuOpen(false)}>
              For Candidates
            </a>
            <a href="/#employers" onClick={() => setMobileMenuOpen(false)}>
              For Employers
            </a>
          </nav>

          <div className="auth-site-actions">
            <a href="/join" className="auth-btn-signin">
              Sign In
            </a>
            <a href="/join" className="auth-btn-join">
              Join The1LookingFor
            </a>
            <button
              className="auth-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="auth-hamburger-line"></span>
              <span className="auth-hamburger-line"></span>
              <span className="auth-hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      <main className="auth-main-content">
        <div className="auth-container">
          <div className="auth-header">
            <p className="auth-label">THE1LOOKINGFOR</p>
            <h1>Prove what you can do.</h1>
            <p className="auth-subtitle">Not what you've done.</p>
          </div>

          <div className="auth-box">
            <h2>{isSignUp ? "Create an account" : "Welcome back"}</h2>
            <p className="auth-description">
              {isSignUp
                ? "Join The1LookingFor to showcase your real skills."
                : "Sign in to continue to The1LookingFor."}
            </p>
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {isSignUp && (
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="auth-button">
                {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
              </button>
            </form>
            <p className="auth-switch">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign in" : "Create one"}
              </button>
            </p>
          </div>
        </div>
      </main>


      <footer className="auth-site-footer">
        <div className="auth-site-footer-inner">
          <div className="auth-site-footer-top">
            <div className="auth-site-footer-brand">
              <div className="auth-site-footer-logo">THE1LOOKINGFOR</div>
              <p className="auth-site-footer-tagline">
                "Your skills should speak for themselves."
              </p>
            </div>

            <div className="auth-site-footer-cols">
              <div className="auth-site-footer-col">
                <h4>PLATFORM</h4>
                <ul>
                  <li>
                    <a href="/#how-we-work">How It Works</a>
                  </li>
                  <li>
                    <a href="/#challenges">Challenges</a>
                  </li>
                  <li>
                    <a href="/#skill-dna">Skill DNA</a>
                  </li>
                </ul>
              </div>

              <div className="auth-site-footer-col">
                <h4>CANDIDATES</h4>
                <ul>
                  <li>
                    <a href="/join">Create Profile</a>
                  </li>
                  <li>
                    <a href="/#opportunities">Find Opportunities</a>
                  </li>
                  <li>
                    <a href="/#showcase">Showcase Skills</a>
                  </li>
                </ul>
              </div>

              <div className="auth-site-footer-col">
                <h4>EMPLOYERS</h4>
                <ul>
                  <li>
                    <a href="/#talent">Discover Talent</a>
                  </li>
                  <li>
                    <a href="/#create-challenges">Create Challenges</a>
                  </li>
                  <li>
                    <a href="/#hire">Hire by Skills</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="auth-site-footer-bottom">
            <p>© 2026 The1LookingFor. Built around skills, not history.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Auth;