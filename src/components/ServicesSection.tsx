import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Scale,
  Landmark,
  ShieldCheck,
  Monitor,
  Leaf,
  Briefcase,
  Building2,
  Users,
  Shield,
  Gavel,
} from "lucide-react";

const services = [
  { titleKey: "service_1_title", descKey: "service_1_desc", icon: Scale },
  { titleKey: "service_2_title", descKey: "service_2_desc", icon: Landmark },
  { titleKey: "service_3_title", descKey: "service_3_desc", icon: ShieldCheck },
  { titleKey: "service_4_title", descKey: "service_4_desc", icon: Monitor },
  { titleKey: "service_5_title", descKey: "service_5_desc", icon: Leaf },
  { titleKey: "service_6_title", descKey: "service_6_desc", icon: Briefcase },
  { titleKey: "service_7_title", descKey: "service_7_desc", icon: Building2 },
  { titleKey: "service_8_title", descKey: "service_8_desc", icon: Users },
  { titleKey: "service_9_title", descKey: "service_9_desc", icon: Shield },
  { titleKey: "service_10_title", descKey: "service_10_desc", icon: Gavel },
] as const;

/* ─── Thin decorative corner SVG ─────────────────────────────────── */
const CornerAccent: React.FC<{
  className?: string;
  flip?: boolean;
  style?: React.CSSProperties;
}> = ({ className = "", flip = false, style }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    style={{ ...(flip ? { transform: "rotate(180deg)" } : {}), ...style }}
  >
    <path
      d="M2 38 L2 2 L38 2"
      stroke="#b8973a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ─── Card component ─────────────────────────────────────────────── */
const ServiceCard: React.FC<{
  service: (typeof services)[number];
  i: number;
  hovered: number | null;
  setHovered: (v: number | null) => void;
  t: (key: string) => string;
  style?: React.CSSProperties;
}> = ({ service, i, hovered, setHovered, t, style }) => {
  const isHovered = hovered === i;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.06 }}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      // AJOUT : items-center et text-center pour le centrage global
      className="relative group cursor-default flex flex-col items-center text-center"
      style={{
        background: isHovered
          ? "linear-gradient(145deg, rgba(184,151,58,0.12) 0%, rgba(20,26,40,0.98) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: isHovered
          ? "0.5px solid rgba(184,151,58,0.5)"
          : "0.5px solid rgba(245,240,232,0.08)",
        borderRadius: "14px",
        padding: "40px 30px",
        transition: "all 0.35s ease",
        backdropFilter: "blur(12px)",
        ...style,
      }}
    >
      <CornerAccent
        className="absolute top-3 left-3 w-5 h-5"
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <CornerAccent
        className="absolute bottom-3 right-3 w-5 h-5"
        flip
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease" }}
      />

      {/* Icon Container - Centré par items-center sur le parent */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
        style={{
          background: isHovered
            ? "rgba(184,151,58,0.25)"
            : "rgba(184,151,58,0.1)",
          border: "1px solid rgba(184,151,58,0.3)",
          transition: "all 0.3s ease",
          boxShadow: isHovered ? "0 0 20px rgba(184,151,58,0.2)" : "none",
        }}
      >
        <service.icon className="h-6 w-6" style={{ color: "#b8973a" }} />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-4 leading-snug"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: isHovered ? "#e4c668" : "#f5f0e8",
          transition: "color 0.3s ease",
        }}
      >
        {t(service.titleKey)}
      </h3>

      {/* Gold separator - Centré horizontalement */}
      <div
        className="mb-5 mx-auto"
        style={{
          height: "1px",
          width: isHovered ? "60px" : "30px",
          background:
            "linear-gradient(to right, transparent, #b8973a, transparent)",
          transition: "width 0.35s ease",
        }}
      />

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-2 opacity-80"
        style={{ color: "rgba(245,240,232,0.7)" }}
      >
        {t(service.descKey)}
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const mainServices = services.slice(0, 9);
  const lastService = services[9];

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Texture de fond discrète */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8973a]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#b8973a]">
                {t("services_label")}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8973a]" />
            </div>

            <h2
              className="text-4xl lg:text-6xl font-bold mb-6 text-[#f5f0e8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("services_title")}
            </h2>

            <p className="text-base lg:text-lg max-w-2xl mx-auto text-secondary/50 leading-relaxed">
              {t("services_subtitle")}
            </p>
          </motion.div>

          {/* ── Grid 9 items ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {mainServices.map((service, i) => (
              <ServiceCard
                key={i}
                service={service}
                i={i}
                hovered={hovered}
                setHovered={setHovered}
                t={t}
              />
            ))}
          </div>

          {/* ── Last item centered ── */}
          <div className="flex justify-center">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ServiceCard
                service={lastService}
                i={9}
                hovered={hovered}
                setHovered={setHovered}
                t={t}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
