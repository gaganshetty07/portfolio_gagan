import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { ArrowLeft, Download, Mail, Phone, MapPin } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeViewerProps {
  onBack: () => void;
}

export const ResumeViewer = ({ onBack }: ResumeViewerProps) => {
  const handleDownload = () => {
    // Use iframe approach for complete isolation
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = '-10000px';
    iframe.style.top = '-10000px';
    iframe.style.width = '210mm';
    iframe.style.height = '297mm';
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    iframe.style.pointerEvents = 'none';
    iframe.style.zIndex = '-9999';
    
    document.body.appendChild(iframe);
    
    iframe.onload = async () => {
      try {
        // Wait for iframe to fully load
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) throw new Error('Cannot access iframe content');
        
        // Generate canvas from iframe content
        const canvas = await html2canvas(iframeDoc.body, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });
        
        // Create PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        
        let position = 0;
        
        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        // Add additional pages if needed
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        
        // Download the PDF
        pdf.save('Gagan_S_Resume.pdf');
        
        // Clean up
        document.body.removeChild(iframe);
        
      } catch (error) {
        console.error('PDF generation failed:', error);
        // Clean up
        document.body.removeChild(iframe);
        // Fallback to print method
        const printWindow = window.open('/resume.html', '_blank');
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
          }, 1000);
        };
      }
    };
    
    iframe.src = '/resume.html';
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
                <a href="mailto:gaganshetty1996@gmail.com?subject=Resume Inquiry&body=Hi Gagan, I would like to discuss opportunities with you." className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  <span>Click to email</span>
                </a>
                <a href="https://wa.me/918050804661?text=Hi Gagan, I would like to discuss opportunities with you." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" />
                  <span>Click to WhatsApp</span>
                </a>
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