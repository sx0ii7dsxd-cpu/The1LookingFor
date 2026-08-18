import { useState, useEffect, useRef } from "react";
import { getMockAuth, logoutMock } from "../utils/mockAuth";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const auth = getMockAuth();
  const isCandidate = auth.role === "candidate";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleLogout = (e) => {
    e.preventDefault();
    setOpen(false);
    logoutMock();
  };

  return (
    <div className="profile-dropdown-container" ref={dropdownRef}>
      <button
        className={`profile-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="User Profile Menu"
        aria-expanded={open}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="profile-icon-svg"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>

      {open && (
        <div className="profile-dropdown-menu">
          <div className="profile-dropdown-header">
            <span className="profile-dropdown-name">{auth.user?.name || "User Account"}</span>
            <span className="profile-dropdown-role">
              {isCandidate ? "Candidate Account" : "Hirer Account"}
            </span>
          </div>

          <div className="profile-dropdown-divider" />

          <a
            href={isCandidate ? "/candidate/dashboard" : "/hirer/dashboard"}
            className="profile-dropdown-item"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </a>

          {isCandidate ? (
            <>
              <a
                href="/candidate/skill-dna"
                className="profile-dropdown-item"
                onClick={() => setOpen(false)}
              >
                Skill DNA
              </a>
              <a
                href="/candidate/profile"
                className="profile-dropdown-item"
                onClick={() => setOpen(false)}
              >
                My Profile
              </a>
            </>
          ) : (
            <>
              <a
                href="/hirer/opportunities"
                className="profile-dropdown-item"
                onClick={() => setOpen(false)}
              >
                Opportunities
              </a>
              <a
                href="/hirer/discover"
                className="profile-dropdown-item"
                onClick={() => setOpen(false)}
              >
                Discover Talent
              </a>
            </>
          )}

          <a
            href="/settings"
            className="profile-dropdown-item"
            onClick={() => setOpen(false)}
          >
            Settings
          </a>

          <div className="profile-dropdown-divider" />

          <a
            href="/"
            className="profile-dropdown-item danger-item"
            onClick={handleLogout}
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
