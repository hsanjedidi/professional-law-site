import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "fr" | "en" | "ar";

type TranslationKeys = {
  // Navbar
  nav_home: string;
  nav_about: string;
  nav_services: string;
  nav_team: string;
  nav_contact: string;
  nav_consultation: string;

  // Hero
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_cta_secondary: string;

  // About
  about_label: string;
  about_title: string;
  about_description: string;
  about_stat_1_value: string;
  about_stat_1_label: string;
  about_stat_2_value: string;
  about_stat_2_label: string;
  about_stat_3_value: string;
  about_stat_3_label: string;
  about_stat_4_value: string;
  about_stat_4_label: string;

  // Services
  services_label: string;
  services_title: string;
  services_subtitle: string;
  service_1_title: string;
  service_1_desc: string;
  service_2_title: string;
  service_2_desc: string;
  service_3_title: string;
  service_3_desc: string;
  service_4_title: string;
  service_4_desc: string;
  service_5_title: string;
  service_5_desc: string;
  service_6_title: string;
  service_6_desc: string;
  services_cta: string;

  // Contact
  contact_label: string;
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  contact_subject: string;
  contact_message: string;
  contact_send: string;
  contact_address_title: string;
  contact_address: string;
  contact_phone_title: string;
  contact_phone_value: string;
  contact_email_title: string;
  contact_email_value: string;
  contact_hours_title: string;
  contact_hours_value: string;

  // Footer
  footer_description: string;
  footer_links: string;
  footer_legal: string;
  footer_privacy: string;
  footer_terms: string;
  footer_mentions: string;
  footer_rights: string;
};

const translations: Record<Language, TranslationKeys> = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_services: "Services",
    nav_team: "Équipe",
    nav_contact: "Contact",
    nav_consultation: "Consultation Gratuite",

    hero_title_1: "Excellence Juridique",
    hero_title_2: "& Engagement",
    hero_subtitle:
      "Cabinet d'avocats de renom, nous défendons vos droits avec rigueur, intégrité et détermination depuis plus de 25 ans.",
    hero_cta: "Prendre Rendez-vous",
    hero_cta_secondary: "Nos Services",

    about_label: "À Propos",
    about_title: "Un Cabinet d'Exception au Service de Vos Droits",
    about_description:
      "Fondé en 1998, notre cabinet réunit des avocats d'excellence spécialisés dans les domaines clés du droit. Nous accompagnons particuliers et entreprises avec une approche personnalisée, alliant expertise technique et vision stratégique pour garantir les meilleurs résultats.",
    about_stat_1_value: "25+",
    about_stat_1_label: "Années d'expérience",
    about_stat_2_value: "2 500+",
    about_stat_2_label: "Dossiers traités",
    about_stat_3_value: "98%",
    about_stat_3_label: "Taux de satisfaction",
    about_stat_4_value: "15",
    about_stat_4_label: "Avocats experts",

    services_label: "Nos Services",
    services_title: "Domaines d'Expertise",
    services_subtitle:
      "Notre cabinet couvre un large éventail de domaines juridiques pour répondre à tous vos besoins.",
    service_1_title: "Droit des Affaires",
    service_1_desc:
      "Conseil et contentieux en droit commercial, fusions-acquisitions, et restructuration d'entreprises.",
    service_2_title: "Droit de la Famille",
    service_2_desc:
      "Divorce, garde d'enfants, pension alimentaire, adoption et succession.",
    service_3_title: "Droit Pénal",
    service_3_desc:
      "Défense pénale, assistance en garde à vue, et représentation devant les juridictions.",
    service_4_title: "Droit Immobilier",
    service_4_desc:
      "Transactions immobilières, baux commerciaux, copropriété et litiges fonciers.",
    service_5_title: "Droit du Travail",
    service_5_desc:
      "Licenciement, harcèlement, contrats de travail et négociations collectives.",
    service_6_title: "Droit International",
    service_6_desc:
      "Arbitrage international, commerce transfrontalier et droit des investissements.",
    services_cta: "En savoir plus",

    contact_label: "Contact",
    contact_title: "Contactez-Nous",
    contact_subtitle:
      "Prenez rendez-vous pour une première consultation confidentielle avec l'un de nos avocats.",
    contact_name: "Nom complet",
    contact_email: "Adresse e-mail",
    contact_phone: "Téléphone",
    contact_subject: "Sujet",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",
    contact_address_title: "Adresse",
    contact_address: "123 Avenue des Champs-Élysées\n75008 Paris, France",
    contact_phone_title: "Téléphone",
    contact_phone_value: "+33 1 42 68 00 00",
    contact_email_title: "Email",
    contact_email_value: "contact@cabinet-juridique.fr",
    contact_hours_title: "Horaires",
    contact_hours_value: "Lun - Ven : 9h00 - 18h00",

    footer_description:
      "Cabinet d'avocats d'excellence, nous mettons notre expertise au service de vos droits depuis plus de 25 ans.",
    footer_links: "Liens Rapides",
    footer_legal: "Mentions Légales",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions Générales",
    footer_mentions: "Mentions Légales",
    footer_rights: "Tous droits réservés.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_team: "Team",
    nav_contact: "Contact",
    nav_consultation: "Free Consultation",

    hero_title_1: "Legal Excellence",
    hero_title_2: "& Commitment",
    hero_subtitle:
      "A renowned law firm, we defend your rights with rigor, integrity, and determination for over 25 years.",
    hero_cta: "Book an Appointment",
    hero_cta_secondary: "Our Services",

    about_label: "About Us",
    about_title: "An Exceptional Firm at the Service of Your Rights",
    about_description:
      "Founded in 1998, our firm brings together outstanding lawyers specialized in key areas of law. We support individuals and businesses with a personalized approach, combining technical expertise and strategic vision to guarantee the best results.",
    about_stat_1_value: "25+",
    about_stat_1_label: "Years of Experience",
    about_stat_2_value: "2,500+",
    about_stat_2_label: "Cases Handled",
    about_stat_3_value: "98%",
    about_stat_3_label: "Satisfaction Rate",
    about_stat_4_value: "15",
    about_stat_4_label: "Expert Lawyers",

    services_label: "Our Services",
    services_title: "Areas of Expertise",
    services_subtitle:
      "Our firm covers a wide range of legal fields to meet all your needs.",
    service_1_title: "Business Law",
    service_1_desc:
      "Advisory and litigation in commercial law, mergers & acquisitions, and corporate restructuring.",
    service_2_title: "Family Law",
    service_2_desc:
      "Divorce, child custody, alimony, adoption, and inheritance.",
    service_3_title: "Criminal Law",
    service_3_desc:
      "Criminal defense, police custody assistance, and court representation.",
    service_4_title: "Real Estate Law",
    service_4_desc:
      "Real estate transactions, commercial leases, co-ownership, and land disputes.",
    service_5_title: "Labor Law",
    service_5_desc:
      "Dismissal, harassment, employment contracts, and collective bargaining.",
    service_6_title: "International Law",
    service_6_desc:
      "International arbitration, cross-border trade, and investment law.",
    services_cta: "Learn More",

    contact_label: "Contact",
    contact_title: "Contact Us",
    contact_subtitle:
      "Schedule a confidential first consultation with one of our lawyers.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_phone: "Phone",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_send: "Send Message",
    contact_address_title: "Address",
    contact_address: "123 Avenue des Champs-Élysées\n75008 Paris, France",
    contact_phone_title: "Phone",
    contact_phone_value: "+33 1 42 68 00 00",
    contact_email_title: "Email",
    contact_email_value: "contact@cabinet-juridique.fr",
    contact_hours_title: "Hours",
    contact_hours_value: "Mon - Fri: 9:00 AM - 6:00 PM",

    footer_description:
      "An excellence law firm, we put our expertise at the service of your rights for over 25 years.",
    footer_links: "Quick Links",
    footer_legal: "Legal Notice",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_mentions: "Legal Mentions",
    footer_rights: "All rights reserved.",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_team: "الفريق",
    nav_contact: "اتصل بنا",
    nav_consultation: "استشارة مجانية",

    hero_title_1: "التميّز القانوني",
    hero_title_2: "والالتزام",
    hero_subtitle:
      "مكتب محاماة مرموق، ندافع عن حقوقكم بصرامة ونزاهة وعزيمة منذ أكثر من 25 عامًا.",
    hero_cta: "حجز موعد",
    hero_cta_secondary: "خدماتنا",

    about_label: "من نحن",
    about_title: "مكتب استثنائي في خدمة حقوقكم",
    about_description:
      "تأسس مكتبنا عام 1998، ويضم محامين متميزين متخصصين في المجالات القانونية الرئيسية. نرافق الأفراد والشركات بنهج شخصي يجمع بين الخبرة التقنية والرؤية الاستراتيجية لضمان أفضل النتائج.",
    about_stat_1_value: "+25",
    about_stat_1_label: "سنة خبرة",
    about_stat_2_value: "+2500",
    about_stat_2_label: "قضية معالجة",
    about_stat_3_value: "98%",
    about_stat_3_label: "معدل الرضا",
    about_stat_4_value: "15",
    about_stat_4_label: "محامٍ خبير",

    services_label: "خدماتنا",
    services_title: "مجالات الخبرة",
    services_subtitle:
      "يغطي مكتبنا مجموعة واسعة من المجالات القانونية لتلبية جميع احتياجاتكم.",
    service_1_title: "قانون الأعمال",
    service_1_desc:
      "الاستشارات والتقاضي في القانون التجاري والاندماج والاستحواذ وإعادة هيكلة الشركات.",
    service_2_title: "قانون الأسرة",
    service_2_desc: "الطلاق، حضانة الأطفال، النفقة، التبني والميراث.",
    service_3_title: "القانون الجنائي",
    service_3_desc:
      "الدفاع الجنائي، المساعدة أثناء الاحتجاز، والتمثيل أمام المحاكم.",
    service_4_title: "القانون العقاري",
    service_4_desc:
      "المعاملات العقارية، الإيجارات التجارية، الملكية المشتركة والنزاعات العقارية.",
    service_5_title: "قانون العمل",
    service_5_desc:
      "الفصل، التحرش، عقود العمل والمفاوضات الجماعية.",
    service_6_title: "القانون الدولي",
    service_6_desc:
      "التحكيم الدولي، التجارة عبر الحدود وقانون الاستثمارات.",
    services_cta: "اعرف المزيد",

    contact_label: "اتصل بنا",
    contact_title: "تواصل معنا",
    contact_subtitle:
      "حدد موعدًا لاستشارة أولى سرية مع أحد محامينا.",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_phone: "الهاتف",
    contact_subject: "الموضوع",
    contact_message: "رسالتك",
    contact_send: "إرسال الرسالة",
    contact_address_title: "العنوان",
    contact_address: "123 شارع الشانزليزيه\n75008 باريس، فرنسا",
    contact_phone_title: "الهاتف",
    contact_phone_value: "+33 1 42 68 00 00",
    contact_email_title: "البريد الإلكتروني",
    contact_email_value: "contact@cabinet-juridique.fr",
    contact_hours_title: "ساعات العمل",
    contact_hours_value: "الإثنين - الجمعة: 9:00 - 18:00",

    footer_description:
      "مكتب محاماة متميز، نضع خبرتنا في خدمة حقوقكم منذ أكثر من 25 عامًا.",
    footer_links: "روابط سريعة",
    footer_legal: "إشعار قانوني",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "الشروط والأحكام",
    footer_mentions: "الإشعارات القانونية",
    footer_rights: "جميع الحقوق محفوظة.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir} className={language === "ar" ? "font-body" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
