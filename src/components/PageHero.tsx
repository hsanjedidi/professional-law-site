import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  titleKey: "page_hero_about_title" | "page_hero_services_title" | "page_hero_contact_title";
  subtitleKey: "page_hero_about_subtitle" | "page_hero_services_subtitle" | "page_hero_contact_subtitle";
  breadcrumbLabel: string;
}

const PageHero: React.FC<PageHeroProps> = ({ titleKey, subtitleKey, breadcrumbLabel }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[42vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-92" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/60" />
      </div>

      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="absolute end-0 top-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-accent/20 to-transparent" />
      </div>
      <div className="absolute top-16 end-16 w-40 h-40 rounded-full border border-accent/10" />
      <div className="absolute top-8 end-8 w-64 h-64 rounded-full border border-accent/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-14 pt-32">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-secondary/50 mb-6"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Home className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl-flip" />
          <span className="text-accent font-medium">{breadcrumbLabel}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-accent" />
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Me. Yosr Ben Attia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight"
        >
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 text-lg text-secondary/60 max-w-xl"
        >
          {t(subtitleKey)}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 h-0.5 w-24 bg-gradient-to-r from-accent to-accent/30 origin-left"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
    </section>
  );
};

export default PageHero;
