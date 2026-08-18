import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { getMockAuth } from "../utils/mockAuth";
import "./Navbar.css";

function AuthenticatedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const auth = getMockAuth();
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const isHirer = auth.role === "hirer" || path.startsWith("/hirer");
  const homePath = isHirer ? "/hirer/dashboard" : "/candidate/dashboard";

  return (
    <header className="site-header authenticated-header">
      <div className="site-header-inner">
        <a href={homePath} className="site-logo">
          THE1LOOKINGFOR
        </a>

        <nav className={`site-nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          {!isHirer ? (
            <>
              <a href="/candidate/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </a>
              <a href="/candidate/challenges" onClick={() => setMobileMenuOpen(false)}>
                Challenges
              </a>
              <a href="/candidate/skill-dna" onClick={() => setMobileMenuOpen(false)}>
                Skill DNA
              </a>
              <a href="/candidate/profile" onClick={() => setMobileMenuOpen(false)}>
                Profile
              </a>
            </>
          ) : (
            <>
              <a href="/hirer/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </a>
              <a href="/hirer/opportunities" onClick={() => setMobileMenuOpen(false)}>
                Opportunities
              </a>
              <a href="/hirer/discover" onClick={() => setMobileMenuOpen(false)}>
                Discover Talent
              </a>
            </>
          )}
        </nav>

        <div className="site-header-actions">
          <ProfileMenu />

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

export default AuthenticatedNavbar;
