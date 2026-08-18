import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <div className="site-footer-logo">THE1LOOKINGFOR</div>
            <p className="site-footer-tagline">
              "Your skills should speak for themselves."
            </p>
          </div>

          <div className="site-footer-cols">
            <div className="site-footer-col">
              <h4>Platform</h4>
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

            <div className="site-footer-col" id="candidates">
              <h4>Candidates</h4>
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

            <div className="site-footer-col" id="employers">
              <h4>Employers</h4>
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

        <div className="site-footer-bottom">
          <p>© 2026 The1LookingFor. Built around skills, not history.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
