import './Contact.css'

function Contact() {
    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">📬 Contact</h2>
                <div className="contact-content">
                    <p className="contact-intro">
                        I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers and AI enthusiasts. Feel free to reach out!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:kasyap180305@gmail.com" className="contact-link card">
                            <span className="contact-icon">📧</span>
                            <div>
                                <div className="contact-label">Email</div>
                                <div className="contact-value">kasyap180305@gmail.com</div>
                            </div>
                        </a>

                        <div className="contact-link card resume-card">
                            <span className="contact-icon">📄</span>
                            <div className="resume-content">
                                <div className="contact-label">Resume</div>
                                <div className="resume-buttons">
                                    <a href="/assets/software-engineer-resume.pdf.pdf" download="Kasyap_SE_Resume.pdf" className="resume-btn">
                                        💼 Software Engineer
                                    </a>
                                    <a href="/assets/ai-engineer-resume.pdf.pdf" download="Kasyap_AI_Resume.pdf" className="resume-btn">
                                        🤖 AI Engineer
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="https://linkedin.com/in/kasyap-bhaskararaju-narasimha-883a75302" target="_blank" rel="noopener noreferrer" className="contact-link card">
                            <span className="contact-icon">🔗</span>
                            <div>
                                <div className="contact-label">LinkedIn</div>
                                <div className="contact-value">Connect with me</div>
                            </div>
                        </a>
                    </div>
                </div>

                <footer className="footer">
                    <p>Designed & Built by <strong className="gradient-text">Bhaskararaju Narasimha Kasyap</strong></p>
                    <p>© 2025 | Software Engineer | AI Enthusiast</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
