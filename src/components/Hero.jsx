import './Hero.css'

function Hero() {
    return (
        <section className="hero section" id="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="hero-greeting">Hi, I'm</div>
                    <h1 className="hero-name">
                        <span className="surname">BHASKARARAJU NARASIMHA</span>
                        <span className="first-name gradient-text">KASYAP</span>
                    </h1>
                    <h2 className="hero-title">
                        <span className="gradient-text">Software Engineer</span> | AI &amp; Generative AI Engineer Enthusiast
                    </h2>
                    <p className="hero-description">
                        I build scalable software systems and intelligent AI solutions using Machine Learning,
                        Deep Learning, and Generative AI — focusing on practical, real-world impact.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">👉 View Projects</a>
                        <a href="https://github.com/Kasyap18" target="_blank" rel="noopener noreferrer" className="btn">
                            👉 GitHub
                        </a>
                        <a href="https://linkedin.com/in/kasyap-bhaskararaju-narasimha-883a75302"
                            target="_blank" rel="noopener noreferrer" className="btn">
                            👉 LinkedIn
                        </a>
                        <a href="https://leetcode.com/u/Kasyap1803/" target="_blank" rel="noopener noreferrer" className="btn">
                            👉 LeetCode
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src="/assets/profile.jpg" alt="Kasyap" />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
