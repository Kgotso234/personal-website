import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Web Developer",
];

const HeroRoles = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <p className="mt-5 text-lg sm:text-xl font-medium">
      I'm an aspiring{" "}
      <span className="text-accent font-semibold">
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </span>
    </p>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-accent-soft blur-3xl" />
      <div className="absolute inset-0 grain opacity-60 pointer-events-none" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-6 shadow-soft">
            <span className="size-2 rounded-full bg-whatsapp animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
            Kgotsofatso <span className="italic text-accent">Mpsane</span> Pholotho.
          </h1>
          
          <HeroRoles />
          
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I build clean, reliable web applications and love turning hard problems into
            simple experiences. Focused on growing as a software engineer through curiosity,
            craft, and continuous learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent">
              <a href="#contact">
                <i className="fa-solid fa-envelope"></i> Contact Me
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="/cv.pdf" download>
                <i className="fa-solid fa-download"></i> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              {/* <Github className="size-5" /> */}
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="#"
              aria-label="Portfolio"
              className="hover:text-accent transition-colors"
            >
              <i className="fa-solid fa-globe"></i>
            </a>

            <span className="h-px w-12 bg-border" />

            <a
              href="#about"
              className="text-xs uppercase tracking-widest hover:text-foreground inline-flex items-center gap-1"
            >
              Scroll <i className="fa-solid fa-arrow-down size-3" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-5 relative animate-fade-up [animation-delay:200ms]">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-warm shadow-glow" />

            <div className="relative aspect-[4/5] rounded-3xl bg-card border border-border shadow-soft overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="mx-auto size-32 rounded-full bg-gradient-warm flex items-center justify-center text-5xl font-display font-semibold text-accent-foreground shadow-soft animate-float">
                  KP
                </div>

                <p className="mt-6 font-display text-2xl">Hello, I'm Kgotso</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Pretoria, South Africa
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  {["React", "Node", "C#", "Figma"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};