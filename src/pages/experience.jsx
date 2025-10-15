import "../styles/pages/education.css";

const Experience = () => {
    return (
        <section id="experience" className="section ">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">Professional Experience</h2>
                    <div className="education-modern-style">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-logo"> 
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <div className="card-title">
                                    <h3>Backend Developer Intern</h3>
                                    <p className="edu-logo">Moepi Publishing</p>
                                    <p className="edu-period">Sep 2024 - Sep 2025</p>
                                    <p className="edu-location"><i className="fas fa-map-marker-alt"></i> Pretoria · Remote</p>
                                </div>
                            </div>
                            <div className="edu-details">
                                <div className="skills-acquired">
                                    <h4>Skills Acquired</h4>
                                    <div className="skill-tags">
                                        <div className="skill-tag">Web Development - PHP, Laravel, JavaScript, and MySQL</div>
                                        <div className="skill-tag">Debugging & Troubleshooting: </div>
                                        <div className="skill-tag">Software Testing</div>
                                        <div className="skill-tag">Database Management</div>
                                        <div className="skill-tag">Collaboration & Teamwork</div>
                                        <div className="skill-tag">Problem-Solving</div>
                                        <div className="skill-tag">Time Management</div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>

    );
};

export default Experience;