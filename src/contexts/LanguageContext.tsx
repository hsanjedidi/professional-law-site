import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export type Language = "fr" | "en" | "ar";

type TranslationKeys = {
  // Page Hero
  page_hero_about_title: string;
  page_hero_about_subtitle: string;
  page_hero_services_title: string;
  page_hero_services_subtitle: string;
  page_hero_contact_title: string;
  page_hero_contact_subtitle: string;

  // Home sections
  home_why_title: string;
  home_why_label: string;
  home_why_1_title: string;
  home_why_1_desc: string;
  home_why_2_title: string;
  home_why_2_desc: string;
  home_why_3_title: string;
  home_why_3_desc: string;
  home_cta_title: string;
  home_cta_subtitle: string;
  home_cta_btn: string;

  // Navbar
  nav_home: string;
  nav_about: string;
  nav_services: string;
  nav_contact: string;
  nav_consultation: string;

  // Hero
  hero_label: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_cta_secondary: string;

  // Trust highlights
  hero_trust_1: string;
  hero_trust_2: string;
  hero_trust_3: string;
  hero_trust_4: string;

  // About
  about_label: string;
  about_title: string;
  about_description: string;
  about_experience_title: string;
  about_experience_desc: string;
  about_academic_title: string;
  about_academic_desc: string;
  about_languages_title: string;
  about_languages_desc: string;
  about_stat_1_value: string;
  about_stat_1_label: string;
  about_stat_2_value: string;
  about_stat_2_label: string;
  about_stat_3_value: string;
  about_stat_3_label: string;
  about_stat_4_value: string;
  about_stat_4_label: string;

  // Services (10 practice areas)
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
  service_7_title: string;
  service_7_desc: string;
  service_8_title: string;
  service_8_desc: string;
  service_9_title: string;
  service_9_desc: string;
  service_10_title: string;
  service_10_desc: string;
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
  contact_mobile_title: string;
  contact_mobile_value: string;
  contact_fax_title: string;
  contact_fax_value: string;
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
    page_hero_about_title: "À Propos",
    page_hero_about_subtitle:
      "Découvrez le parcours, les qualifications et l'engagement de Maître Yosr Ben Attia.",
    page_hero_services_title: "Domaines d'Intervention",
    page_hero_services_subtitle:
      "Un accompagnement juridique de haut niveau dans tous les domaines stratégiques du droit.",
    page_hero_contact_title: "Contactez-Nous",
    page_hero_contact_subtitle:
      "Prenez rendez-vous pour une consultation confidentielle avec Maître Yosr Ben Attia.",
    home_why_label: "Pourquoi Nous Choisir",
    home_why_title: "Un Accompagnement Juridique d'Excellence",
    home_why_1_title: "Expertise Pluridisciplinaire",
    home_why_1_desc:
      "Droit des affaires, bancaire, numérique, protection des données, arbitrage, immobilier et bien plus.",
    home_why_2_title: "Approche Stratégique",
    home_why_2_desc:
      "Chaque dossier bénéficie d'une analyse rigoureuse et d'une stratégie juridique sur mesure.",
    home_why_3_title: "Expérience & Confiance",
    home_why_3_desc:
      "Avocate au Barreau de Tunis, ancienne cadre bancaire, avec une solide expérience académique.",
    home_cta_title: "Besoin d'un Conseil Juridique ?",
    home_cta_subtitle:
      "Contactez Maître Yosr Ben Attia pour une consultation confidentielle. Expertise en droit des affaires, bancaire, numérique et résolution des litiges.",
    home_cta_btn: "Prendre Rendez-vous",
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_services: "Domaines",
    nav_contact: "Contact",
    nav_consultation: "Consultation",

    hero_label: "Avocate au Barreau de Tunis",
    hero_title_1: "Maître Yosr",
    hero_title_2: "Ben Attia",
    hero_subtitle:
      "Conseil juridique de confiance en droit des affaires, droit bancaire, droit numérique et résolution des litiges. Maître Yosr Ben Attia accompagne les entreprises, les institutions, les ONG et les investisseurs avec une approche rigoureuse, stratégique et pragmatique.",
    hero_cta: "Prendre Rendez-vous",
    hero_cta_secondary: "Domaines d'Intervention",

    hero_trust_1: "Barreau de Tunis",
    hero_trust_2: "Droit des Affaires",
    hero_trust_3: "Conformité Bancaire",
    hero_trust_4: "Protection des Données",

    about_label: "À Propos",
    about_title: "Maître Yosr Ben Attia",
    about_description:
      "Maître Yosr Ben Attia est avocate inscrite au Barreau de Tunis depuis 2013. Elle conjugue pratique juridique, expérience antérieure en conformité bancaire, enseignement universitaire et formation juridique avancée en droit des affaires, arbitrage, protection des données et droit foncier.",
    about_experience_title: "Expérience Professionnelle",
    about_experience_desc:
      "Avocate depuis 2013. Ancienne cadre au Département Inspection et Contrôle de la Conformité à la Banque de Tunisie et des Emirats (2008-2013). Ancienne enseignante dans plusieurs établissements d'enseignement supérieur tunisiens en matières de droit privé.",
    about_academic_title: "Formation Académique",
    about_academic_desc:
      "Formation juridique approfondie en droit des affaires après une maîtrise en sciences juridiques. Auteure de travaux académiques sur l'extension rationae-personae de la convention d'arbitrage et sur la protection des données personnelles en droit tunisien.",
    about_languages_title: "Langues",
    about_languages_desc: "Arabe, français, anglais et italien.",
    about_stat_1_value: "2013",
    about_stat_1_label: "Inscrite au Barreau",
    about_stat_2_value: "10+",
    about_stat_2_label: "Domaines d'Expertise",
    about_stat_3_value: "4",
    about_stat_3_label: "Langues Maîtrisées",
    about_stat_4_value: "15+",
    about_stat_4_label: "Années d'Expérience",

    services_label: "Domaines d'Intervention",
    services_title: "Nos Domaines d'Expertise",
    services_subtitle:
      "Un accompagnement juridique complet dans les domaines stratégiques du droit des affaires et au-delà.",
    service_1_title: "Arbitrage & Médiation",
    service_1_desc:
      "Arbitrage et médiation, stratégie juridique, prévention des litiges, structuration des règlements amiables et accompagnement dans les conflits commerciaux complexes.",
    service_2_title: "Droit Bancaire",
    service_2_desc:
      "Conformité bancaire, réglementation du change et du crédit, recouvrement de créances, procédures de saisie, saisie de fonds de commerce et exécution immobilière.",
    service_3_title: "Protection des Données",
    service_3_desc:
      "Politiques de confidentialité, audits de conformité, cartographie des risques, analyse des flux de données, déclarations de traitement et accompagnement privacy by design.",
    service_4_title: "Droit Numérique / IT",
    service_4_desc:
      "Rédaction et revue de contrats pour solutions logicielles, infrastructures cloud, serveurs privés virtuels, virtual datacenters et services de disaster recovery.",
    service_5_title: "Droit de l'Environnement",
    service_5_desc:
      "Accompagnement juridique pour projets d'énergie renouvelable, structures PPA/CPPA, contrats de collecte et transport de déchets dangereux et cadres de traitement des déchets industriels.",
    service_6_title: "Droit des Sociétés",
    service_6_desc:
      "Secrétariat juridique, due diligence, accompagnement en fusions-acquisitions, pactes d'actionnaires, structuration de gouvernance, conseil startup et organisation de data room.",
    service_7_title: "Droit Foncier",
    service_7_desc:
      "Rédaction d'actes de vente, actes de partage, extraction de titres, procédures foncières, autorisations du gouverneur pour acquéreurs étrangers et contentieux devant le tribunal foncier.",
    service_8_title: "Droit Associatif / ONG",
    service_8_desc:
      "Création et structuration d'associations, conformité statutaire, secrétariat juridique, gouvernance, démarches auprès de la Présidence du Gouvernement et conseil aux ONG.",
    service_9_title: "Droit des Assurances",
    service_9_desc:
      "Assistance judiciaire et accompagnement des recours pour des sociétés de gestion de risques et d'assistance intervenant pour le compte d'assureurs étrangers.",
    service_10_title: "Droit du Travail",
    service_10_desc:
      "Contentieux prud'homal, défense employeur, règlements intérieurs, statuts du personnel, relations avec l'inspection du travail et élections des commissions consultatives.",
    services_cta: "En savoir plus",

    contact_label: "Contact",
    contact_title: "Contactez-Nous",
    contact_subtitle:
      "Vous avez besoin d'un conseil juridique ? Contactez Maître Yosr Ben Attia pour une consultation en toute confidentialité.",
    contact_name: "Nom complet",
    contact_email: "Adresse e-mail",
    contact_phone: "Téléphone",
    contact_subject: "Sujet",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",
    contact_address_title: "Cabinet",
    contact_address: "Tunis, Tunisie",
    contact_phone_title: "Téléphone",
    contact_phone_value: "(+216) 71 840 381",
    contact_mobile_title: "Mobile",
    contact_mobile_value: "(+216) 20 575 291",
    contact_fax_title: "Fax",
    contact_fax_value: "(+216) 71 840 376",
    contact_email_title: "Email",
    contact_email_value: "yosr.benattia@gnet.tn",
    contact_hours_title: "Horaires",
    contact_hours_value: "Lun - Ven : 9h00 - 18h00",

    footer_description:
      "Avocate au Barreau de Tunis, Maître Yosr Ben Attia offre un accompagnement juridique de haut niveau en droit des affaires, bancaire, numérique et résolution des litiges.",
    footer_links: "Liens Rapides",
    footer_legal: "Mentions Légales",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions Générales",
    footer_mentions: "Mentions Légales",
    footer_rights: "Tous droits réservés.",
  },
  en: {
    page_hero_about_title: "About",
    page_hero_about_subtitle:
      "Discover the background, qualifications, and commitment of Maître Yosr Ben Attia.",
    page_hero_services_title: "Practice Areas",
    page_hero_services_subtitle:
      "High-level legal counsel across all strategic areas of law.",
    page_hero_contact_title: "Contact Us",
    page_hero_contact_subtitle:
      "Schedule a confidential consultation with Maître Yosr Ben Attia.",
    home_why_label: "Why Choose Us",
    home_why_title: "Excellence in Legal Counsel",
    home_why_1_title: "Multidisciplinary Expertise",
    home_why_1_desc:
      "Business law, banking, digital law, data protection, arbitration, real estate and more.",
    home_why_2_title: "Strategic Approach",
    home_why_2_desc:
      "Every case benefits from rigorous analysis and a tailor-made legal strategy.",
    home_why_3_title: "Experience & Trust",
    home_why_3_desc:
      "Lawyer registered with the Tunis Bar, former banking executive, with solid academic experience.",
    home_cta_title: "Need Legal Advice?",
    home_cta_subtitle:
      "Contact Maître Yosr Ben Attia for a confidential consultation. Expertise in business law, banking, digital law, and dispute resolution.",
    home_cta_btn: "Book a Consultation",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Practice Areas",
    nav_contact: "Contact",
    nav_consultation: "Consultation",

    hero_label: "Lawyer at the Tunis Bar",
    hero_title_1: "Maître Yosr",
    hero_title_2: "Ben Attia",
    hero_subtitle:
      "Trusted legal counsel in business, banking, digital law and dispute resolution. Maître Yosr Ben Attia supports companies, institutions, NGOs and investors with rigorous, strategic and practical legal advice.",
    hero_cta: "Book a Consultation",
    hero_cta_secondary: "Practice Areas",

    hero_trust_1: "Tunis Bar",
    hero_trust_2: "Business Law",
    hero_trust_3: "Banking Compliance",
    hero_trust_4: "Data Protection",

    about_label: "About",
    about_title: "Maître Yosr Ben Attia",
    about_description:
      "Maître Yosr Ben Attia is a lawyer registered with the Tunis Bar since 2013. She combines legal practice, prior banking compliance experience, academic teaching, and advanced legal training in business law, arbitration, data protection and real estate law.",
    about_experience_title: "Professional Experience",
    about_experience_desc:
      "Lawyer since 2013. Former compliance and inspection executive at Banque de Tunisie et des Emirats (2008-2013). Former lecturer in several Tunisian higher education institutions in private law disciplines.",
    about_academic_title: "Academic Background",
    about_academic_desc:
      "Master's level legal studies in business law, after a degree in legal sciences. Author of academic work on the scope of arbitration agreements and on personal data protection under Tunisian law.",
    about_languages_title: "Languages",
    about_languages_desc: "Arabic, French, English and Italian.",
    about_stat_1_value: "2013",
    about_stat_1_label: "Registered at Bar",
    about_stat_2_value: "10+",
    about_stat_2_label: "Areas of Expertise",
    about_stat_3_value: "4",
    about_stat_3_label: "Languages Spoken",
    about_stat_4_value: "15+",
    about_stat_4_label: "Years of Experience",

    services_label: "Practice Areas",
    services_title: "Our Areas of Expertise",
    services_subtitle:
      "Comprehensive legal support across strategic areas of business law and beyond.",
    service_1_title: "Arbitration & Mediation",
    service_1_desc:
      "Arbitration and mediation support, legal strategy, dispute prevention, settlement design, and representation in complex business conflicts.",
    service_2_title: "Banking Law",
    service_2_desc:
      "Banking compliance, foreign exchange and credit regulation, debt recovery, attachment procedures, seizure of business assets, and real estate enforcement.",
    service_3_title: "Data Protection & Privacy",
    service_3_desc:
      "Privacy policies, compliance audits, risk mapping, data flow analysis, personal data processing declarations, and privacy-by-design support.",
    service_4_title: "Digital / IT Law",
    service_4_desc:
      "Drafting and reviewing contracts for software solutions, cloud infrastructure, virtual private servers, virtual data centers, and disaster recovery services.",
    service_5_title: "Environmental Law",
    service_5_desc:
      "Legal support for renewable energy projects, PPA/CPPA structures, hazardous waste transport and collection contracts, and industrial waste treatment frameworks.",
    service_6_title: "Corporate Law",
    service_6_desc:
      "Company secretariat, legal due diligence, mergers and acquisitions support, shareholder agreements, governance structuring, startup legal advisory and data room support.",
    service_7_title: "Real Estate Law",
    service_7_desc:
      "Drafting of sale deeds, partition deeds, title extraction acts, land registry procedures, governor authorizations for foreign buyers, and litigation before the land court.",
    service_8_title: "Association / NGO Law",
    service_8_desc:
      "Creation and structuring of associations, statutory compliance, legal secretariat, governance, procedures with the Presidency of Government, and NGO advisory.",
    service_9_title: "Insurance Law",
    service_9_desc:
      "Judicial assistance and claims support for risk-management and assistance companies acting for foreign insurers and automobile clubs.",
    service_10_title: "Labor Law",
    service_10_desc:
      "Prud'homal litigation, employer defense, internal regulations, staff statutes, labor inspection relations, and elections of company consultative committees.",
    services_cta: "Learn More",

    contact_label: "Contact",
    contact_title: "Contact Us",
    contact_subtitle:
      "Need legal advice in corporate, banking, digital or dispute matters? Contact Maître Yosr Ben Attia for a confidential consultation.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_phone: "Phone",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_send: "Send Message",
    contact_address_title: "Office",
    contact_address: "Tunis, Tunisia",
    contact_phone_title: "Phone",
    contact_phone_value: "(+216) 71 840 381",
    contact_mobile_title: "Mobile",
    contact_mobile_value: "(+216) 20 575 291",
    contact_fax_title: "Fax",
    contact_fax_value: "(+216) 71 840 376",
    contact_email_title: "Email",
    contact_email_value: "yosr.benattia@gnet.tn",
    contact_hours_title: "Hours",
    contact_hours_value: "Mon - Fri: 9:00 AM - 6:00 PM",

    footer_description:
      "Lawyer at the Tunis Bar, Maître Yosr Ben Attia provides high-level legal counsel in business law, banking, digital law and dispute resolution.",
    footer_links: "Quick Links",
    footer_legal: "Legal Notice",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_mentions: "Legal Mentions",
    footer_rights: "All rights reserved.",
  },
  ar: {
    page_hero_about_title: "من نحن",
    page_hero_about_subtitle:
      "اكتشفوا مسيرة الأستاذة يسر بن عطية ومؤهلاتها والتزامها.",
    page_hero_services_title: "مجالات التدخل",
    page_hero_services_subtitle:
      "استشارات قانونية عالية المستوى في جميع المجالات الاستراتيجية للقانون.",
    page_hero_contact_title: "اتصل بنا",
    page_hero_contact_subtitle:
      "حدد موعدًا لاستشارة سرية مع الأستاذة يسر بن عطية.",
    home_why_label: "لماذا تختارنا",
    home_why_title: "التميز في الاستشارات القانونية",
    home_why_1_title: "خبرة متعددة التخصصات",
    home_why_1_desc:
      "قانون الأعمال، البنوك، القانون الرقمي، حماية البيانات، التحكيم، العقارات والمزيد.",
    home_why_2_title: "نهج استراتيجي",
    home_why_2_desc: "كل ملف يستفيد من تحليل دقيق واستراتيجية قانونية مخصصة.",
    home_why_3_title: "خبرة وثقة",
    home_why_3_desc:
      "محامية مسجلة في هيئة المحامين بتونس، إطار بنكي سابق، مع خبرة أكاديمية راسخة.",
    home_cta_title: "هل تحتاج إلى استشارة قانونية؟",
    home_cta_subtitle:
      "تواصل مع الأستاذة يسر بن عطية لاستشارة سرية. خبرة في قانون الأعمال والبنوك والقانون الرقمي وتسوية النزاعات.",
    home_cta_btn: "حجز موعد",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "المجالات",
    nav_contact: "اتصل بنا",
    nav_consultation: "استشارة",

    hero_label: "محامية بهيئة المحامين بتونس",
    hero_title_1: "الأستاذة يسر",
    hero_title_2: "بن عطية",
    hero_subtitle:
      "استشارات قانونية موثوقة في قانون الأعمال والقانون البنكي والقانون الرقمي وتسوية النزاعات. الأستاذة يسر بن عطية ترافق الشركات والمؤسسات والمنظمات غير الحكومية والمستثمرين بنهج صارم واستراتيجي وعملي.",
    hero_cta: "حجز موعد",
    hero_cta_secondary: "مجالات التدخل",

    hero_trust_1: "هيئة المحامين بتونس",
    hero_trust_2: "قانون الأعمال",
    hero_trust_3: "الامتثال البنكي",
    hero_trust_4: "حماية البيانات",

    about_label: "من نحن",
    about_title: "الأستاذة يسر بن عطية",
    about_description:
      "الأستاذة يسر بن عطية محامية مسجلة في هيئة المحامين بتونس منذ 2013. تجمع بين الممارسة القانونية والخبرة السابقة في الامتثال البنكي والتدريس الجامعي والتكوين القانوني المتقدم في قانون الأعمال والتحكيم وحماية البيانات والقانون العقاري.",
    about_experience_title: "الخبرة المهنية",
    about_experience_desc:
      "محامية منذ 2013. إطار سابق بقسم التفتيش ومراقبة الامتثال ببنك تونس والإمارات (2008-2013). أستاذة سابقة في عدة مؤسسات تعليم عالي تونسية في مواد القانون الخاص.",
    about_academic_title: "التكوين الأكاديمي",
    about_academic_desc:
      "تكوين قانوني معمق في قانون الأعمال بعد إجازة في العلوم القانونية. مؤلفة أعمال أكاديمية حول امتداد اتفاقية التحكيم وحماية البيانات الشخصية في القانون التونسي.",
    about_languages_title: "اللغات",
    about_languages_desc: "العربية والفرنسية والإنجليزية والإيطالية.",
    about_stat_1_value: "2013",
    about_stat_1_label: "مسجلة بالهيئة",
    about_stat_2_value: "+10",
    about_stat_2_label: "مجالات خبرة",
    about_stat_3_value: "4",
    about_stat_3_label: "لغات متقنة",
    about_stat_4_value: "+15",
    about_stat_4_label: "سنة خبرة",

    services_label: "مجالات التدخل",
    services_title: "مجالات خبرتنا",
    services_subtitle:
      "دعم قانوني شامل في المجالات الاستراتيجية لقانون الأعمال وما بعده.",
    service_1_title: "التحكيم والوساطة",
    service_1_desc:
      "دعم التحكيم والوساطة، الاستراتيجية القانونية، منع النزاعات، هيكلة التسويات الودية والمرافقة في النزاعات التجارية المعقدة.",
    service_2_title: "القانون البنكي",
    service_2_desc:
      "الامتثال البنكي، تنظيم الصرف والائتمان، تحصيل الديون، إجراءات الحجز، حجز الأصول التجارية والتنفيذ العقاري.",
    service_3_title: "حماية البيانات والخصوصية",
    service_3_desc:
      "سياسات الخصوصية، تدقيق الامتثال، رسم خرائط المخاطر، تحليل تدفقات البيانات، إعلانات المعالجة والمرافقة في التصميم المراعي للخصوصية.",
    service_4_title: "القانون الرقمي / تكنولوجيا المعلومات",
    service_4_desc:
      "صياغة ومراجعة عقود الحلول البرمجية والبنى التحتية السحابية والخوادم الافتراضية الخاصة ومراكز البيانات الافتراضية وخدمات التعافي من الكوارث.",
    service_5_title: "قانون البيئة",
    service_5_desc:
      "المرافقة القانونية لمشاريع الطاقة المتجددة، هياكل اتفاقيات شراء الطاقة، عقود نقل وجمع النفايات الخطرة وأطر معالجة النفايات الصناعية.",
    service_6_title: "قانون الشركات",
    service_6_desc:
      "السكرتارية القانونية، العناية الواجبة، المرافقة في الاندماج والاستحواذ، اتفاقيات المساهمين، هيكلة الحوكمة واستشارات الشركات الناشئة.",
    service_7_title: "القانون العقاري",
    service_7_desc:
      "صياغة عقود البيع، أعمال التقسيم، استخراج السندات، الإجراءات العقارية، تراخيص الوالي للمشترين الأجانب والتقاضي أمام المحكمة العقارية.",
    service_8_title: "قانون الجمعيات / المنظمات",
    service_8_desc:
      "إنشاء وهيكلة الجمعيات، الامتثال النظامي، السكرتارية القانونية، الحوكمة والإجراءات لدى رئاسة الحكومة واستشارات المنظمات غير الحكومية.",
    service_9_title: "قانون التأمين",
    service_9_desc:
      "المساعدة القضائية ومرافقة الطعون لصالح شركات إدارة المخاطر والمساعدة العاملة لحساب شركات التأمين الأجنبية.",
    service_10_title: "قانون العمل",
    service_10_desc:
      "القضايا العمالية، الدفاع عن أصحاب العمل، الأنظمة الداخلية، قوانين الموظفين، العلاقات مع تفتيش العمل وانتخابات اللجان الاستشارية.",
    services_cta: "اعرف المزيد",

    contact_label: "اتصل بنا",
    contact_title: "تواصل معنا",
    contact_subtitle:
      "هل تحتاج إلى استشارة قانونية؟ تواصل مع الأستاذة يسر بن عطية لاستشارة سرية.",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_phone: "الهاتف",
    contact_subject: "الموضوع",
    contact_message: "رسالتك",
    contact_send: "إرسال الرسالة",
    contact_address_title: "المكتب",
    contact_address: "تونس، تونس",
    contact_phone_title: "الهاتف",
    contact_phone_value: "(+216) 71 840 381",
    contact_mobile_title: "الجوال",
    contact_mobile_value: "(+216) 20 575 291",
    contact_fax_title: "الفاكس",
    contact_fax_value: "(+216) 71 840 376",
    contact_email_title: "البريد الإلكتروني",
    contact_email_value: "yosr.benattia@gnet.tn",
    contact_hours_title: "ساعات العمل",
    contact_hours_value: "الإثنين - الجمعة: 9:00 - 18:00",

    footer_description:
      "محامية بهيئة المحامين بتونس، الأستاذة يسر بن عطية تقدم استشارات قانونية عالية المستوى في قانون الأعمال والبنوك والقانون الرقمي وتسوية النزاعات.",
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

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  // ✅ Applique dir et lang sur <html> à chaque changement de langue
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return translations[language][key] || key;
    },
    [language],
  );

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
