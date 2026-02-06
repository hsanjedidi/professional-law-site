import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const stats = [
  { valueKey: "about_stat_1_value", labelKey: "about_stat_1_label" },
  { valueKey: "about_stat_2_value", labelKey: "about_stat_2_label" },
  { valueKey: "about_stat_3_value", labelKey: "about_stat_3_label" },
  { valueKey: "about_stat_4_value", labelKey: "about_stat_4_label" },
] as const;

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              {t("about_label")}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
                {t("about_title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about_description")}
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group"
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-gradient-gold mb-2">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
