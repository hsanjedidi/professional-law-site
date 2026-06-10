import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t("nav_home"), to: "/" },
    { label: t("nav_about"), to: "/about" },
    { label: t("nav_services"), to: "/services" },
    { label: t("nav_contact"), to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-auto h-48  transition-all duration-300">
              <img
                src={scrolled ? "/log1.png" : "/log2.png"}
                alt="Logo Me. Yosr Ben Attia"
                className="h-full w-auto object-contain transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold  tracking-wide transition-colors hover:text-accent ${
                  isActive(link.to)
                    ? "text-accent"
                    : scrolled
                      ? "text-foreground/80"
                      : "text-secondary/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground rounded-md text-sm font-semibold transition-all hover:shadow-gold hover:scale-105"
            >
              {t("nav_consultation")}
            </Link>
            <button
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-secondary"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            // CHANGEMENT : Fond sombre "Navy", flou prononcé et bordure d'accentuation
            className="lg:hidden absolute top-full inset-x-0 bg-navy-dark bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-navy/40 via-navy-dark to-navy-dark backdrop-blur-xl border-b border-accent/20 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-start py-4 px-4 rounded-sm font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? "bg-accent/10 text-accent translate-x-2 rtl:-translate-x-2"
                      : "text-secondary/80 hover:text-accent hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent my-4" />

              <Link
                to="/contact"
                className="py-4 px-4 bg-accent text-navy-dark rounded-sm font-bold text-center shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                {t("nav_consultation")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
