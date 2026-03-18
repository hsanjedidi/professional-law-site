import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const seoData = {
  fr: {
    title: "Domaines d'Intervention | Me. Yosr Ben Attia",
    description: "Nos domaines d'expertise : arbitrage, droit bancaire, protection des données, droit numérique, droit des sociétés, droit foncier, environnement, associations, assurances et droit du travail.",
  },
  en: {
    title: "Practice Areas | Me. Yosr Ben Attia",
    description: "Our areas of expertise: arbitration, banking law, data protection, digital law, corporate law, real estate, environmental law, NGO law, insurance and labor law.",
  },
  ar: {
    title: "مجالات التدخل | الأستاذة يسر بن عطية",
    description: "مجالات خبرتنا: التحكيم، القانون البنكي، حماية البيانات، القانون الرقمي، قانون الشركات، القانون العقاري، قانون البيئة، قانون الجمعيات، التأمين وقانون العمل.",
  },
};

const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = seoData[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <link rel="canonical" href="https://yosrbenattia.tn/services" />
      </Helmet>
      <Navbar />
      <main>
        <PageHero
          titleKey="page_hero_services_title"
          subtitleKey="page_hero_services_subtitle"
          breadcrumbLabel={t("nav_services")}
        />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
