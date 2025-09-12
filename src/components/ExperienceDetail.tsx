import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, MapPin, CheckCircle, Users, Target, Award } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
  achievements?: string[];
  teamSize?: string;
  technologies?: string[];
}

interface ExperienceDetailProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceDetail = ({ experience, isOpen, onClose }: ExperienceDetailProps) => {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {experience.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Company Info */}
          <Card className="card-gradient border-border/50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-primary" size={20} />
                    <span className="text-lg font-semibold">{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-accent" size={16} />
                    <span className="text-muted-foreground">{experience.location}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-accent" size={16} />
                    <span className="text-muted-foreground">{experience.period}</span>
                  </div>
                  <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                    {experience.type}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <Card className="card-gradient border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                Key Responsibilities & Achievements
              </h3>
              <div className="space-y-4">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-card-foreground leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills & Technologies */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-accent" size={18} />
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {experience.technologies && (
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="text-accent" size={18} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-accent/30 text-accent hover:bg-accent/20 hover:scale-105 transition-all cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Additional Info */}
          {(experience.teamSize || experience.achievements) && (
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="text-primary" size={18} />
                  Additional Information
                </h3>
                <div className="space-y-2">
                  {experience.teamSize && (
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Team Size:</span> {experience.teamSize}
                    </p>
                  )}
                  {experience.achievements && experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2">
                      <Award className="text-accent mt-1 flex-shrink-0" size={16} />
                      <p className="text-card-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};