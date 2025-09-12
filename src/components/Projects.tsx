import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    category: "Automation",
    duration: "4 months",
    team: "6 members",
    impact: "60% testing efficiency improvement",
    challenges: [
      "Complex API response validation requirements",
      "Integration with existing CI/CD pipeline", 
      "Maintaining test suite across multiple environments"
    ],
    solutions: [
      "Developed robust test framework with Python/Pytest",
      "Created seamless Jenkins integration workflow",
      "Implemented environment-specific configuration management"
    ]
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
    category: "Performance Testing",
    duration: "3 months",
    team: "4 members", 
    impact: "45% performance insight improvement",
    challenges: [
      "Simulating realistic user load patterns",
      "Analyzing complex performance bottlenecks",
      "Providing actionable performance recommendations"
    ],
    solutions: [
      "Implemented comprehensive load testing with Locust",
      "Created detailed performance analysis dashboards", 
      "Developed performance optimization guidelines"
    ]
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
    category: "Data Testing",
    duration: "5 months",
    team: "5 members",
    impact: "80% manual error reduction", 
    challenges: [
      "Complex data validation across multiple sources",
      "Handling large datasets efficiently",
      "Ensuring data integrity across web and database"
    ],
    solutions: [
      "Built automated data verification framework",
      "Implemented efficient data comparison algorithms",
      "Created comprehensive validation reporting system"
    ]
  }
];

export const Projects = () => {
  const navigate = useNavigate();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleViewDetails = (projectIndex: number) => {
    navigate(`/project/${projectIndex}`);
  };

  const displayProjects = showAllProjects ? projects : projects.slice(0, 3);

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
          {displayProjects.map((project, index) => {
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
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {project.role}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-accent/30 text-accent hover:bg-accent/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => handleViewDetails(index)}
                    variant="outline" 
                    className="w-full mt-4 group border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          {!showAllProjects && projects.length > 3 && (
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-white transition-smooth"
              onClick={() => setShowAllProjects(true)}
            >
              View All Projects
              <ExternalLink size={18} className="ml-2" />
            </Button>
          )}
          {showAllProjects && (
            <Button 
              size="lg" 
              variant="outline" 
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth"
              onClick={() => setShowAllProjects(false)}
            >
              Show Less Projects
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};