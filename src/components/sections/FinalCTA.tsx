import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-hover relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Unlock Your Child's SSAT Potential?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Book a consultation and get a clear path to the scores—and schools—you're aiming for.
          </p>
          
          <Button 
            onClick={() => navigate("/contact")}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-xl"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              ✓ No commitment required
            </span>
            <span className="flex items-center gap-2">
              ✓ Personalized assessment
            </span>
            <span className="flex items-center gap-2">
              ✓ Clear action plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
