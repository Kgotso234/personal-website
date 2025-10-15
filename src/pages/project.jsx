import "../styles/pages/project.css";

const Project = () => {
    return (
        <section id="project" className="section ">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">My Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="./src/assets/project-img/StaffSync Logo.png" alt=""/>
                            </div>
                            <div className="project-info">
                                <h3>StaffSync - Leave Management System</h3>
                                <p>
                                    StaffSync is a basic, yet functional, leave management system designed to streamline the process of applying for and tracking employee leave. This system allows employees to easily submit leave requests, view their leave history, and monitor their remaining leave days.
                                </p>
                                <div className="project-tech">
                                    <span>HTML & CSS</span>
                                    <span>JavaScript</span>
                                    <span>ExpressJs</span>
                                    <span>MongoBD</span>
                                    <p>Status: Under development</p>
                                </div>
                                <a href="#" className="project-link">View Project</a>

                                
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    );
};
export default Project;