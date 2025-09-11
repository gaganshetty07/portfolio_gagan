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
  Briefcase
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                      Professional Summary
                    </CardTitle>
                    <CardDescription>Quality Analyst • 3+ Years Experience</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-card-foreground leading-relaxed">
                  Experienced Quality Analyst specializing in automation testing, FMEA/FTA implementation, 
                  and agile methodologies. Proven track record of delivering high-quality software solutions 
                  through comprehensive testing strategies and cross-functional collaboration.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-muted-foreground">Specializations</h4>
                    <div className="space-y-2">
                      {[
                        "Quality Assurance & Testing",
                        "Test Automation (Python, Selenium)",
                        "FMEA/FTA Implementation", 
                        "API & Performance Testing"
                      ].map((spec, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-muted-foreground">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Selenium", "JMeter", "JIRA", "Pytest", "Locust"].map((tool, index) => (
                        <Badge key={index} variant="outline" className="border-primary/30 text-primary text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
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
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-smooth"
                    onClick={handleScheduleCall}
                  >
                    <Calendar size={18} className="mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="card-gradient border-border/50 hover:glow-primary transition-smooth group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth flex items-center gap-2">
                  <Send size={20} />
                  Contact Information
                </CardTitle>
                <CardDescription>Get in touch for opportunities</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a href="mailto:gagan.gangadhar07@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group">
                    <Mail size={18} className="text-accent group-hover:text-primary" />
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">gagan.gangadhar07@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="tel:+918050804661" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group">
                    <Phone size={18} className="text-accent group-hover:text-primary" />
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-xs text-muted-foreground">+91 8050804661</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <MapPin size={18} className="text-accent" />
                    <div>
                      <div className="text-sm font-medium">Location</div>
                      <div className="text-xs text-muted-foreground">Bengaluru, Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links & Status */}
            <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                  Professional Status
                </CardTitle>
                <CardDescription>Current availability</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-medium text-accent">Available for Opportunities</div>
                    <div className="text-xs text-muted-foreground">Open to new challenges</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Connect With Me</h4>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary/30 hover:bg-primary hover:text-white transition-smooth flex-1"
                      onClick={() => window.open('https://www.linkedin.com/in/gagan-gangadhar/', '_blank')}
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-secondary/30 hover:bg-secondary hover:text-white transition-smooth flex-1"
                      onClick={() => window.open('https://github.com/gagan-gangadhar', '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};