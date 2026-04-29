import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const education = [
    {
        title: "National Diploma in IT — Software Development",
        org: "Tshwane University of Technology",
        period: "Graduated 2025",
    },
    {
        title: "Matric Certificate",
        org: "Monamoledi Secondary School",
        period: "2017",
    },
];

const experience = [
    {
        title: "IT Service Desk Agent",
        org: "Department of Public Works & Infrastructure (DPWI)",
        period: "2025 — Present",
    },
    {
        title: "Junior Full-Stack Developer",
        org: "Moepi Publishing",
        period: "2024 — 2025",
    },
];

const Timeline = ({ icon, label, items }) => (
    <div>
        <div className="flex items-center gap-3 mb-8">
        <div className="size-10 rounded-xl bg-foreground text-background flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="text-sm" />
        </div>
        <h3 className="font-display text-2xl font-semibold">{label}</h3>
        </div>

        <ol className="relative border-l border-border ml-5 space-y-8">
        {items.map((it) => (
            <li key={it.title} className="pl-8">
            <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full bg-accent ring-4 ring-background" />
            
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {it.period}
            </p>

            <p className="mt-1 font-display text-lg font-semibold">
                {it.title}
            </p>

            <p className="text-muted-foreground">{it.org}</p>
            </li>
        ))}
        </ol>
    </div>
);

export const Background = () => {
    return (
        <section id="background" className="py-24 sm:py-32 bg-secondary/40">
        <div className="container">
            <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                Background
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                Education & experience that shaped me.
            </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <Timeline icon={faGraduationCap} label="Education" items={education} />
                <Timeline icon={faBriefcase} label="Experience" items={experience} />
            </div>
        </div>
        </section>
    );
};