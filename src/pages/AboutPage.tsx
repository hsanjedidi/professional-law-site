import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const seoData = {
  fr: {
    title: "À Propos | Cabinet Juridique - Avocats à Paris",
    description: "Découvrez notre cabinet d'avocats fondé en 1998. Plus de 25 ans d'expérience, 2500+ dossiers traités, 15 avocats experts au service de vos droits.",
  },
  en: {
    title: "About Us | Cabinet Juridique - Law Firm in Paris",
    description: "Discover our law firm founded in 1998. Over 25 years of experience, 2500+ cases handled, 15 expert lawyers at the service of your rights.",
  },
  ar: {
    title: "من نحن | المكتب القانوني - محامون في باريس",
    description: "اكتشفوا مكتبنا القانوني الذي تأسس عام 1998. أكثر من 25 عامًا من الخبرة و2500+ قضية معالجة.",
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
        <link rel="canonical" href="https://cabinet-juridique.fr/about" />
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
