import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full animate-fade-in">
            Expert SSAT Preparation
          </p>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get Into the Boarding School{" "}
            <span className="text-primary">Your Child Deserves</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert SSAT prep that builds vocabulary, reading, and math skills—and the confidence to score in the top tier. From Hong Kong to the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
              className="border-border hover:border-primary hover:text-primary px-8 py-6 text-lg"
            >
              Explore Programs
            </Button>
          </div>

          {/* Trust badges */}
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Trusted by families targeting{" "}
            <span className="font-medium text-foreground">Andover, Exeter, Choate, Hotchkiss</span>, and other top U.S. boarding schools.
          </p>
        </div>
      </div>
    </section>
  );
};
