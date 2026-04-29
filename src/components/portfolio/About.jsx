import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faGlobe,
    faWrench,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const skillGroups = [
    {
        icon: faCode,
        title: "Languages",
        items: ["C#", "PHP", "Node.js"],
    },
    {
        icon: faGlobe,
        title: "Web",
        items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        icon: faWrench,
        title: "Tools & Frameworks",
        items: ["Laravel", "Express.js", "Git", "Figma"],
    },
    {
        icon: faDatabase,
        title: "Databases",
        items: ["MySQL", "SQL Server"],
    },
];

export const About = () => {
    return (
        <section id="about" className="py-24 sm:py-32">
        <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT */}
            <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                About me
                </p>

                <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                An IT graduate building a career in software.
                </h2>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                    I hold a National Diploma in IT (Software Development) from
                    Tshwane University of Technology. My journey spans support and
                    engineering — from working as an{" "}
                    <span className="text-foreground font-medium">
                        Junior Full-Stack Developer
                    </span>{" "}
                    to shipping features as a{" "}
                    <span className="text-foreground font-medium">
                        IT Service Desk Agent
                    </span>.
                </p>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                I care about writing code that's understandable, solving problems
                end-to-end, and continuously learning the tools that make great
                products possible.
                </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {skillGroups.map(({ icon, title, items }) => (
                <div
                    key={title}
                    className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:-translate-y-1 hover:border-accent/50 transition-all"
                >
                    {/* ICON */}
                    <div className="size-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={icon} className="text-sm" />
                    </div>

                    <h3 className="font-display text-lg font-semibold">
                    {title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((s) => (
                        <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                        {s}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            </div>
        </div>
        </section>
    );
};