import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-card/95 backdrop-blur-md border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold">Gagan S</h1>
              <p className="text-xs text-muted-foreground">Quality Analyst</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              size="sm" 
              className="hero-gradient text-white hover:glow-primary transition-smooth"
              onClick={() => {
                const resumeContent = `GAGAN S - QUALITY ANALYST
Email: gagan.gangadhar07@gmail.com | Phone: 8050804661
Location: Bengaluru, Karnataka, 560079, India

PROFESSIONAL SUMMARY
A proactive Quality Analyst with 3+ years of experience in software testing, automation, and quality assurance.

WORK EXPERIENCE  
Quality Analyst | AVR Edge Networks Pvt Ltd | July 2021 - Present
Project Support Coordinator | Schneider Electric | Nov 2019 - Jun 2021
Data Analyst | Wistron ITS | Mar 2019 - Aug 2019

CORE SKILLS
• Quality Practices: FMEA/FTA, SQI, Process improvement
• Testing & Automation: Python, Selenium, API Testing, Performance Testing
• Tools: JIRA, Pytest, Locust, JMeter, Jenkins`;
                
                const blob = new Blob([resumeContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Gagan_S_Resume.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  size="sm" 
                  className="hero-gradient text-white hover:glow-primary transition-smooth w-full"
                  onClick={() => {
                    const resumeContent = `GAGAN S - QUALITY ANALYST
Email: gagan.gangadhar07@gmail.com | Phone: 8050804661
Location: Bengaluru, Karnataka, 560079, India

PROFESSIONAL SUMMARY
A proactive Quality Analyst with 3+ years of experience in software testing, automation, and quality assurance.

WORK EXPERIENCE
Quality Analyst | AVR Edge Networks Pvt Ltd | July 2021 - Present
Project Support Coordinator | Schneider Electric | Nov 2019 - Jun 2021
Data Analyst | Wistron ITS | Mar 2019 - Aug 2019

CORE SKILLS
• Quality Practices: FMEA/FTA, SQI, Process improvement
• Testing & Automation: Python, Selenium, API Testing, Performance Testing  
• Tools: JIRA, Pytest, Locust, JMeter, Jenkins`;
                    
                    const blob = new Blob([resumeContent], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Gagan_S_Resume.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;