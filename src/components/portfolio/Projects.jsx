import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";

const projects = [
        {
            title: "Sehunane Attorneys Inc",
            description:
                "A professional law firm website for Sehunane Attorneys Inc, showcasing legal services including labour law, criminal defense, family law, divorce, property law, and civil litigation in South Africa. Designed to provide clear information and improve client accessibility.",
            tech: ["Laravel", "Tailwind CSS"],
            href: "https://github.com/Kgotso234/Sehunane-attorneys-inc",
            accent: "01",
        },
        {
            title: "StaffSync - Leave Management System",
            description:
                "A leave management system that enables employees to apply for leave and track their allocated days, while providing a simple interface for managing requests and approvals.",
            tech: ["HTML5", "CSS3", "Tailwind CSS", "Express.js", "MongoDB"],
            href: "https://github.com/Kgotso234/StaffSync",
            accent: "02",
        },
        {
            title: "Survey Application",
            description:
                "A simple survey application that allows users to participate by answering questions about their daily lifestyle activities, with data captured and managed through a backend system.",
            tech: ["HTML5", "CSS3", "Express.js", "MongoDB"],
            href: "https://github.com/Kgotso234/Survey_App",
            accent: "03",
        },
    ];

    export const Projects = () => {
    return (
        <section id="projects" className="py-24 sm:py-32">
        <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                Selected work
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                Projects I've built and shipped.
                </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
                A small selection of full-stack work — from internal tools to
                polished interfaces.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
                <article
                key={p.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft hover:-translate-y-1 hover:border-accent/60 transition-all"
                >
                <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-3xl text-accent/70">
                    {p.accent}
                    </span>

                    <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                </div>

                <h3 className="font-display text-xl font-semibold leading-snug">
                    {p.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                    <span
                        key={t}
                        className="text-[11px] font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                        {t}
                    </span>
                    ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                    <Button asChild variant="ghost" size="sm" className="-ml-3">
                    <a href={p.href} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        View on GitHub
                    </a>
                    </Button>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
};