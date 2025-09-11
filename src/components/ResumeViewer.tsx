import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { ArrowLeft, Download, Mail, Phone, MapPin } from "lucide-react";

interface ResumeViewerProps {
  onBack: () => void;
}

export const ResumeViewer = ({ onBack }: ResumeViewerProps) => {
  const handleDownload = () => {
    const resumeContent = `
GAGAN S - QUALITY ANALYST
Email: gagan.gangadhar07@gmail.com | Phone: 8050804661
Location: Bengaluru, Karnataka, 560079, India

PROFESSIONAL SUMMARY
A proactive and results-driven Quality Analyst with over 3 plus years of experience in ensuring high-quality 
software delivery. Adept at identifying hidden issues and conducting comprehensive analyses in software 
systems. Experienced in applying quality practices, agile methodologies, and leading critical topics such as 
FMEA/FTA. Expertise in collaborating cross-functionally, delivering customer success, and using automation 
tools like Python, Selenium, and JMeter.

WORK EXPERIENCE

Quality Analyst | AVR Edge Networks Pvt Ltd | July 2021 - Present
• Quality Process Implementation & Monitoring: Ensured highest quality solutions by implementing 
  and monitoring quality processes, including product defect tracking through SQI
• FMEA/FTA Leadership: Led discussions and implementation of Failure Mode and Effects Analysis 
  (FMEA) and Fault Tree Analysis (FTA) within the squad
• Testing & Automation: Designed and executed optimized test cases for manual and automated testing, 
  including API testing, performance testing with Locust and JMeter
• Customer Advocacy & Collaboration: Worked closely with cross-functional teams to ensure product 
  specifications are met while advocating for customer needs
• Agile Practices: Actively participated in agile ceremonies ensuring alignment with agile practices

Project Support Coordinator | Schneider Electric | Nov 2019 - Jun 2021  
• Project Coordination: Managed projects for PAN India operations, ensuring project timelines and quality standards
• Hardware Testing: Gained exposure to hardware testing in Smart UPS and Inverters projects
• Customer Success Management: Effectively managed customer escalations and tracked deliverables

Data Analyst | Wistron ITS | Mar 2019 - Aug 2019
• Defect Reporting & Data Verification: Analysed data and reported defects to development teams
• Collaboration: Regularly interacted with cross-functional teams for defect tracking and resolution

CORE SKILLS
• Quality Practices: Quality assurance methodologies, defect tracking, process improvement (SQI, FMEA, FTA)
• Agile & Scrum: Agile methodologies, Scrum ceremonies, customer advocacy, sprint planning
• Testing & Automation: API Automation (Postman, Pytest), UI Automation (Selenium, Python), 
  Load Testing (Locust, JMeter), Manual Testing, Regression Testing
• Programming & Tools: Python, SQL, PyCharm, Selenium WebDriver, Excel, Jenkins, Git
• Soft Skills: Effective communication, cross-functional collaboration, customer success management

EDUCATION
Bachelor of Engineering - Electrical and Electronics Engineering
Rajarajeswari College of Engineering | Apr 2014 - Apr 2018

LANGUAGES
English (fluent), Hindi (Beginner), Kannada (fluent)
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Gagan_S_Quality_Analyst_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onBack}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
          <Button 
            size="sm" 
            className="hero-gradient text-white hover:glow-primary transition-smooth"
            onClick={handleDownload}
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Resume Content */}
        <Card className="card-gradient border-border/50">
          <CardHeader className="text-center border-b border-border/50 pb-6">
            <div className="space-y-4">
              <CardTitle className="text-3xl font-bold">GAGAN S</CardTitle>
              <p className="text-xl text-accent font-semibold">QUALITY ANALYST</p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>gagan.gangadhar07@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>8050804661</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>Bengaluru, Karnataka, 560079</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-accent">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                A proactive and results-driven Quality Analyst with over 3 plus years of experience in ensuring high-quality 
                software delivery. Adept at identifying hidden issues and conducting comprehensive analyses in software 
                systems. Experienced in applying quality practices, agile methodologies, and leading critical topics such as 
                FMEA/FTA. Expertise in collaborating cross-functionally, delivering customer success, and using automation 
                tools like Python, Selenium, and JMeter.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-xl font-bold mb-6 text-accent">Work Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h4 className="text-lg font-semibold">Quality Analyst</h4>
                    <span className="text-primary font-medium">AVR Edge Networks Pvt Ltd</span>
                    <span className="text-sm text-muted-foreground">July 2021 - Present</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quality Process Implementation & Monitoring: Ensured highest quality solutions</li>
                    <li>• FMEA/FTA Leadership: Led discussions and implementation within squad</li>
                    <li>• Testing & Automation: Designed optimized test cases for manual and automated testing</li>
                    <li>• Customer Advocacy & Collaboration: Worked with cross-functional teams</li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary/30 pl-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h4 className="text-lg font-semibold">Project Support Coordinator</h4>
                    <span className="text-primary font-medium">Schneider Electric</span>
                    <span className="text-sm text-muted-foreground">Nov 2019 - Jun 2021</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Project Coordination: Managed projects for PAN India operations</li>
                    <li>• Hardware Testing: Gained exposure in Smart UPS and Inverters projects</li>
                  </ul>
                </div>

                <div className="border-l-2 border-accent/30 pl-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h4 className="text-lg font-semibold">Data Analyst</h4>
                    <span className="text-primary font-medium">Wistron ITS</span>
                    <span className="text-sm text-muted-foreground">Mar 2019 - Aug 2019</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Defect Reporting & Data Verification: Analysed data and reported defects</li>
                    <li>• Collaboration: Interacted with cross-functional teams for quality improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-accent">Education</h3>
              <div className="border-l-2 border-primary/30 pl-6">
                <h4 className="text-lg font-semibold">Bachelor of Engineering</h4>
                <p className="text-primary font-medium">Electrical and Electronics Engineering</p>
                <p className="text-sm text-muted-foreground">Rajarajeswari College of Engineering | Apr 2014 - Apr 2018</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};