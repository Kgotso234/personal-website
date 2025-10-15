import { useEffect, useState } from 'react';

export const useScrollEffects = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Sticky header on scroll
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(255, 255, 255, 0.9)';
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = '#fff';
                    header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                }
            }

            // Highlight active menu item on scroll
            const sections = document.querySelectorAll('.section');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { activeSection };
};