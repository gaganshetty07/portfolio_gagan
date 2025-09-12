import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  TestTube, 
  Database, 
  Users, 
  Cog, 
  TrendingUp,
  CheckCircle,
  Bug
} from "lucide-react";

const skillCategories = [
  {
    title: "Quality Practices",
    icon: CheckCircle,
    description: "Quality assurance methodologies and process improvement",
    skills: [
      { name: "Quality Assurance", level: 95 },
      { name: "FMEA/FTA", level: 90 },
      { name: "SQI Implementation", level: 85 },
      { name: "Process Improvement", level: 88 }
    ],
    tools: ["FMEA", "FTA", "SQI", "Quality Gates", "Root Cause Analysis"]
  },
  {
    title: "Testing & Automation",
    icon: TestTube,
    description: "Comprehensive testing strategies and automation frameworks",
    skills: [
      { name: "API Testing", level: 92 },
      { name: "UI Automation", level: 88 },
      { name: "Performance Testing", level: 85 },
      { name: "Manual Testing", level: 95 }
    ],
    tools: ["Selenium", "Python", "Postman", "Pytest", "Locust", "JMeter"]
  },
  {
    title: "Programming & Tools",
    icon: Code,
    description: "Technical skills and development tools",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Test Frameworks", level: 90 },
      { name: "CI/CD Integration", level: 75 }
    ],
    tools: ["Python", "PyCharm", "Selenium WebDriver", "Jenkins", "Git", "Excel"]
  },
  {
    title: "Agile & Collaboration", 
    icon: Users,
    description: "Agile methodologies and team collaboration",
    skills: [
      { name: "Scrum/Agile", level: 90 },
      { name: "Cross-functional Teams", level: 92 },
      { name: "Customer Advocacy", level: 88 },
      { name: "Sprint Planning", level: 85 }
    ],
    tools: ["JIRA", "Testrail", "Agile Ceremonies", "Backlog Grooming"]
  },
  {
    title: "Defect Management",
    icon: Bug,
    description: "Comprehensive defect tracking and resolution",
    skills: [
      { name: "Bug Tracking", level: 95 },
      { name: "Test Case Development", level: 90 },
      { name: "Functional Testing", level: 92 },
      { name: "Regression Testing", level: 88 }
    ],
    tools: ["JIRA", "Testrail", "Test Execution", "Defect Analysis"]
  },
  {
    title: "Soft Skills",
    icon: TrendingUp,
    description: "Communication and leadership capabilities",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 92 },
      { name: "Leadership", level: 85 },
      { name: "Adaptability", level: 88 }
    ],
    tools: ["Presentations", "Documentation", "Team Leadership", "Mentoring"]
  }
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skill bars with staggered timing
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillSection = document.getElementById('skills');
    if (skillSection) {
      observer.observe(skillSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning quality assurance, automation, and cross-functional collaboration
          </p>
        </div>

        <div className="relative">
          {/* Floating Skills Cloud */}
          <div className="relative min-h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Skills Orbits */}
            <div className="relative w-full max-w-4xl aspect-square">
              {/* Technical Skills - Inner Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                {skillCategories.slice(0, 3).map((category, index) => {
                  const angle = (index * 360) / 3;
                  const radius = 150;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const IconComponent = category.icon;
                  
                  return (
                    <div
                      key={category.title}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-counter-spin"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="group relative">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl px-6 py-4 hover:from-primary/30 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-110 hover:glow-primary">
                          <div className="flex items-center gap-3">
                            <IconComponent size={20} className="text-primary" />
                            <div>
                              <span className="text-sm font-medium text-foreground whitespace-nowrap">{category.title}</span>
                              <div className="text-xs text-muted-foreground">{category.skills.length} skills</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {category.skills.slice(0, 2).map((skill) => (
                              <div key={skill.name} className="w-full bg-primary/20 h-1 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-background border border-primary/30 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          <div>{category.description}</div>
                          <div className="text-muted-foreground mt-1">
                            {category.skills.map(s => s.name).join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Professional Skills - Outer Circle */}
              <div className="absolute inset-0 animate-spin-slow-reverse">
                {skillCategories.slice(3).map((category, index) => {
                  const angle = (index * 360) / 3;
                  const radius = 240;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const IconComponent = category.icon;
                  
                  return (
                    <div
                      key={category.title}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-counter-spin-reverse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${index * 0.15}s`
                      }}
                    >
                      <div className="group relative">
                        <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-xl px-6 py-4 hover:from-accent/30 hover:to-accent/10 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:scale-110 hover:glow-accent">
                          <div className="flex items-center gap-3">
                            <IconComponent size={20} className="text-accent" />
                            <div>
                              <span className="text-sm font-medium text-foreground whitespace-nowrap">{category.title}</span>
                              <div className="text-xs text-muted-foreground">{category.skills.length} skills</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {category.skills.slice(0, 2).map((skill) => (
                              <div key={skill.name} className="w-full bg-accent/20 h-1 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-background border border-accent/30 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          <div>{category.description}</div>
                          <div className="text-muted-foreground mt-1">
                            {category.skills.map(s => s.name).join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm glow-primary">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Skills
                      </div>
                      <div className="text-sm text-muted-foreground">Portfolio</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};