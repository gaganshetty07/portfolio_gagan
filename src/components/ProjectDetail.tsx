import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle } from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    role: string;
    category: string;
    duration?: string;
    team?: string;
    impact?: string;
    challenges?: string[];
    solutions?: string[];
  };
  onBack: () => void;
}

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onBack}
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
                <p className="text-muted-foreground">{project.duration || "3 months"}</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-primary" size={20} />
                  <h3 className="font-semibold">Team Size</h3>
                </div>
                <p className="text-muted-foreground">{project.team || "5 members"}</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-primary" size={20} />
                  <h3 className="font-semibold">Impact</h3>
                </div>
                <p className="text-muted-foreground">{project.impact || "60% efficiency improvement"}</p>
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
                  {(project.challenges || [
                    "Complex API response validation requirements",
                    "Integration with existing CI/CD pipeline",
                    "Performance optimization under load"
                  ]).map((challenge, index) => (
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
                  {(project.solutions || [
                    "Developed robust test framework with Python/Pytest",
                    "Created seamless Jenkins integration workflow",
                    "Implemented comprehensive performance monitoring"
                  ]).map((solution, index) => (
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