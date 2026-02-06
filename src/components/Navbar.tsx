import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const { t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-gradient-navy flex items-center justify-center shadow-gold">
              <Scale className="h-5 w-5 text-gold" />
            </div>
            <div>
              <span className={`text-lg font-heading font-bold ${scrolled ? "text-foreground" : "text-card-foreground"}`}>
                Cabinet
              </span>
              <span className="text-gradient-gold text-lg font-heading font-bold ms-1">
                Juridique
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/70" : "text-card-foreground/80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground rounded-md text-sm font-semibold transition-all hover:shadow-gold hover:scale-105"
            >
              {t("nav_consultation")}
            </button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-start py-3 px-4 rounded-md text-foreground/80 hover:bg-accent/10 hover:text-accent font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 py-3 px-4 bg-accent text-accent-foreground rounded-md font-semibold text-center"
              >
                {t("nav_consultation")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
