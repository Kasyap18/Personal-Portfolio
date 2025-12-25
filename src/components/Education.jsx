import './Education.css'

function Education() {
    const certifications = [
        "Generative AI – LinkedIn Learning",
        "CCNA – Computer Networking",
        "Web Development – Internshala",
        "Cambridge English C1"
    ]

    const activities = [
        "Student Coordinator – GDG Bootcamp & Espirito 2024",
        "Design Co-Lead – Espirito 2025"
    ]

    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="section-title">🎓 Education & Achievements</h2>

                <div className="education-card card">
                    <h3 className="degree gradient-text">Bachelor of Technology (Computer Science)</h3>
                    <h4 className="institution">Malla Reddy College of Engineering and Technology</h4>
                    <div className="education-details">
                        <span className="cgpa">CGPA: <strong>9.28</strong></span>
                        <span className="duration">November 2022 – Present</span>
                    </div>
                </div>

                <div className="certifications-section">
                    <h3 className="subsection-title">📜 Certifications</h3>
                    <div className="certifications-grid">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="cert-card card">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="activities-section">
                    <h3 className="subsection-title">🎯 Activities & Interests</h3>
                    <ul className="activities-list">
                        {activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                        ))}
                        <li><strong>Solved 200+ Python problems</strong> on LeetCode, GeeksforGeeks, and CodeChef</li>
                        <li>Programming and problem-solving</li>
                        <li>AI / ML model building</li>
                        <li>Generative AI and LLM-based systems</li>
                        <li>AI agents and intelligent automation</li>
                        <li>Building real-world, scalable applications</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Education
