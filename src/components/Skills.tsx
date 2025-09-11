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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Skill Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Tools & Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary/20 transition-smooth">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};