import { useState } from "react";
import Layout from "../../components/Layout";
import "./ChallengeView.css";

function ChallengeView({ challengeId = "1" }) {
  const [solution, setSolution] = useState(
    `// Implement your solution here
public class ApiSolution {
    public static void main(String[] args) {
        System.out.println("Processing high-throughput API challenge...");
    }
}`
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout variant="authenticated">
      <main className="challenge-view-container">
        <header className="ch-view-header">
          <div>
            <span className="cat-pill">Java Backend Challenge</span>
            <h1>Java High-Throughput API Optimization</h1>
          </div>
          <div className="ch-timer">
            <span className="timer-label">Time Remaining</span>
            <span className="timer-value">29:45</span>
          </div>
        </header>

        <section className="ch-workspace">
          {/* Instructions Column */}
          <article className="ch-instructions">
            <h3>Challenge Instructions</h3>
            <p>
              Your objective is to optimize a REST endpoint that handles peak loads of 10,000 requests/sec.
            </p>
            <h4>Requirements:</h4>
            <ul>
              <li>Implement in-memory caching for frequent GET queries.</li>
              <li>Avoid blocking thread synchronization on hot paths.</li>
              <li>Return appropriate HTTP status codes for invalid payloads.</li>
              <li>Ensure thread safety under concurrent writes.</li>
            </ul>

            <div className="proof-criteria">
              <h4>Evaluation Criteria</h4>
              <p>✔ Logic correctness • ✔ Execution speed • ✔ Code clarity</p>
            </div>
          </article>

          {/* Solution Input Column */}
          <article className="ch-editor">
            <div className="editor-head">
              <span>Solution Editor (Java)</span>
              <span>Input Size: {solution.length} chars</span>
            </div>

            <form onSubmit={handleSubmit} className="editor-form">
              <textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                rows="16"
                className="code-textarea"
              />

              <div className="editor-footer">
                <a href="/candidate/challenges" className="secondary-btn">
                  &larr; Back to Challenges
                </a>
                <button type="submit" className="primary-action-btn sm-btn">
                  {submitted ? "✓ SUBMITTED FOR EVALUATION" : "SUBMIT PROOF &rarr;"}
                </button>
              </div>
            </form>

            {submitted && (
              <div className="submission-banner">
                <h4>✓ Challenge Solution Submitted!</h4>
                <p>Your solution has been evaluated. Your Skill DNA matrix score has been updated.</p>
                <a href="/candidate/skill-dna" className="text-link">View Updated Skill DNA Matrix &rarr;</a>
              </div>
            )}
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default ChallengeView;
