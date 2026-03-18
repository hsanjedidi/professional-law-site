import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HomeWhySection from "@/components/HomeWhySection";
import HomeCtaSection from "@/components/HomeCtaSection";
import Footer from "@/components/Footer";

const seoData = {
  fr: {
    title: "Me. Yosr Ben Attia | Avocate au Barreau de Tunis",
    description: "Maître Yosr Ben Attia, avocate à Tunis spécialisée en droit des affaires, droit bancaire, droit numérique, protection des données, arbitrage et médiation.",
    keywords: "avocate tunis, droit des affaires, droit bancaire, protection des données, arbitrage, médiation, droit numérique, Yosr Ben Attia",
  },
  en: {
    title: "Me. Yosr Ben Attia | Lawyer at the Tunis Bar",
    description: "Maître Yosr Ben Attia, Tunis-based lawyer specializing in business law, banking law, digital law, data protection, arbitration and mediation.",
    keywords: "tunis lawyer, business law, banking law, data protection, arbitration, mediation, digital law, Yosr Ben Attia",
  },
  ar: {
    title: "الأستاذة يسر بن عطية | محامية بهيئة المحامين بتونس",
    description: "الأستاذة يسر بن عطية، محامية في تونس متخصصة في قانون الأعمال والقانون البنكي والقانون الرقمي وحماية البيانات والتحكيم والوساطة.",
    keywords: "محامية تونس, قانون الأعمال, قانون بنكي, حماية البيانات, تحكيم, وساطة",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Me. Yosr Ben Attia",
  description: "Avocate au Barreau de Tunis - Droit des affaires, bancaire, numérique et résolution des litiges",
  url: "https://yosrbenattia.tn",
  telephone: "+21671840381",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tunis",
    addressCountry: "TN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: "Tunisia",
};

const Index: React.FC = () => {
  const { language } = useLanguage();
  const seo = seoData[language];

  return (
    <>
      <Helmet>
        <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yosrbenattia.tn" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HomeWhySection />
        <ServicesSection />
        <HomeCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
