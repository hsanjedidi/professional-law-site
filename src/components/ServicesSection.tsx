import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Shield,
  Building2,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  { titleKey: "service_1_title", descKey: "service_1_desc", icon: Briefcase },
  { titleKey: "service_2_title", descKey: "service_2_desc", icon: Heart },
  { titleKey: "service_3_title", descKey: "service_3_desc", icon: Shield },
  { titleKey: "service_4_title", descKey: "service_4_desc", icon: Building2 },
  { titleKey: "service_5_title", descKey: "service_5_desc", icon: Users },
  { titleKey: "service_6_title", descKey: "service_6_desc", icon: Globe },
] as const;

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                {t("services_label")}
              </span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-4">
              {t("services_title")}
            </h2>
            <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
              {t("services_subtitle")}
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-lg bg-navy-light/50 border border-secondary/10 hover:border-accent/30 transition-all duration-300 hover:bg-navy-light/80"
              >
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-secondary/50 text-sm leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>
                <button className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  {t("services_cta")}
                  <ArrowRight className="h-4 w-4 rtl-flip" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
