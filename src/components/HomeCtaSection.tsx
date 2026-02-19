import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const HomeCtaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-navy">
      {/* Decorative blobs */}
      <div className="absolute top-0 start-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Animated gold lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Cabinet Juridique
              </span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
              {t("home_cta_title")}
            </h2>
            <p className="text-secondary/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              {t("home_cta_subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold text-base transition-all hover:shadow-gold hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {t("home_cta_btn")}
              </Link>
              <Link
                to="/services"
                className="group flex items-center gap-2 px-8 py-4 border-2 border-gold text-secondary rounded-md font-semibold text-base transition-all hover:bg-accent/10"
              >
                {t("hero_cta_secondary")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl-flip" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaSection;
