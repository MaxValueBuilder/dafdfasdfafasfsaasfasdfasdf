import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "One-on-One Tutoring", href: "#programs" },
    { label: "Small-Group Sessions", href: "#programs" },
    { label: "Intensive Boot Camp", href: "#programs" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}>
              <span className="font-heading text-2xl font-bold">
                SSAT <span className="text-primary">Master</span>
              </span>
            </a>
            <p className="mt-4 text-background/60 text-sm">
              Expert SSAT preparation helping students achieve their top boarding school dreams.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@ssatmaster.com</span>
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} SSAT Master. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/40 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/40 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
