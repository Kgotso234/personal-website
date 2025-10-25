import { useState, useRef, useEffect } from "react";
import "../styles/pages/contact.css";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages are added
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    // Function to get current time in HH:MM format
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    };

    const sendMessage = async () => {
        if(!input.trim()) return;

        // Add user message to chat immediately with timestamp
        const userMessage = input;
        const userTimestamp = getCurrentTime();
        setMessages((prev) => [...prev, { 
            sender: "user", 
            text: userMessage,
            timestamp: userTimestamp,
            status: 'sent'
        }]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch(`https://kgotsobot-backend.onrender.com/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const botTimestamp = getCurrentTime();
            
            // Add bot response to chat with timestamp
            setMessages((prev) => [...prev, { 
                sender: "bot", 
                text: data.response,
                timestamp: botTimestamp
            }]);
        } catch (error) {
            console.error("Error sending message: ", error);
            const errorTimestamp = getCurrentTime();
            setMessages((prev) => [...prev, { 
                sender: "bot", 
                text: "Oops! Something went wrong. Please try again later.",
                timestamp: errorTimestamp
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            sendMessage();
        }
    };

    const handleSendClick = () => {
        if (!isLoading) {
            sendMessage();
        }
    };

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
                        <div className="chat-messages">
                            {messages.length === 0 ? (
                                <div className="chat-message bot welcome-message">
                                    <div className="message-text">Hi! I'm Kgotsofatso's bot. How can I assist you</div>
                                    <div className="message-meta">
                                        <span className="message-time">Just now</span>
                                    </div>
                                </div>
                            ) : (
                                messages.map((msg, index) => (
                                    <div 
                                        key={index} 
                                        className={`chat-message-wrapper ${msg.sender === "bot" ? "bot" : "user"}`}
                                    >
                                        <div className={`chat-message ${msg.sender}`}>
                                            <div className="message-text">{msg.text}</div>
                                            <div className="message-meta">
                                                <span className="message-time">{msg.timestamp}</span>
                                                {msg.sender === "user" && (
                                                    <span className="message-status">
                                                        {msg.status === 'sent' && '✓✓'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            {isLoading && (
                                <div className="chat-message bot">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="message-meta">
                                        <span className="message-time">Typing...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input section */}
                        <div className="chat-input-section">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="chat-input" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                                onKeyDown={handleKeyPress}
                                disabled={isLoading}
                            />
                            <button 
                                className="chat-send-btn" 
                                onClick={handleSendClick}
                                disabled={isLoading || !input.trim()}
                            >
                                {isLoading ? "..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;