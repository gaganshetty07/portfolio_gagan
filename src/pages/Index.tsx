import Navigation from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Experience Section */}
      <Experience />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Education Section */}
      <Education />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Gagan S. All rights reserved. Built with passion for quality excellence.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Quality Analyst • Software Testing • Automation Expert
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;