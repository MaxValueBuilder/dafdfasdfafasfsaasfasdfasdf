import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Book a <span className="text-primary">Free Consultation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your goals and we'll create a personalized SSAT prep plan for your child. No commitment required.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-8">
                        We've received your message and will get back to you within 24 hours. We look forward to helping your child succeed.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary-light"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and we'll reach out to schedule your free consultation.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" placeholder="Smith" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+852 1234 5678" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="studentGrade">Student's Current Grade</Label>
                          <Input id="studentGrade" placeholder="e.g. Grade 7" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="targetSchools">Target Schools (if any)</Label>
                          <Input id="targetSchools" placeholder="e.g. Andover, Exeter, Choate" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your child's goals, any upcoming test dates, and how we can help..."
                            className="min-h-[120px]"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isLoading}
                          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-6 text-lg shadow-lg shadow-primary/25"
                        >
                          {isLoading ? "Sending..." : "Book a Free Consultation"}
                          {!isLoading && <Send className="ml-2 h-5 w-5" />}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Why Book a Consultation?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>Personalized assessment of your child's current level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>Clear action plan tailored to your target schools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>Expert advice on timing and test strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>No commitment required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground font-medium">contact@ssatmaster.com</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground font-medium">Hong Kong</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-light rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We typically respond within 24 hours. For urgent inquiries, please email us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
