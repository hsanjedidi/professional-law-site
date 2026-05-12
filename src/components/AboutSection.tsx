import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages } from "lucide-react";
import yosrPhoto from "@/assets/yosr-ben-attia.jpg";

/* ─── Legal background SVG icons ─────────────────────────────────────── */
const ScalesIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="legal-bg-icon"
  >
    <line
      x1="100"
      y1="20"
      x2="100"
      y2="170"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="40"
      y1="60"
      x2="160"
      y2="60"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="40"
      y1="60"
      x2="55"
      y2="105"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="160"
      y1="60"
      x2="145"
      y2="105"
      stroke="currentColor"
      strokeWidth="2"
    />
    <ellipse
      cx="47"
      cy="108"
      rx="22"
      ry="8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <ellipse
      cx="153"
      cy="108"
      rx="22"
      ry="8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="100" cy="60" r="5" fill="currentColor" />
    <line
      x1="80"
      y1="170"
      x2="120"
      y2="170"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

const GavelIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="legal-bg-icon"
  >
    <rect
      x="30"
      y="65"
      width="90"
      height="40"
      rx="8"
      stroke="currentColor"
      strokeWidth="3"
      transform="rotate(-35 75 85)"
    />
    <line
      x1="108"
      y1="90"
      x2="170"
      y2="162"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line
      x1="30"
      y1="155"
      x2="180"
      y2="155"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="legal-bg-icon"
  >
    <rect
      x="30"
      y="20"
      width="140"
      height="160"
      rx="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="30"
      y="20"
      width="28"
      height="160"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="65"
      x2="152"
      y2="65"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="85"
      x2="152"
      y2="85"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="105"
      x2="152"
      y2="105"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="125"
      x2="130"
      y2="125"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="145"
      x2="140"
      y2="145"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ColumnIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="legal-bg-icon"
  >
    <rect
      x="55"
      y="12"
      width="90"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="45"
      y="22"
      width="110"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="72"
      y1="30"
      x2="72"
      y2="162"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="92"
      y1="30"
      x2="92"
      y2="162"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="112"
      y1="30"
      x2="112"
      y2="162"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="128"
      y1="30"
      x2="128"
      y2="162"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="45"
      y="162"
      width="110"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="35"
      y="170"
      width="130"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const SealIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="legal-bg-icon"
  >
    <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="3" />
    <circle cx="100" cy="100" r="57" stroke="currentColor" strokeWidth="1.5" />

    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
      <line
        key={i}
        x1={100 + 64 * Math.cos((deg * Math.PI) / 180)}
        y1={100 + 64 * Math.sin((deg * Math.PI) / 180)}
        x2={100 + 72 * Math.cos((deg * Math.PI) / 180)}
        y2={100 + 72 * Math.sin((deg * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    ))}
  </svg>
);

/* ─── Stats ───────────────────────────────────────────────────────────── */
const stats = [
  { valueKey: "about_stat_1_value", labelKey: "about_stat_1_label" },
  { valueKey: "about_stat_2_value", labelKey: "about_stat_2_label" },
  { valueKey: "about_stat_3_value", labelKey: "about_stat_3_label" },
  { valueKey: "about_stat_4_value", labelKey: "about_stat_4_label" },
] as const;

/* ─── Component ───────────────────────────────────────────────────────── */
const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const details = [
    {
      icon: Briefcase,
      titleKey: "about_experience_title" as const,
      descKey: "about_experience_desc" as const,
    },
    {
      icon: GraduationCap,
      titleKey: "about_academic_title" as const,
      descKey: "about_academic_desc" as const,
    },
    {
      icon: Languages,
      titleKey: "about_languages_title" as const,
      descKey: "about_languages_desc" as const,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* ── Decorative legal background icons ── */}
      <div className="pointer-events-none absolute inset-0 z-0 text-[#b8973a]">
        {/* top-left: scales */}
        <div className="absolute -top-10 -left-10 w-72 h-72 opacity-[0.18]">
          <ScalesIcon />
        </div>
        {/* top-right: book */}
        <div className="absolute top-8 -right-12 w-64 h-64 opacity-[0.15]">
          <BookIcon />
        </div>
        {/* center-right: column */}
        <div className="absolute top-1/3 right-4 w-52 h-52 opacity-[0.13]">
          <ColumnIcon />
        </div>
        {/* bottom-left: seal */}
        <div className="absolute bottom-8 left-6 w-48 h-48 opacity-[0.13]">
          <SealIcon />
        </div>
        {/* bottom-center: gavel */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-56 opacity-[0.13]">
          <GavelIcon />
        </div>
        {/* mid-left: small scales */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-44 h-44 opacity-[0.11]">
          <ScalesIcon />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              {t("about_label")}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ── Left: Photo + Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src={yosrPhoto}
                  alt="Me. Yosr Ben Attia - Avocate à Tunis"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-accent/90 text-white text-xs font-medium px-3 py-1.5 rounded-md tracking-wide">
                  Avocate au Barreau de Tunis
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors group"
                  >
                    <div
                      className="text-2xl lg:text-3xl font-bold mb-1 leading-none"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        background: "linear-gradient(135deg, #b8973a, #e4c668)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {t(stat.valueKey)}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium leading-snug">
                      {t(stat.labelKey)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Text + Details ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t("about_title")}
              </h2>

              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                {t("about_description")}
              </p>

              {/* Detail cards */}
              <div className="space-y-3">
                {details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(184,151,58,0.12)" }}
                    >
                      <detail.icon
                        className="h-5 w-5"
                        style={{ color: "#b8973a" }}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {t(detail.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(detail.descKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
