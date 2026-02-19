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

  // Close mobile menu on route change
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
          : "bg-navy-dark/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-gradient-navy flex items-center justify-center shadow-gold border border-accent/20">
              <Scale className="h-5 w-5 text-accent" />
            </div>
            <div>
              <span className={`text-lg font-heading font-bold ${scrolled ? "text-foreground" : "text-secondary"}`}>
                Cabinet
              </span>
              <span className="text-gradient-gold text-lg font-heading font-bold ms-1">
                Juridique
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-accent ${
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
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-start py-3 px-4 rounded-md font-medium transition-colors ${
                    isActive(link.to)
                      ? "bg-accent/10 text-accent"
                      : "text-foreground/80 hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 py-3 px-4 bg-accent text-accent-foreground rounded-md font-semibold text-center"
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
