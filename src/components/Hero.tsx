import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block">GAGAN S</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                QUALITY ANALYST
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Proactive Quality Analyst with 3+ years of experience ensuring high-quality software delivery. 
              Expert in automation, FMEA/FTA, and cross-functional collaboration.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <span>gagan.gangadhar07@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>8050804661</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="hero-gradient text-white hover:glow-primary transition-smooth">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth">
              View Projects
            </Button>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full hero-gradient p-1 glow-primary">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center text-6xl font-bold text-primary">
                  GS
                </div>
              </div>
            </div>
            {/* Floating Tech Icons */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-card rounded-full flex items-center justify-center glow-accent animate-float text-accent font-bold">
              QA
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-card rounded-full flex items-center justify-center glow-primary animate-float text-primary font-bold" style={{ animationDelay: '0.5s' }}>
              3Y+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};