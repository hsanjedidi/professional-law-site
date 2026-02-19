import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp } from "lucide-react";

const iconMap = [Award, Users, TrendingUp];

const HomeWhySection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    { titleKey: "home_why_1_title" as const, descKey: "home_why_1_desc" as const, icon: Award },
    { titleKey: "home_why_2_title" as const, descKey: "home_why_2_desc" as const, icon: Users },
    { titleKey: "home_why_3_title" as const, descKey: "home_why_3_desc" as const, icon: TrendingUp },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                {t("home_why_label")}
              </span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              {t("home_why_title")}
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Number */}
                <div className="absolute -top-6 -start-4 text-8xl font-heading font-bold text-accent/5 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-gold group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-lg bg-gradient-navy flex items-center justify-center mb-6 shadow-gold">
                    <reason.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(reason.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhySection;
