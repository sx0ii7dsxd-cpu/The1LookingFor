import { useState } from "react";
import Layout from "../components/Layout";
import "./Auth.css";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(window.location.pathname === "/join");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", "/choose-role");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <Layout>
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
            <form className="auth-form" onSubmit={handleSubmit}>
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
    </Layout>
  );
}

export default Auth;