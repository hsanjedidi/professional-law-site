import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const seoData = {
  fr: {
    title: "Services | Cabinet Juridique - Domaines d'Expertise",
    description: "Nos domaines d'expertise : droit des affaires, droit de la famille, droit pénal, droit immobilier, droit du travail et droit international.",
  },
  en: {
    title: "Services | Cabinet Juridique - Areas of Expertise",
    description: "Our areas of expertise: business law, family law, criminal law, real estate law, labor law, and international law.",
  },
  ar: {
    title: "خدماتنا | المكتب القانوني - مجالات الخبرة",
    description: "مجالات خبرتنا: قانون الأعمال، قانون الأسرة، القانون الجنائي، القانون العقاري، قانون العمل والقانون الدولي.",
  },
};

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = seoData[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <link rel="canonical" href="https://cabinet-juridique.fr/services" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
