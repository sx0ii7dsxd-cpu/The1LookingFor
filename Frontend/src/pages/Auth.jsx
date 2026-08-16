import "./Auth.css";

function Auth() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <p className="auth-label">
                        THE1LOOKINGFOR
                    </p>
                    <h1>
                        Prove what you can do.
                    </h1>
                    <p>
                        Not what you've done.
                    </p>
                </div>
                <div className="auth-box">
                    <h2>
                        Welcome back
                    </h2>
                    <p className="auth-description">
                        Sign in to continue to The1LookingFor.
                    </p>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="auth-button"
                        >
                            SIGN IN
                        </button>
                    </form>
                    <p className="auth-switch">
                        Don't have an account?
                        <button type="button">
                            Create one
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Auth;