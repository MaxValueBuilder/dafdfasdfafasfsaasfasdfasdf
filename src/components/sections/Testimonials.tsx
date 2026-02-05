import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "[Our child] got into Andover, Exeter, Choate and Hotchkiss! Thank you for your guidance and preparation along this journey, be it informationally and psychologically.",
    author: "Parent of a Hong Kong–based student",
    highlight: "Andover, Exeter, Choate, Hotchkiss",
  },
  {
    quote: "Brandon is an amazing teacher who is passionate and cares for his students. Our son achieved a very high SSAT score under Brandon's tutelage in a short period—his method really works.",
    author: "Parent of a Hong Kong International School student",
    highlight: "Top 10 boarding school focus",
  },
  {
    quote: "It's rare to come across a teacher as good as Brandon. He has been an excellent teacher and has consistently thought of ways to help me improve both in and out of class.",
    author: "J. Siu, Hong Kong",
    highlight: "Exceptional teaching",
  },
  {
    quote: "He gave really good advice on English essays. Even after I quit the academy, he was still willing to give feedback by email. The past 6–7 years proved he is responsible and caring.",
    author: "A. Lee, Seoul National University",
    highlight: "Long-term mentorship",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Families{" "}
            <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real families pursuing their boarding school dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-medium">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
