
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Available for Projects</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="block">GAGAN S</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Software Test Engineer
                </span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experienced Product Quality Engineer with 4+ years in ensuring software reliability and performance.
              Strong background in designing test strategies, analyzing complex systems, and driving data-driven quality improvements. 
              Passionate about leveraging automation and modern engineering practices to deliver scalable, high-quality solutions.
              </p>
              
              {/* Experience Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-muted-foreground">Test Coverage</div>
                </div>
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};