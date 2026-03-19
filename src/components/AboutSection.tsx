import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages } from "lucide-react";
import yosrPhoto from "@/assets/yosr-ben-attia.jpg";

const stats = [
  { valueKey: "about_stat_1_value", labelKey: "about_stat_1_label" },
  { valueKey: "about_stat_2_value", labelKey: "about_stat_2_label" },
  { valueKey: "about_stat_3_value", labelKey: "about_stat_3_label" },
  { valueKey: "about_stat_4_value", labelKey: "about_stat_4_label" },
] as const;

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const details = [
    { icon: Briefcase, titleKey: "about_experience_title" as const, descKey: "about_experience_desc" as const },
    { icon: GraduationCap, titleKey: "about_academic_title" as const, descKey: "about_academic_desc" as const },
    { icon: Languages, titleKey: "about_languages_title" as const, descKey: "about_languages_desc" as const },
  ];

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

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Photo + Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src={yosrPhoto}
                  alt="Me. Yosr Ben Attia - Avocate à Tunis"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient-gold mb-1">
                      {t(stat.valueKey)}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Text + Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
                {t("about_title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t("about_description")}
              </p>

              {/* Details cards */}
              <div className="space-y-4">
                {details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {t(detail.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(detail.descKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
