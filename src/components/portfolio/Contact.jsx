import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
        setLoading(false);
        e.target.reset();

        toast({
            title: "Message sent",
            description: "Thanks for reaching out — I'll get back to you soon.",
        });
        }, 700);
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-secondary/40">
        <div className="container grid lg:grid-cols-12 gap-12">
            {/* LEFT SIDE */}
            <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                Contact
            </p>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                Let's build something together.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
                Have a role, project, or just want to say hi? Drop me a message —
                I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-4">
                <a
                href="mailto:kgotsofatsompsane234@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft hover:border-accent/60 transition-colors"
                >
                <span className="size-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>

                <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                    </span>
                    <span className="font-medium">kgotsofatsompsane234@gmail.com</span>
                </span>
                </a>

                <a
                href="tel:+27720621529"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft hover:border-accent/60 transition-colors"
                >
                <span className="size-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} />
                </span>

                <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                    </span>
                    <span className="font-medium">+27 72 062 1529</span>
                </span>
                </a>
            </div>
            </div>

            {/* FORM */}
            <form
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-soft space-y-6"
            >
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
                </div>

                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me a little about your project or opportunity…"
                />
            </div>

            <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto"
            >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                {loading ? "Sending…" : "Send Message"}
            </Button>
            </form>
        </div>
        </section>
    );
};