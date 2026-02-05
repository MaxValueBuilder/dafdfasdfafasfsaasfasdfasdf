import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the SSAT?",
    answer: "The Secondary School Admissions Test is used by many U.S. private and boarding schools for admission. It has Verbal, Reading, and Quantitative sections (plus a Writing sample at some levels).",
  },
  {
    question: "When should my child start preparing?",
    answer: "Typically 3–6 months before your target test date. We can adjust based on current level and goals during a consultation.",
  },
  {
    question: "Do you work with students outside Hong Kong?",
    answer: "Yes. We work with families internationally (e.g. Korea, elsewhere in Asia) via online sessions.",
  },
  {
    question: "What do you cover in sessions?",
    answer: "Vocabulary, critical reading, and math—aligned to the Upper and Middle Level SSAT. We also use full-length practice tests and strategy work.",
  },
  {
    question: "How do I get started?",
    answer: "Book a consultation. We'll discuss your goals, test dates, and a plan that fits your family.",
  },
  {
    question: "Where can I find SSAT test dates?",
    answer: "You can find official dates on the SSAT website; we also share relevant dates and planning tips in our consultations.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about SSAT preparation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
