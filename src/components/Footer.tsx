import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("nav_home"), to: "/" },
    { label: t("nav_about"), to: "/about" },
    { label: t("nav_services"), to: "/services" },
    { label: t("nav_contact"), to: "/contact" },
  ];

  // On transforme les strings en objets avec le chemin vers les PDF
  // Assurez-vous que ces fichiers existent dans votre dossier /public/pdf/
  const legalLinks = [
    { label: t("footer_privacy"), href: "/pdf/Politique_Confidentialite.pdf" },
    { label: t("footer_terms"), href: "/pdf/Conditions_Generales.pdf" },
    { label: t("footer_mentions"), href: "/pdf/Mentions_Legales.pdf" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-accent/20 bg-[#0a0f1a]">
      {/* ── Background Luxe (Overlay) ── */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(184,146,64,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* ── Logo centré avec halo ── */}
          <div className="flex justify-center mb-12 relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full transform scale-150"></div>
            <Link
              to="/"
              className="relative z-10 transition-transform duration-500 hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-48 md:h-64 w-auto object-contain brightness-110"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic font-light">
                "{t("footer_description")}"
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+21671840381"
                  className="flex items-center justify-center md:justify-start gap-3 text-secondary/70 hover:text-accent transition-all duration-300 group text-sm"
                >
                  <span className="p-2 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                  </span>
                  <span dir="ltr" className="inline-block font-sans">
                    (+216) 71 840 381
                  </span>
                </a>
                <a
                  href="mailto:yosr.benattia@gnet.tn"
                  className="flex items-center justify-center md:justify-start gap-3 text-secondary/70 hover:text-accent transition-all duration-300 group text-sm"
                >
                  <span className="p-2 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                  </span>
                  yosr.benattia@gnet.tn
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-accent font-heading font-medium tracking-widest uppercase text-xs mb-8">
                {t("footer_links")}
              </h4>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-secondary/60 hover:text-white transition-colors relative group w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links (PDF Section) */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-accent font-heading font-medium tracking-widest uppercase text-xs mb-8">
                {t("footer_legal")}
              </h4>
              <div className="space-y-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-secondary/60 hover:text-white transition-colors text-left group"
                  >
                    <span className="border-b border-transparent group-hover:border-accent transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-20 pt-8 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary/40">
              © {new Date().getFullYear()} Me. Yosr Ben Attia.{" "}
              {t("footer_rights")} by{" "}
              <a
                href="https://technoshark.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                Techno Shark
              </a>{" "}
              with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
