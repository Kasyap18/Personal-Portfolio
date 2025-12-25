import './Skills.css'

function Skills() {
    const skillCategories = [
        {
            title: "Programming & Software Engineering",
            skills: ["Python", "Java (Basic)", "Data Structures & Algorithms", "Clean Code & Scalable Design"]
        },
        {
            title: "Machine Learning & Deep Learning",
            skills: ["Regression, Classification, Clustering", "CNN, RNN, LSTM, ResNeXt", "Feature Engineering, PCA", "Model Evaluation & Optimization"]
        },
        {
            title: "Generative AI",
            skills: ["Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "AI Agents (LangChain, LangGraph)"]
        },
        {
            title: "Frameworks & Tools",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy, Pandas", "OpenCV", "Streamlit", "Django", "Git & GitHub"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL"]
        }
    ]

    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="section-title">🛠 Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category card">
                            <h3 className="category-title gradient-text">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
