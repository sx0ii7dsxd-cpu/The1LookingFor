import Layout from "../components/Layout";
import "./ChooseRole.css";

function ChooseRole() {
    return (
        <Layout>
            <main className="choose-role-page">
                <section className="choose-role">
                    <p className="choose-role-label">
                        THE1LOOKINGFOR
                    </p>
                    <h1>
                        What brings you here?
                    </h1>
                    <p className="choose-role-description">
                        Choose how you want to use you The1LookingFor.
                    </p>
                    <div className="role-options">

                        <a href="/join" className="role-card">
                            <span className="role-number">01</span>
                            <div>
                                <h2> I'm looking for opportunities</h2>
                                <p>
                                    Prove your skills, discover opportunities, 
                                    and get hired based on waht you can do.
                                </p>
                            </div>
                            <span className="role-arrow">&rarr;</span>
                        </a>
                        <a href="/join" className="role-card">
                            <span className="role-number">02</span>
                            <div>
                                <h2>
                                    I'm looking for talent.
                                </h2>
                                <p>
                                    Discover skilled people and find the right
                                    talent based on what they can actually do. 
                                </p>
                            </div>
                            <span className="role-arrow">&rarr;</span>
                        </a>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default ChooseRole;