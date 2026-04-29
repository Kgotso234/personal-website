import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Background } from "@/components/portfolio/Background";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Background />
      <Projects /> 
      <Contact /> 
    </main>
    <Footer />
    <WhatsAppButton /> 
  </div>
);

export default Index;