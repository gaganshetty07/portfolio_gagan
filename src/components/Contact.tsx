import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Linkedin, 
  Github,
  Send,
  Calendar,
  Briefcase,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:gagan.gangadhar07@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleScheduleCall = () => {
    const calendlyLink = "https://calendly.com/gagan-gangadhar07"; // Replace with actual Calendly link
    const subject = "Schedule a call with Gagan S";
    const body = "Hi Gagan,\n\nI would like to schedule a call to discuss potential opportunities.\n\nBest regards";
    
    // For now, open email with scheduling request
    const mailtoLink = `mailto:gagan.gangadhar07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Schedule Request Sent",
      description: "Email opened to schedule a call. I'll get back to you with available times.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring quality excellence to your next project. Let's discuss how I can help ensure your software meets the highest standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <div className="space-y-6">
            {/* Creative Professional Profile */}
            <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in overflow-hidden">
              {/* Header with Gradient Background */}
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-6 border-b border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">
                      Gagan S
                    </h3>
                    <p className="text-accent font-semibold">Project Quality Engineer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">4+ Years Experience</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-primary">25+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">Test Coverage</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-green-400">100%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Professional Summary */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <h4 className="text-lg font-semibold">About Me</h4>
                  </div>
                  <p className="text-card-foreground leading-relaxed text-sm">
                    Passionate Project Quality Engineer with 4+ years of hands-on experience in automation testing, 
                    API testing, and performance optimization. Expert in prompt engineering and AI-assisted development, 
                    delivering robust testing frameworks and ensuring software quality through innovative approaches.
                  </p>
                </div>

                {/* Core Expertise */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <h4 className="text-lg font-semibold">Core Expertise</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">Test Automation</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-medium">API Testing</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">Performance Testing</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-medium">Prompt Engineering</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                    <h4 className="text-lg font-semibold">Tech Stack</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Selenium WebDriver</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Playwright</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Postman</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Jenkins CI/CD</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Python & Pytest</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Locust</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">SQL & DB Testing</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                  <Button
                    className="flex-1 hero-gradient text-white hover:glow-primary transition-smooth group"
                    onClick={() => {
                      const resumeContent = `GAGAN S - PROJECT QUALITY ENGINEER
Email: gagan.gangadhar07@gmail.com | Phone: +91 8050804661
Location: Bengaluru, Karnataka, 560079, India

PROFESSIONAL SUMMARY
A proactive Project Quality Engineer with 4+ years of hands-on experience in software testing, automation, and quality assurance.
Skilled in prompt engineering and passionate about learning new technologies, delivering high-quality software solutions through comprehensive testing strategies.

WORK EXPERIENCE
Project Quality Engineer | Phenom | Jan 2025 - Present
Quality Analyst | AVR Edge Networks Pvt Ltd (Acquired by Phenom) | July 2021 - Dec 2024
Project Support Coordinator | Schneider Electric | Nov 2019 - Jun 2021
Data Analyst | Wistron ITS | Mar 2019 - Aug 2019

CORE SKILLS
• Quality Practices: FMEA/FTA, SQI, Process improvement
• Testing & Automation: Python, Selenium, Playwright, API Testing, Performance Testing, Database Testing
• Prompt Engineering: ChatGPT, Claude, AI-assisted testing
• Tools: JIRA, Pytest, Locust, Jenkins, Postman
• Learning: Always exploring new technologies and frameworks`;

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
                    <Download size={18} className="mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-white transition-smooth group"
                    onClick={handleScheduleCall}
                  >
                    <Calendar size={18} className="mr-2 group-hover:animate-pulse" />
                    Schedule Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Creative Contact Hub */}
          <div className="space-y-6">
            {/* Availability Status */}
            <Card className="card-gradient border-border/50 hover:glow-primary transition-smooth group animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400">Available for Projects</h3>
                    <p className="text-sm text-muted-foreground">Ready to discuss new opportunities</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">100%</div>
                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-accent transition-smooth flex items-center gap-2">
                  <Send size={20} />
                  Let's Connect
                </CardTitle>
                <CardDescription>Choose your preferred way to reach out</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Primary Contact Methods */}
                <div className="grid grid-cols-1 gap-3">
                  <a 
                    href="mailto:gagan.gangadhar07@gmail.com?subject=Project Inquiry&body=Hi Gagan, I would like to discuss a project opportunity with you." 
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group border border-primary/20 hover:border-primary/40"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">Email Me</div>
                      <div className="text-sm text-muted-foreground">gagan.gangadhar07@gmail.com</div>
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                  
                  <a 
                    href="https://wa.me/918050804661?text=Hi Gagan, I would like to discuss a project opportunity with you." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-green-500/10 transition-all duration-300 group border border-green-500/20 hover:border-green-500/40"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle size={20} className="text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+91 8050804661 • Quick chat</div>
                    </div>
                    <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                  
                  <a 
                    href="tel:+918050804661" 
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all duration-300 group border border-accent/20 hover:border-accent/40"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">Call Me</div>
                      <div className="text-sm text-muted-foreground">+91 8050804661</div>
                    </div>
                    <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Follow My Work</h4>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-primary/30 hover:bg-primary hover:text-white transition-smooth"
                      onClick={() => window.open('https://www.linkedin.com/in/gagan-gangadhar/', '_blank')}
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-secondary/30 hover:bg-secondary hover:text-white transition-smooth"
                      onClick={() => window.open('https://github.com/gagan-gangadhar', '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <MapPin size={18} className="text-accent" />
                  <div>
                    <div className="text-sm font-medium">Based in</div>
                    <div className="text-xs text-muted-foreground">Bengaluru, Karnataka, India</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};