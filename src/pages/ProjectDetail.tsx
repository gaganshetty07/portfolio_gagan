import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "API Automation Test Suite Development",
    description: "Developed comprehensive automated test cases to validate API responses and integrated Jenkins CI/CD pipelines for continuous testing. Enhanced testing efficiency and reliability through automation.",
    icon: "Code",
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
    icon: "TrendingUp",
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
    icon: "Database",
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

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || "0");
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate("/")}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>
          <Badge variant="outline" className="border-accent/30 text-accent">
            {project.category}
          </Badge>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-primary" size={20} />
                  <h3 className="font-semibold">Duration</h3>
                </div>
                <p className="text-muted-foreground">{project.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-primary" size={20} />
                  <h3 className="font-semibold">Team Size</h3>
                </div>
                <p className="text-muted-foreground">{project.team}</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-primary" size={20} />
                  <h3 className="font-semibold">Impact</h3>
                </div>
                <p className="text-muted-foreground">{project.impact}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-accent" size={20} />
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-card-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Challenges Faced</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Solutions Implemented</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
