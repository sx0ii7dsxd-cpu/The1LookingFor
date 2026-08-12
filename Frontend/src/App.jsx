import './App.css';

function App() {
    return (
        <main className="container">
            <h2 className="label">
                The1LookingFor
            </h2>
            <h2 className="heading">
                We hire people for their THINKING, not their HISTORY
            </h2>
            <button className="button1">
                Join "The1LookingFor" 
            </button>
            <section className="benifits">
                <h2>Why Join Us?</h2>
                <ul>
                    <li>We treat everybody equal</li> 
                    <li>No resumes required only skills</li>
                    <li>Freshers have opportunities</li>
                </ul>
            </section>
            <p className="description">
                Companies will hire you based on your skills, not your resume. We provide a platform for freshers and experienced individuals to showcase their abilities and get hired by top companies.
            </p>
            <section className="working">
                <h2 className="section-label">How We Work</h2>
                <p className="section-heading">Showcase your skills and get hired</p>
                <p className="section-copy">
                    Build a profile, prove what you know, and get discovered by companies looking for real talent.
                </p>
                <div className="steps-grid">
                    <article className="step-card">
                        <span className="step-number">01</span>
                        <h3 className="step-title">Create your profile</h3>
                        <p className="step-copy">Showcase your skills, work, and strengths in one clear professional profile.</p>
                    </article>
                    <article className="step-card">
                        <span className="step-number">02</span>
                        <h3 className="step-title">Prove what you know</h3>
                        <p className="step-copy">Demonstrate your thinking through practical challenges that highlight real ability.</p>
                    </article>
                    <article className="step-card">
                        <span className="step-number">03</span>
                        <h3 className="step-title">Get discovered</h3>
                        <p className="step-copy">Let employers find you for what you can do, not just what is written on a resume.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default App;
