import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, TestTube, Database, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "API Automation Test Suite Development",
    description: "Developed comprehensive automated test cases to validate API responses and integrated Jenkins CI/CD pipelines for continuous testing. Enhanced testing efficiency and reliability through automation.",
    icon: Code,
    technologies: ["Python", "Pytest", "Jenkins", "CI/CD", "API Testing"],
    highlights: [
      "Automated API response validation",
      "Jenkins CI/CD pipeline integration",
      "Continuous testing implementation",
      "Improved testing efficiency by 60%"
    ],
    role: "QA Engineer",
    category: "Automation"
  },
  {
    title: "Load Testing Using Locust Framework",
    description: "Performed comprehensive load testing on APIs to evaluate response and throughput times, providing critical insights into system performance under varying loads and stress conditions.",
    icon: TrendingUp,
    technologies: ["Python", "Locust", "Performance Testing", "API Testing"],
    highlights: [
      "API load testing implementation",
      "Response time analysis",
      "Throughput evaluation",
      "System performance insights"
    ],
    role: "QA Engineer", 
    category: "Performance Testing"
  },
  {
    title: "Data Verification Framework",
    description: "Developed an automated framework for data verification between web elements and databases, significantly reducing manual errors and improving validation process efficiency.",
    icon: Database,
    technologies: ["Python", "Selenium WebDriver", "Database Testing", "Automation"],
    highlights: [
      "Automated data verification process",
      "Web-to-database validation",
      "Manual error reduction",
      "Process efficiency improvement"
    ],
    role: "QA Engineer",
    category: "Data Testing"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing key projects in automation, performance testing, and data verification
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in flex flex-col h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                      <IconComponent size={28} className="text-primary" />
                    </div>
                    <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-smooth leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Role */}
                    <div className="flex items-center gap-2">
                      <TestTube size={16} className="text-accent" />
                      <span className="text-sm font-medium">{project.role}</span>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground">Key Achievements</h4>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex gap-2 items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-card-foreground leading-relaxed">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-secondary/50 text-secondary-foreground border-secondary/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth flex-1">
                      <ExternalLink size={14} className="mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent transition-smooth">
                      <Github size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white transition-smooth">
            View All Projects
            <ExternalLink size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};