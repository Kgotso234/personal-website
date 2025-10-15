import { useEffect, useRef } from 'react';
import "../styles/pages/home.css";

const Home = () => {
    const typingElementRef = useRef(null);

    useEffect(() => {
        // Typing animation
        const professions = [
            "Software Engineer",
            "Web Developer",
            "Software Developer",
            "Mobile Developer",
            "Problem Solver"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            if (!typingElementRef.current) return;

            const currentWord = professions[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);

            typingElementRef.current.textContent = currentChar;

            if (!isDeleting && charIndex < currentWord.length) {
                // typing
                charIndex++;
                setTimeout(type, 100);
            } else if (isDeleting && charIndex > 0) {
                // deleting
                charIndex--;
                setTimeout(type, 50);
            } else {
                // change words
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    wordIndex = (wordIndex + 1) % professions.length;
                }
                setTimeout(type, 1000);
            }
        }

        // Start the typing effect
        const typingTimeout = setTimeout(type, 1000);

        return () => {
            clearTimeout(typingTimeout);
        };
    }, []);

    return (
        <section id="home" className="section home-section">
            <div className="container">
                {/* left/text container */}
                <div className="content">
                    <h2>Hi, My name is Kgotsofatso Pholotho</h2>
                    <div className="dynamic-text">
                        I am an Aspiring <span className="typing" ref={typingElementRef}></span>
                    </div>
                    <a href="#contact">Get in touch</a>
                </div>
                {/* profile container */}
                <div className="imgContainer">
                    <img src="/src/assets/profile/profile.jpg" alt="profile picture" />
                </div>
            </div>
        </section>
    );
};

export default Home;