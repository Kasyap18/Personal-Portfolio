import './Projects.css'

function Projects() {
    const projects = [
        {
            title: "InterviewVault",
            description: "An AI-powered platform that generates domain-specific interview questions, provides instant feedback, and enhances resumes using Generative AI.",
            tech: ["React", "TypeScript", "Gemini Flash 1.5"],
            impact: "Reduced interview preparation time by 40%",
            github: "https://github.com/Kasyap18",
            live: "https://interviewvault.vercel.app/"
        },
        {
            title: "ResuMate",
            description: "A Generative AI-based resume analysis tool that provides structured, career-focused feedback instead of generic chatbot responses.",
            tech: ["Python", "Streamlit", "PyPDF2", "Gemini 1.5 Flash"],
            impact: null,
            github: "https://github.com/Kasyap18",
            live: null
        },
        {
            title: "SmartChat / IntelliChat",
            description: "Intelligent AI chat applications showcasing tool-using AI agents capable of structured, source-backed responses.",
            tech: ["LangChain", "LangGraph", "Google Gemini API", "Pydantic"],
            impact: null,
            github: "https://github.com/Kasyap18",
            live: null
        },
        {
            title: "Fishing Activity Detection",
            description: "A machine learning project that detects and classifies fishing activity from AIS data, identifying illegal patterns and gear types.",
            tech: ["Python", "ML Classification", "Data Preprocessing"],
            impact: null,
            github: "https://github.com/Kasyap18",
            live: null
        }
    ]

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="section-title">🚀 Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card card">
                            <h3 className="project-title gradient-text">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            {project.impact && (
                                <div className="impact">
                                    <strong>Impact:</strong> {project.impact}
                                </div>
                            )}
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                                        View Code
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
