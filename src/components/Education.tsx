import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electrical and Electronics Engineering", 
    institution: "Rajarajeswari College of Engineering",
    period: "Apr 2014 - Apr 2018",
    location: "Bengaluru, Karnataka",
    type: "Bachelor's Degree",
    highlights: [
      "Comprehensive engineering curriculum covering electronics, circuits, and systems",
      "Strong foundation in analytical thinking and problem-solving",
      "Project-based learning with practical applications",
      "Technical communication and presentation skills"
    ]
  },
  {
    degree: "Pre-University",
    field: "Physics, Chemistry, Mathematics, Biology (PCMB)",
    institution: "Karnataka Pre-University Board", 
    period: "Jun 2012 - Dec 2014",
    location: "Karnataka",
    gpa: "64%",
    type: "Higher Secondary",
    highlights: [
      "Strong foundation in science and mathematics",
      "Analytical and logical reasoning development",
      "Research methodology and scientific approach",
      "Academic excellence in core subjects"
    ]
  }
];

const languages = [
  { name: "English", proficiency: "Fluent", level: 95 },
  { name: "Kannada", proficiency: "Fluent", level: 95 },
  { name: "Hindi", proficiency: "Beginner", level: 40 }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Languages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and linguistic capabilities supporting professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                      <GraduationCap size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                        <div>
                          <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-primary mt-1">
                            {edu.field}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-accent/30 text-accent text-xs w-fit">
                          {edu.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <BookOpen size={14} className="text-accent" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-accent" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-accent" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-2">
                            <Award size={14} className="text-accent" />
                            <span>Grade: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Learning Areas</h4>
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-card-foreground leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages Card */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group animate-fade-in h-fit" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-smooth">
                    <Award size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                    Languages
                  </CardTitle>
                </div>
                <CardDescription>
                  Multilingual communication abilities
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{language.name}</span>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                        {language.proficiency}
                      </Badge>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="skill-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="card-gradient border-border/50 hover:glow-primary transition-smooth group animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  Academic Excellence
                </CardTitle>
                <CardDescription className="text-sm">
                  Consistent performance throughout academic journey
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-xs text-muted-foreground">Years B.E.</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-accent">3</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Engineering background provides strong analytical foundation for quality assurance methodologies
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