import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("rab om email :", import.meta.env.RECIPIENT);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/send-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sender: {
              name: "Yosr Ben Attia Email Bot",
              email: "bot@benattialaw.com",
            },
            subject: formData.subject,
            htmlContent: `
        <html>
          <body>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        toast.success(t("contact_success_message"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(t("contact_error_message"));
      }
    } catch (error) {
      console.error(error);
      toast.error(t("contact_error_message"));
    } finally {
      setIsLoading(false);
    }
  };

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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_name")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_email")}
                      required
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder={t("contact_subject")}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact_message")}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    placeholder={t("contact_message")}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold transition-all hover:shadow-gold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t("contact_sending")}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t("contact_send")}
                    </>
                  )}
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
