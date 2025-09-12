import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  TestTube, 
  Users, 
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
      { name: "Selenium WebDriver", level: 88 },
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
    tools: ["Python", "PyCharm", "Selenium WebDriver", "Jenkins", "Git", "Excel", "JIRA"]
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
    title: "AI & Innovation",
    icon: TrendingUp,
    description: "Prompt engineering and AI-assisted development",
    skills: [
      { name: "Prompt Engineering", level: 88 },
      { name: "AI Testing Tools", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 92 }
    ],
    tools: ["ChatGPT", "Claude", "AI Testing", "Vibe Coding", "Innovation"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning quality assurance, automation, and cross-functional collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription className="text-sm">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Skills with Progress Bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Tools */}
                  <div className="pt-2 border-t border-border/50">
                    <div className="flex flex-wrap gap-1">
                      {category.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">
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