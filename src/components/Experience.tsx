import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

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
    skills: ["Python", "Selenium", "JMeter", "FMEA", "FTA", "JIRA", "API Testing"]
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
    skills: ["Project Management", "Hardware Testing", "Customer Success", "Quality Assurance"]
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
    skills: ["Data Analysis", "Defect Tracking", "Software Testing", "Cross-functional Collaboration"]
  }
];

export const Experience = () => {
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
                    
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-card-foreground leading-relaxed">{highlight}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-smooth">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};