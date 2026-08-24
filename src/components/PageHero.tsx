import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  titleKey:
    | "page_hero_about_title"
    | "page_hero_services_title"
    | "page_hero_contact_title";
  subtitleKey:
    | "page_hero_about_subtitle"
    | "page_hero_services_subtitle"
    | "page_hero_contact_subtitle";
  breadcrumbLabel: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  titleKey,
  subtitleKey,
  breadcrumbLabel,
}) => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[50vh] flex items-end overflow-hidden"
      dir="auto"
    >
      {/* Background & Overlays */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-92" />
        {/* Utilisation de start/end pour le gradient adaptatif */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 inset-x-0 h-px md:h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Decorative Side Gradient - Logic: End-0 */}
      <div className="hidden md:block absolute end-0 top-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-s ltr:bg-gradient-to-l rtl:bg-gradient-to-r from-accent/20 to-transparent" />
      </div>

      {/* Circles - Positionnés avec start/end */}
      <div className="absolute -top-10 -end-10 md:top-16 md:end-16 w-32 h-32 md:w-40 md:h-40 rounded-full border border-accent/10" />
      <div className="absolute -top-5 -end-5 md:top-8 md:end-8 w-48 h-48 md:w-64 md:h-64 rounded-full border border-accent/5" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-10 md:pb-14 pt-24 md:pt-32">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-secondary/70 mb-4 md:mb-6"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-accent transition-colors p-1 ltr:-ml-1 rtl:-mr-1"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180 opacity-50" />
          <span className="text-accent font-medium">{breadcrumbLabel}</span>
        </motion.nav>

        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-3 md:mb-4"
        >
          <div className="h-px w-8 md:w-10 bg-accent" />
          <span className="text-accent text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
            Me. Yosr Ben Attia
          </span>
        </motion.div>

        {/* Title - Supporte les langues à mots longs (Allemand/Français) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-[1.2] md:leading-tight break-words"
        >
          {t(titleKey)}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 text-base md:text-lg text-secondary/70 max-w-lg md:max-w-xl leading-relaxed ltr:text-left rtl:text-right"
        >
          {t(subtitleKey)}
        </motion.p>

        {/* Animated accent line - Origin adaptatif pour RTL */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 md:mt-8 h-0.5 w-16 md:w-24 bg-gradient-to-r from-accent to-accent/30 ltr:origin-left rtl:origin-right"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
    </section>
  );
};

export default PageHero;
