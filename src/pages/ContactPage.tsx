import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const seoData = {
  fr: {
    title: "Contact | Cabinet Juridique - Prenez Rendez-vous",
    description: "Contactez notre cabinet d'avocats à Paris. Prenez rendez-vous pour une consultation gratuite. 123 Avenue des Champs-Élysées, 75008 Paris.",
  },
  en: {
    title: "Contact | Cabinet Juridique - Book an Appointment",
    description: "Contact our law firm in Paris. Schedule a free consultation. 123 Avenue des Champs-Élysées, 75008 Paris.",
  },
  ar: {
    title: "اتصل بنا | المكتب القانوني - حجز موعد",
    description: "تواصلوا مع مكتبنا القانوني في باريس. حددوا موعدًا لاستشارة مجانية. 123 شارع الشانزليزيه، باريس.",
  },
};

const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = seoData[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <link rel="canonical" href="https://cabinet-juridique.fr/contact" />
      </Helmet>
      <Navbar />
      <main>
        <PageHero
          titleKey="page_hero_contact_title"
          subtitleKey="page_hero_contact_subtitle"
          breadcrumbLabel={t("nav_contact")}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
