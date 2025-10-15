import { useEffect } from 'react';

export const useSmoothScroll = (closeMenu) => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            e.preventDefault();

            const targetId = target.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });

                // Close mobile menu after clicking a link
                if (closeMenu) {
                    closeMenu();
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, [closeMenu]);
};