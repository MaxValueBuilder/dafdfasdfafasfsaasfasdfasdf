import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We discuss your goals, test dates, and your child's current level. No pressure—just a clear picture.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Custom Plan",
    description: "A tailored plan: which sections to prioritize, how many sessions, and a timeline to test day.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Focused Prep",
    description: "Structured sessions on vocabulary, reading, and math, with practice tests and homework that fit your schedule.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Test Day Ready",
    description: "Your child goes in with strategies, practice, and confidence. We're here until they cross the finish line.",
  },
];

export const HowItWorks = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Work{" "}
            <span className="text-primary">With You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear, proven process to get your child ready for the SSAT.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.title} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-full h-0.5 bg-border" />
                )}
                
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/25"
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
