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
    title: "Cabinet Juridique | Avocats d'Excellence à Paris",
    description: "Cabinet d'avocats à Paris spécialisé en droit des affaires, droit de la famille, droit pénal et droit immobilier. Plus de 25 ans d'expérience. Consultation gratuite.",
    keywords: "avocat paris, cabinet avocats, droit des affaires, droit famille, avocat pénal, droit immobilier, consultation juridique",
  },
  en: {
    title: "Cabinet Juridique | Excellence Law Firm in Paris",
    description: "Paris law firm specializing in business law, family law, criminal law, and real estate law. Over 25 years of experience. Free consultation.",
    keywords: "paris lawyer, law firm, business law, family law, criminal lawyer, real estate law, legal consultation",
  },
  ar: {
    title: "المكتب القانوني | محامون متميزون في باريس",
    description: "مكتب محاماة في باريس متخصص في قانون الأعمال وقانون الأسرة والقانون الجنائي والقانون العقاري. أكثر من 25 عامًا من الخبرة.",
    keywords: "محامي باريس, مكتب محاماة, قانون الأعمال, قانون الأسرة, محامي جنائي",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Cabinet Juridique",
  description: "Cabinet d'avocats d'excellence à Paris depuis 1998",
  url: "https://cabinet-juridique.fr",
  telephone: "+33142680000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Avenue des Champs-Élysées",
    addressLocality: "Paris",
    postalCode: "75008",
    addressCountry: "FR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  areaServed: "Paris, France",
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
        <link rel="canonical" href="https://cabinet-juridique.fr" />
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
