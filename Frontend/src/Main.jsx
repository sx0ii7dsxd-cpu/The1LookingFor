import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Auth from "./pages/Auth.jsx";
import ChooseRole from "./pages/ChooseRole.jsx";

// Candidate Pages
import CandidateSetup from "./pages/candidate/CandidateSetup.jsx";
import CandidateDashboard from "./pages/candidate/CandidateDashboard.jsx";
import CandidateChallenges from "./pages/candidate/CandidateChallenges.jsx";
import ChallengeView from "./pages/candidate/ChallengeView.jsx";
import CandidateSkillDNA from "./pages/candidate/CandidateSkillDNA.jsx";
import CandidateProfile from "./pages/candidate/CandidateProfile.jsx";
import PublicCandidateProfile from "./pages/candidate/PublicCandidateProfile.jsx";

// Hirer Pages
import HirerSetup from "./pages/hirer/HirerSetup.jsx";
import HirerDashboard from "./pages/hirer/HirerDashboard.jsx";
import HirerOpportunities from "./pages/hirer/HirerOpportunities.jsx";
import CreateOpportunity from "./pages/hirer/CreateOpportunity.jsx";
import OpportunityDetails from "./pages/hirer/OpportunityDetails.jsx";
import DiscoverTalent from "./pages/hirer/DiscoverTalent.jsx";
import CandidateProofView from "./pages/hirer/CandidateProofView.jsx";

// Shared Pages
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";

function Root() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);
    window.addEventListener("mock-auth-changed", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("mock-auth-changed", onPopState);
    };
  }, []);

  // Public / Auth Routes
  if (path === "/join" || path === "/signin") {
    return <Auth />;
  }

  if (path === "/choose-role") {
    return <ChooseRole />;
  }

  // Candidate Routes
  if (path === "/candidate/setup") {
    return <CandidateSetup />;
  }

  if (path === "/candidate/dashboard") {
    return <CandidateDashboard />;
  }

  if (path === "/candidate/challenges") {
    return <CandidateChallenges />;
  }

  if (path.startsWith("/candidate/challenges/")) {
    const id = path.replace("/candidate/challenges/", "");
    return <ChallengeView challengeId={id} />;
  }

  if (path === "/candidate/skill-dna") {
    return <CandidateSkillDNA />;
  }

  if (path === "/candidate/profile") {
    return <CandidateProfile />;
  }

  if (path.startsWith("/candidate/") && path !== "/candidate/setup" && path !== "/candidate/dashboard") {
    const username = path.replace("/candidate/", "");
    return <PublicCandidateProfile username={username} />;
  }

  // Hirer Routes
  if (path === "/hirer/setup") {
    return <HirerSetup />;
  }

  if (path === "/hirer/dashboard") {
    return <HirerDashboard />;
  }

  if (path === "/hirer/opportunities/new") {
    return <CreateOpportunity />;
  }

  if (path === "/hirer/opportunities") {
    return <HirerOpportunities />;
  }

  if (path.startsWith("/hirer/opportunities/")) {
    const id = path.replace("/hirer/opportunities/", "");
    return <OpportunityDetails id={id} />;
  }

  if (path === "/hirer/discover") {
    return <DiscoverTalent />;
  }

  if (path.startsWith("/hirer/candidates/")) {
    const id = path.replace("/hirer/candidates/", "");
    return <CandidateProofView id={id} />;
  }

  // Shared Authenticated Routes
  if (path === "/profile") {
    return <Profile />;
  }

  if (path === "/settings") {
    return <Settings />;
  }

  // Default: Public Landing Page
  return <App />;
}

ReactDOM.createRoot(document.getElementById("box")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);