import { useState } from "react";
import "../styles/pages/contact.css";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                        
                    </div>
                </div>
            </div>
            {/* Chatbot Icon */}
            <div
                className="chatbot-icon"
                onClick={() => setIsOpen(!isOpen)}
                title="Chat with me"
            >
                💬
            </div>

            {/* Chatbot Popup */}
            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chatbot-header">
                        <h4>Ask Me Anything</h4>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chatbot-body">
                        <p>👋 Hi! I’m KgotsoBot. Ask me anything about me or my portfolio.</p>
                        {/* You can later integrate Dialogflow or your Node.js chatbot backend here */}
                        {/* Chat messages (optional placeholder) */}
                        <div className="chat-messages">
                            {/* You can later map over messages here */}
                        </div>

                        {/* Input section */}
                        <div className="chat-input-section">
                            <input
                            type="text"
                            placeholder="Type your message..."
                            className="chat-input"
                            />
                            <button className="chat-send-btn">Send</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;