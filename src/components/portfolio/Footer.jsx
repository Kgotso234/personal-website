export const Footer = () => (
    <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
            © {new Date().getFullYear()} Kgotsofatso Mpsane Pholotho. Built with care.
        </p>

        <div className="flex items-center gap-4">
            <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
            >
            <i className="fa-brands fa-github text-base"></i>
            </a>

            <a
            href="#"
            aria-label="Portfolio"
            className="hover:text-accent transition-colors"
            >
            <i className="fa-solid fa-globe text-base"></i>
            </a>
        </div>
        </div>
    </footer>
);