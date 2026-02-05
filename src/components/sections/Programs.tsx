import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Zap, Check } from "lucide-react";

const programs = [
  {
    icon: User,
    title: "One-on-One Tutoring",
    description: "Personalized attention for maximum results",
    features: [
      "Tailored to your child's strengths and gaps",
      "Vocabulary, reading, and math—all sections covered",
      "Flexible scheduling for busy families",
      "Ideal for students aiming at top 10–25 schools",
    ],
    highlighted: true,
  },
  {
    icon: Users,
    title: "Small-Group Sessions",
    description: "Collaborative learning environment",
    features: [
      "Focused practice in a small, motivated group",
      "Peer discussion and timed practice",
      "Cost-effective without sacrificing quality",
      "Build confidence through collaboration",
    ],
    highlighted: false,
  },
  {
    icon: Zap,
    title: "Intensive Boot Camp",
    description: "Accelerated preparation for upcoming tests",
    features: [
      "Short, focused burst before a test date",
      "Full-length practice tests and targeted review",
      "Best when you have a clear deadline",
      "Maximum impact in minimum time",
    ],
    highlighted: false,
  },
];

export const Programs = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SSAT Prep Built Around{" "}
            <span className="text-primary">Your Student</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible formats. One goal: your child's best score.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                program.highlighted 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {program.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              )}
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  program.highlighted ? "bg-primary text-primary-foreground" : "bg-primary-light"
                }`}>
                  <program.icon className={`w-6 h-6 ${program.highlighted ? "" : "text-primary"}`} />
                </div>
                <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  variant={program.highlighted ? "default" : "outline"}
                  className={`w-full ${
                    program.highlighted 
                      ? "bg-primary hover:bg-primary-hover" 
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
