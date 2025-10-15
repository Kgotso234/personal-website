import { useState } from 'react';
import "../styles/components/navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#education", text: "Education" },
        { href: "#experience", text: "Experience" },
        { href: "#project", text: "Projects" },
        { href: "#contact", text: "Contact" }
    ];

    return (
        <div className="header">
            <a href="#home" className="logo">Kgotsofatso Pholotho</a>

            <ul className={`links ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link, index) => (
                    <li key={index} className="item">
                        <a 
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="toggle-menu" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
};

export default Navbar;