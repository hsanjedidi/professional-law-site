import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    t("hero_trust_1"),
    t("hero_trust_2"),
    t("hero_trust_3"),
    t("hero_trust_4"),
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] md:min-h-[100vh] flex items-center overflow-hidden py-16 md:py-0"
      dir="auto"
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={heroBg}
          alt="Cabinet d'avocats"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Label - Plus petit et discret */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase">
              {t("hero_label")}
            </span>
          </motion.div>

          {/* Main Title - Réduit de 5.5rem à 3rem/3.5rem max */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
       <span className="text-secondary">
    {t("hero_title_1")}
  </span>
  {" "}
  <span className="text-gradient-gold">
    {t("hero_title_2")}
  </span>
          </motion.h1>

          {/* Subtitle - Taille standard (base) pour plus de sérieux */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-secondary/70 max-w-xl leading-relaxed mb-8 ltr:border-l rtl:border-r border-accent/20 ltr:pl-4 rtl:pr-4"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* Trust Badges - Plus compacts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent/80" />
                <span className="text-secondary/60 text-xs md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Buttons - Tailles de boutons ajustées (py-3.5 au lieu de py-5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-accent text-navy-dark rounded-sm font-bold text-sm transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              {t("hero_cta")}
            </Link>

            <Link
              to="/services"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 border border-accent/30 text-secondary rounded-sm font-bold text-sm transition-all hover:bg-accent/5 backdrop-blur-sm"
            >
              {t("hero_cta_secondary")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floor Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
