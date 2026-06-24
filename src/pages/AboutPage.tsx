import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const seoData = {
  fr: {
    title: "À Propos | Me. Yoser Ben Attia - Avocate à Tunis",
    description:
      "Parcours professionnel de Maître Yosr Ben Attia, avocate au Barreau de Tunis depuis 2013. Expérience en conformité bancaire, enseignement universitaire et droit des affaires.",
  },
  en: {
    title: "About | Me. Yoser Ben Attia - Lawyer in Tunis",
    description:
      "Professional background of Maître Yosr Ben Attia, lawyer at the Tunis Bar since 2013. Experience in banking compliance, academic teaching and business law.",
  },
  ar: {
    title: "من نحن | الأستاذة يسر بن عطية - محامية في تونس",
    description:
      "المسيرة المهنية للأستاذة يسر بن عطية، محامية بهيئة المحامين بتونس منذ 2013. خبرة في الامتثال البنكي والتدريس الجامعي وقانون الأعمال.",
  },
};

const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = seoData[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <link rel="canonical" href="https://yosrbenattia.tn/about" />
      </Helmet>
      <Navbar />
      <main>
        <PageHero
          titleKey="page_hero_about_title"
          subtitleKey="page_hero_about_subtitle"
          breadcrumbLabel={t("nav_about")}
        />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
