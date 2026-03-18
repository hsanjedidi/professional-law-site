import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const seoData = {
  fr: {
    title: "Contact | Me. Yosr Ben Attia - Prenez Rendez-vous",
    description: "Contactez Maître Yosr Ben Attia pour une consultation confidentielle. Tél : (+216) 71 840 381. Email : yosr.benattia@gnet.tn. Cabinet à Tunis.",
  },
  en: {
    title: "Contact | Me. Yosr Ben Attia - Book a Consultation",
    description: "Contact Maître Yosr Ben Attia for a confidential consultation. Phone: (+216) 71 840 381. Email: yosr.benattia@gnet.tn. Office in Tunis.",
  },
  ar: {
    title: "اتصل بنا | الأستاذة يسر بن عطية - حجز موعد",
    description: "تواصل مع الأستاذة يسر بن عطية لاستشارة سرية. الهاتف: (+216) 71 840 381. البريد: yosr.benattia@gnet.tn. المكتب في تونس.",
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
        <link rel="canonical" href="https://yosrbenattia.tn/contact" />
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
