import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ExperienceDetail } from "./ExperienceDetail";

const experiences = [
  {
    title: "Quality Analyst",
    company: "AVR Edge Networks Pvt Ltd",
    location: "Bengaluru",
    period: "July 2021 - Present",
    type: "Full-time",
    highlights: [
      "Quality Process Implementation & Monitoring: Ensured highest quality solutions by implementing and monitoring quality processes, including product defect tracking through SQI and other key quality indicators.",
      "FMEA/FTA Leadership: Led discussions and implementation of Failure Mode and Effects Analysis (FMEA) and Fault Tree Analysis (FTA) within the squad to proactively identify risks and improve product reliability.",
      "Testing & Automation: Designed and executed optimized test cases for manual and automated testing, including API testing, performance testing with Locust and JMeter, and regression testing using Selenium.",
      "Customer Advocacy & Collaboration: Worked closely with cross-functional teams, including Product Managers and Developers, to ensure product specifications are met or exceeded.",
      "Agile Practices: Actively participated in agile ceremonies such as sprint planning, retrospectives, and daily standups, ensuring alignment with agile practices and continuous quality improvement.",
      "Bug Tracking & Reporting: Logged and tracked defects using JIRA, ensuring timely resolution and communication across teams."
    ],
    skills: ["Python", "Selenium", "JMeter", "FMEA", "FTA", "JIRA", "API Testing"],
    achievements: [
      "Reduced product defects by 40% through implementation of SQI processes",
      "Led FMEA sessions that identified 25+ critical risk scenarios",
      "Automated 80% of regression test cases using Selenium framework"
    ],
    teamSize: "8-10 cross-functional team members",
    technologies: ["Python", "Selenium WebDriver", "Pytest", "Locust", "JMeter", "JIRA", "Jenkins", "Git"]
  },
  {
    title: "Project Support Coordinator",
    company: "Schneider Electric",
    location: "Bengaluru", 
    period: "Nov 2019 - Jun 2021",
    type: "Full-time",
    highlights: [
      "Project Coordination: Managed projects for PAN India operations, ensuring project timelines, deliverables, and quality standards were met.",
      "Hardware Testing: Gained exposure to hardware testing in projects like Smart UPS and Inverters, contributing to multi-domain expertise in quality assurance.",
      "Customer Success Management: Effectively managed customer escalations and tracked deliverables to enhance customer satisfaction and project success."
    ],
    skills: ["Project Management", "Hardware Testing", "Customer Success", "Quality Assurance"],
    achievements: [
      "Successfully managed 15+ PAN India projects with 100% on-time delivery",
      "Reduced customer escalations by 35% through proactive communication",
      "Implemented quality checkpoints that improved project success rate by 20%"
    ],
    teamSize: "5-12 project team members",
    technologies: ["MS Project", "Excel", "PowerBI", "SharePoint", "Quality Management Systems"]
  },
  {
    title: "Data Analyst", 
    company: "Wistron ITS",
    location: "Bengaluru",
    period: "Mar 2019 - Aug 2019",
    type: "Contract",
    highlights: [
      "Defect Reporting & Data Verification: Analysed data and reported defects to development teams, ensuring proper functionality of software through data verification and validation.",
      "Collaboration with Development Teams: Regularly interacted with cross-functional teams to ensure defect tracking, resolution, and thorough testing, resulting in improved software quality."
    ],
    skills: ["Data Analysis", "Defect Tracking", "Software Testing", "Cross-functional Collaboration"],
    achievements: [
      "Identified and reported 200+ defects leading to 95% improvement in data accuracy",
      "Developed automated data verification scripts reducing manual effort by 60%"
    ],
    teamSize: "3-5 development team members",
    technologies: ["Python", "SQL", "Excel", "Data Validation Tools", "Bug Tracking Systems"]
  }
];

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleViewDetails = (experience) => {
    setSelectedExperience(experience);
    setIsDetailOpen(true);
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through quality assurance, testing automation, and cross-functional collaboration
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full glow-primary hidden md:block" style={{ top: '2rem' }}></div>
                
                {/* Experience Card */}
                <div className="md:ml-16">
                  <Card className="card-gradient border-border/50 hover:glow-accent transition-smooth group">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl group-hover:text-accent transition-smooth">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-lg mt-1">
                            <Building2 size={16} className="text-primary" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-accent" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-accent" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.slice(0, 5).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-smooth text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {exp.skills.length > 5 && (
                          <Badge variant="outline" className="text-xs text-muted-foreground">
                            +{exp.skills.length - 5} more
                          </Badge>
                        )}
                      </div>
                      
                      <Button 
                        onClick={() => handleViewDetails(exp)}
                        variant="outline" 
                        className="w-full group border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
                      >
                        <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ExperienceDetail 
          experience={selectedExperience}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
        />
      </div>
    </section>
  );
};