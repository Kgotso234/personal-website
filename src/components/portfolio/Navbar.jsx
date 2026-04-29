import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#background", label: "Background" },
  { href: "#projects", label: "Projects" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          Kgotsofatso<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="accent">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}

            
            <li className="pt-2">
              <Button asChild variant="accent" className="w-full" onClick={() => setOpen(false)}>
                <a href="#contact">Contact Me</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};