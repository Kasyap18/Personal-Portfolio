import './About.css'

function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <h2 className="section-title">👋 About Me</h2>
                <div className="about-content">
                    <p>
                        I am a <strong>Software Engineer</strong> and <strong className="gradient-text">AI Engineer enthusiast</strong> with
                        a strong foundation in core computer science, data structures, and problem-solving, combined with hands-on experience
                        in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Generative AI</strong>.
                    </p>
                    <p>
                        I enjoy programming in <strong className="gradient-text">Python</strong> and focus on writing clean, efficient, and scalable code.
                        My primary interest lies in <strong>AI model building</strong> — from data preprocessing and feature engineering to model training,
                        evaluation, and deployment — and integrating these models into real-world software applications.
                    </p>
                    <p>
                        I am particularly passionate about <strong className="gradient-text">Generative AI</strong>, <strong>LLMs</strong>,
                        <strong>AI agents</strong>, and intelligent systems that go beyond basic automation to deliver structured, meaningful outcomes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
