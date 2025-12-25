import './Experience.css'

function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <h2 className="section-title">💼 Internship</h2>
                <div className="experience-card card">
                    <h3 className="role gradient-text">AI Engineer Intern</h3>
                    <h4 className="company">GenAI Lakes – AI Recruitment Platform</h4>
                    <ul className="experience-points">
                        <li>
                            Developed <strong>resume–job matching systems</strong> using NLP embeddings and scoring techniques
                            to improve hiring accuracy
                        </li>
                        <li>
                            Built <strong>AI-powered Q&A systems</strong> using Gemini AI, reducing resume screening time by <strong>30%</strong>
                        </li>
                        <li>
                            Implemented <strong>real-time WebSocket chat</strong> for recruiters and candidates, increasing engagement by <strong>25%</strong>
                        </li>
                        <li>
                            Worked with <strong className="gradient-text">Python, spaCy, Scikit-learn, Node.js, MongoDB, and WebSockets</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
