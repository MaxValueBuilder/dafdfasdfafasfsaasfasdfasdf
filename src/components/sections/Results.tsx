import { TrendingUp, Award, School } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "150+",
    label: "Average Point Increase",
    description: "Across verbal and total scores",
  },
  {
    icon: Award,
    value: "95%",
    label: "Student Satisfaction",
    description: "Would recommend to others",
  },
  {
    icon: School,
    value: "50+",
    label: "Top School Acceptances",
    description: "Including elite boarding schools",
  },
];

const schools = [
  "Phillips Academy (Andover)",
  "Phillips Exeter Academy",
  "Choate Rosemary Hall",
  "The Hotchkiss School",
  "St. Paul's School",
  "Deerfield Academy",
];

export const Results = () => {
  return (
    <section id="results" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Results That Speak{" "}
            <span className="text-primary">for Themselves</span>
          </h2>
          <p className="text-lg text-background/70">
            From first practice test to test day—we close the gap.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-background/5 border border-background/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-background mb-1">{stat.label}</div>
              <div className="text-sm text-background/60">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background/5 border border-background/10">
              <div className="text-sm font-medium text-primary mb-3">BEFORE</div>
              <p className="text-lg text-background/80">
                Struggling with timing and vocabulary. Uncertain about test strategies and scoring.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary/20 border border-primary/30">
              <div className="text-sm font-medium text-primary mb-3">AFTER</div>
              <p className="text-lg text-background">
                Confident test-taker with scores competitive for top schools. Ready for admissions success.
              </p>
            </div>
          </div>
        </div>

        {/* Schools */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-6">ACCEPTANCES TO</p>
          <div className="flex flex-wrap justify-center gap-4">
            {schools.map((school) => (
              <span 
                key={school}
                className="px-4 py-2 rounded-full bg-background/10 text-sm font-medium text-background/90"
              >
                {school}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
