import "../styles/pages/skills.css";

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-category">
                    <h3>Technical Skills</h3>
                    <div className="languages-flex">
                        <div className="language-grid">
                            <h3>Backend Languages</h3>
                            <div className="language-item"><img src="/images/languages/php.png" alt="php" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/python.png" alt="python" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/nodejs.png" alt="Node.js" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/c-sharp.png" alt="C#" className="custom-icon" /></div>
                        </div>
                        <div className="language-grid">
                            <h3>Frontend Languages</h3>
                            <div className="language-item"><img src="/images/languages/html-5.png" alt="HTML5" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/css-3.png" alt="CSS3" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/js.png" alt="JavaScript" className="custom-icon" /></div>
                            
                        </div>
                        <div className="language-grid">
                            <h3>Frameworks & Libraries</h3>
                            <div className="language-item"><img src="/images/languages/bootstrap-5-1.svg" alt="Bootstrap" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/react-2.svg" alt="ReactJs"         className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/laravel-2.svg" alt="Laravel"       className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/express-109.svg" alt="ExpressJs"   className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/tailwind-css-2.svg" alt="Tailwind" className="custom-icon" /></div>
                            
                        </div>
                        <div className="language-grid">
                            <h3>Databases</h3>
                            <div className="language-item"><img src="/images/languages/mysql-logo-pure.svg" alt="MySQL"  className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/mongodb-icon-2.svg" alt="MongoBD" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/postgresql.svg" alt="PostgreSQL"  className="custom-icon" /></div>
                            
                        </div>
                        <div className="language-grid">
                            <h3>Tools & Version Control</h3>
                            <div className="language-item"><img src="/images/languages/visual-studio-code-1.svg" alt="vscode" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/intellij-idea-1.svg" alt="IntelliJ" className="custom-icon" /></div>
                            <div className="language-item"><img src="/images/languages/git-icon.svg" alt="Git" className="custom-icon" /></div>
                            
                        </div>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Core Skills</h3>
                    <div className="core-skills">
                        <div className="core-skill-item">
                            <span>Object Oriented Programing (OOP)</span>
                        </div>
                        <div className="core-skill-item">
                            <span>Software Development</span>
                        </div>
                        
                        <div className="core-skill-item">
                            <span>Database Design and Management (SQL)</span>
                        </div>
                        
                        <div className="core-skill-item">
                            <span>Microsoft Office Tools (Excel, Word, Access, PowerPoint)</span>
                        </div>
                        <div className="core-skill-item">
                            <span>Problem Solving and Analytical Thinking</span>
                        </div>
                        <div className="core-skill-item">
                            <span>Time Management and Organization</span>
                        </div>
                        <div className="core-skill-item">
                            <span>Effective Communication and Teamwork</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;