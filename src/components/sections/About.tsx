import { Award, Globe, Heart, MessageCircle } from "lucide-react";

const highlights = [
  {
    icon: Award,
    text: "Focus on vocabulary, reading, and math—all SSAT sections",
  },
  {
    icon: Globe,
    text: "Experience with Hong Kong and international school students",
  },
  {
    icon: Heart,
    text: "Mentorship that extends beyond the test",
  },
  {
    icon: MessageCircle,
    text: "Direct, ongoing communication with parents",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Expert Guidance.{" "}
                <span className="text-primary">Personal Commitment.</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  Brandon Na is dedicated to helping elementary and middle school students reach their potential on the SSAT and in the admissions process.
                </p>
                <p>
                  With experience across international contexts—including Hong Kong and Korea—he understands what top schools look for and how to prepare students who are aiming high.
                </p>
                <p>
                  Beyond scores: Brandon cares about mindset, motivation, and long-term growth. Families and students value his clarity, responsiveness, and genuine interest in their success.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary/10 rounded-3xl" />
                
                {/* Main visual container */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-heading text-5xl font-bold text-primary">BN</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Brandon Na
                    </h3>
                    <p className="text-muted-foreground">
                      SSAT Prep Specialist
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>Hong Kong • International</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
