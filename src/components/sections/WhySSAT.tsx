import { GraduationCap, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Gateway to Top Schools",
    description: "The SSAT is the standard for admission to leading U.S. private and boarding schools.",
  },
  {
    icon: Target,
    title: "Signals Readiness",
    description: "Strong scores signal academic readiness and open doors to elite institutions.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Edge",
    description: "Structured preparation helps students show their best under time pressure.",
  },
];

export const WhySSAT = () => {
  return (
    <section id="why-ssat" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why the SSAT Is Your{" "}
            <span className="text-primary">Gateway to Top Schools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The Secondary School Admissions Test is the standard for admission to leading U.S. private and boarding schools. Strong scores signal readiness—and open doors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            The exam is demanding: vocabulary, critical reading, and quantitative reasoning under time pressure. Most students need structured preparation to show their best.{" "}
            <span className="text-foreground font-medium">
              We help students build the skills and strategies to perform at the level top schools expect.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
