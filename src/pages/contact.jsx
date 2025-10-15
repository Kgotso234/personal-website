import "../styles/pages/contact.css";

const Contact = () => {
    return (
        <section id="contact" className="section ">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">
                        Get In Touch
                    </h2>
                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <div className="contact-text">
                                    <h3>Email</h3>
                                    <p>kgotsofatsompsane234@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <div className="contact-text">
                                    <h3>Phone</h3>
                                    <p>0720621529</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="contact-text">
                                    <h3>Location</h3>
                                    <p>South Africa, Ekhuruleni</p>
                                    <p>Tembisa</p>
                                </div>
                            </div>
                        </div>
                        <form action="" className="contact-form" id="contact-form">
                            <div className="form-group">
                                <input type="text" name="user_name" id="#" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="user_email" id="#" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" id="#" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="#" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;