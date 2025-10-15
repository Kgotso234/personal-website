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
                            <div className="language-item"><img src="/src/assets/languages/php.png" alt="php" class="custom-icon" /></div>
                            <div className="language-item"><img src="/src/assets/languages/python.png" alt="python" class="custom-icon" /></div>
                            <div className="language-item"><img src="/src/assets/languages/nodejs.png" alt="Node.js" class="custom-icon" /></div>
                            <div className="language-item"><img src="/src/assets/languages/c-sharp.png" alt="C#" class="custom-icon" /></div>
                        </div>
                        <div class="language-grid">
                            <h3>Frontend Languages</h3>
                            <div class="language-item"><img src="/src/assets/languages/html-5.png" alt="HTML5" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/css-3.png" alt="CSS3" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/js.png" alt="JavaScript" class="custom-icon" /></div>
                            
                        </div>
                        <div class="language-grid">
                            <h3>Frameworks & Libraries</h3>
                            <div class="language-item"><img src="/src/assets/languages/bootstrap-5-1.svg" alt="Bootstrap" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/react-2.svg" alt="ReactJs" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/laravel-2.svg" alt="Laravel" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/express-109.svg" alt="ExpressJs" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/tailwind-css-2.svg" alt="Tailwind" class="custom-icon" /></div>
                            
                        </div>
                        <div class="language-grid">
                            <h3>Databases</h3>
                            <div class="language-item"><img src="/src/assets/languages/mysql-logo-pure.svg" alt="MySQL" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/mongodb-icon-2.svg" alt="MongoBD" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/postgresql.svg" alt="PostgreSQL" class="custom-icon" /></div>
                            
                        </div>
                        <div class="language-grid">
                            <h3>Tools & Version Control</h3>
                            <div class="language-item"><img src="/src/assets/languages/visual-studio-code-1.svg" alt="vscode" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/intellij-idea-1.svg" alt="IntelliJ" class="custom-icon" /></div>
                            <div class="language-item"><img src="/src/assets/languages/git-icon.svg" alt="Git" class="custom-icon" /></div>
                            
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