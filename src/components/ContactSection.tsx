import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Smartphone, Mail, Clock, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact_address_title"),
      value: t("contact_address"),
    },
    {
      icon: Phone,
      title: t("contact_phone_title"),
      value: t("contact_phone_value"),
      href: "tel:71840381",
    },
    {
      icon: Smartphone,
      title: t("contact_mobile_title"),
      value: t("contact_mobile_value"),
      href: "tel:71840376",
    },
    {
      icon: Mail,
      title: t("contact_email_title"),
      value: t("contact_email_value"),
      href: "mailto:yosr.benattia@gnet.tn",
    },
    {
      icon: Clock,
      title: t("contact_hours_title"),
      value: t("contact_hours_value"),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
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
                {t("contact_label")}
              </span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {t("contact_title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("contact_subtitle")}
            </p>
          </motion.div>

          {/* Form and Info Grid */}
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_name")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_email")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_email")}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_phone")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_subject")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_subject")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact_message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    placeholder={t("contact_message")}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold transition-all hover:shadow-gold hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  {t("contact_send")}
                </button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block"
                        dir="ltr"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-sm"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=89+Rue+Ibn+Rachiq+Tunis+Tunisia&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
