import "../styles/pages/education.css";

const Education = () => {

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">
                        Education
                    </h2>
                    <div className="education-modern-style">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-logo">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <div className="card-title">
                                    <h3>National Diploma in Informatio Technology</h3>
                                    <p className="edu-logo">Tshwane University of Technology</p>
                                    <p className="edu-period">Year issued - 2025</p>
                                    <p className="edu-location"><i className="fas fa-map-marker-alt"></i> Pretoria, Gauteng</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-logo">
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <div className="card-title">
                                    <h3>National Senior Certificate - Maths and Science</h3>
                                    <p className="edu-logo">Monamoledi Secondary School</p>
                                    <p className="edu-period">Year issued - 2018</p>
                                    <p className="edu-location"><i className="fas fa-map-marker-alt"></i> Manganeng, Limpopo</p>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;