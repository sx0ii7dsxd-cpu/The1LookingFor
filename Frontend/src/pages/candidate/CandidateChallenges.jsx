import Layout from "../../components/Layout";
import "./CandidateChallenges.css";

function CandidateChallenges() {
  const challenges = [
    {
      id: "1",
      title: "Java Backend API Challenge",
      level: "Intermediate",
      time: "30 minutes",
      description: "Build & optimize RESTful endpoints for concurrent requests and caching.",
      category: "Backend Engineering",
    },
    {
      id: "2",
      title: "Database Query Optimization",
      level: "Advanced",
      time: "25 minutes",
      description: "Analyze slow SQL execution plans and create proper indexing strategies.",
      category: "Database Systems",
    },
    {
      id: "3",
      title: "Practical System Refactoring",
      level: "Intermediate",
      time: "20 minutes",
      description: "Refactor legacy monolithic code into clean modular structures without breaking tests.",
      category: "Software Architecture",
    },
    {
      id: "4",
      title: "Algorithmic Logic & Edge Cases",
      level: "Hard",
      time: "45 minutes",
      description: "Solve complex data structure puzzles under tight time and memory limits.",
      category: "Problem Solving",
    },
    {
      id: "5",
      title: "API Design & Spec Contract",
      level: "Easy",
      time: "15 minutes",
      description: "Design clean OpenAPI specifications with robust input validation.",
      category: "API Architecture",
    },
    {
      id: "6",
      title: "Production Incident Debugging",
      level: "Advanced",
      time: "35 minutes",
      description: "Diagnose stack traces, memory leaks, and race conditions under pressure.",
      category: "DevOps & Operations",
    },
  ];

  return (
    <Layout variant="authenticated">
      <main className="challenges-container">
        <header className="page-header">
          <span className="page-tag">SKILL PROOF CHALLENGES</span>
          <h1>Prove What You Know</h1>
          <p>Complete practical challenges to build your verified Skill DNA score.</p>
        </header>

        <div className="challenges-grid">
          {challenges.map((ch) => (
            <article key={ch.id} className="ch-list-card">
              <div className="ch-head">
                <span className="cat-pill">{ch.category}</span>
                <span className="meta-info">{ch.level} • {ch.time}</span>
              </div>
              <h2>{ch.title}</h2>
              <p>{ch.description}</p>
              <div className="ch-foot">
                <a href={`/candidate/challenges/${ch.id}`} className="primary-action-btn sm-btn">
                  START CHALLENGE &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default CandidateChallenges;
