import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-logo">
          THE1LOOKINGFOR
        </a>

        <nav className={`site-nav ${mobileMenuOpen ? "nav-open" : ""}`}>
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

        <div className="site-header-actions">
          <a href="/signin" className="btn-signin">
            Sign In
          </a>
          <a href="/join" className="btn-join">
            Join The1LookingFor
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
