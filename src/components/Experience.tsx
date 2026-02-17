import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ExperienceDetail } from "./ExperienceDetail";

const experiences = [
  {
    title: "Product Quality Engineer",
    company: "Phenom",
    location: "Bengaluru",
    period: "Jan 2025 - Present",
    type: "Full-time",
    summary: "Advanced software testing specialist focusing on test automation frameworks with Selenium and Playwright, API testing with Postman, performance testing using Locust, and comprehensive database testing with SQL and pytest scripts. Implementing CI/CD pipelines with Jenkins for automated testing workflows.",
    highlights: [
      "Test Automation Framework Development: Built comprehensive test automation frameworks using Selenium WebDriver and Playwright for web applications, achieving 90% test coverage across critical user journeys.",
      "API Testing & Integration: Designed and executed comprehensive API test suites using Postman and custom Python scripts with pytest, covering REST endpoints with automated validation.",
      "Performance Testing & Load Analysis: Conducted performance testing using Locust to identify bottlenecks, optimize response times, and ensure system scalability under high load conditions.",
      "CI/CD Pipeline Integration: Integrated automated testing into CI/CD pipelines using Jenkins, enabling continuous testing and early defect detection in the development lifecycle.",
      "Cross-browser Testing: Executed comprehensive testing across multiple browsers (Chrome, Firefox, Safari, Edge) using Selenium and Playwright for consistent user experience.",
      "Database Testing & Validation: Designed and executed comprehensive database testing using SQL queries, pytest scripts, and Locust for database performance testing, ensuring data integrity and optimal database performance under load conditions.",
    ],
    skills: ["Selenium", "Playwright", "Postman", "Locust", "Jenkins", "Python", "API Testing", "SQL", "Database Testing"],
    achievements: [
      "Reduced test execution time by 60% through parallel test execution and optimized test suites",
      "Achieved 95% API test coverage across 200+ endpoints with automated regression testing",
      "Implemented performance testing that identified and resolved 15+ critical performance bottlenecks",
      "Developed comprehensive database testing framework using SQL and pytest, ensuring 100% data integrity across all test scenarios"
    ],
    teamSize: "12-15 cross-functional team members",
    technologies: ["Selenium WebDriver", "Playwright", "Postman", "Locust", "pytest", "Jenkins", "REST APIs", "Python", "SQL", "Database Testing", "MySQL", "PostgreSQL"]
  },
  {
    title: "Quality Analyst",
    company: "AVR Edge Networks Pvt Ltd (Acquired by Phenom)",
    location: "Bengaluru",
    period: "July 2021 - Dec 2024",
    type: "Full-time",
    summary: "Led quality assurance initiatives with focus on process improvement, automation, and cross-functional collaboration. Drove 40% reduction in defects through SQI implementation and FMEA leadership before company acquisition.",
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
    summary: "Managed PAN India projects with focus on hardware testing and customer success. Achieved 100% on-time delivery across 15+ projects while reducing escalations by 35%.",
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
    summary: "Specialized in data analysis and defect reporting, improving data accuracy by 95% through automated verification scripts and cross-functional collaboration.",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through quality assurance, testing automation, and cross-functional collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:shadow-primary/10 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-background to-muted/20"
              onClick={() => handleViewDetails(exp)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-1">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base font-medium">
                      <Building2 size={16} className="text-accent" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {exp.summary}
                </p>
                
                {/* Period and Location */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </div>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {exp.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{exp.skills.length - 4}
                    </Badge>
                  )}
                </div>
                
                {/* Interactive Button */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <ExternalLink size={14} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Full Details
                </Button>
              </CardContent>
            </Card>
          ))}
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