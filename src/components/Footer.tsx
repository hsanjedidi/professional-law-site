import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Scale } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  const legalLinks = [
    t("footer_privacy"),
    t("footer_terms"),
    t("footer_mentions"),
  ];

  return (
    <footer className="bg-gradient-navy border-t border-secondary/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent/20 flex items-center justify-center">
                  <Scale className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-lg font-heading font-bold text-secondary">
                    Cabinet
                  </span>
                  <span className="text-gradient-gold text-lg font-heading font-bold ms-1">
                    Juridique
                  </span>
                </div>
              </div>
              <p className="text-secondary/50 text-sm leading-relaxed">
                {t("footer_description")}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-secondary font-heading font-semibold mb-4">
                {t("footer_links")}
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block text-sm text-secondary/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-secondary font-heading font-semibold mb-4">
                {t("footer_legal")}
              </h4>
              <div className="space-y-3">
                {legalLinks.map((link) => (
                  <button
                    key={link}
                    className="block text-sm text-secondary/50 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary/40">
              © {new Date().getFullYear()} Cabinet Juridique. {t("footer_rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
