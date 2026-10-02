"use client";

import { motion } from "framer-motion";
import { Users, Building2, Star, Calendar, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";

const stats = [
  {
    icon: Users,
    value: BRAND.familiesProtected,
    label: "Familias Protegidas",
    sub: "En FL, TX y otros estados",
  },
  {
    icon: Building2,
    value: BRAND.partnerCompaniesCount,
    label: "Aseguradoras Aliadas",
    sub: "Planes públicos y privados",
  },
  {
    icon: Star,
    value: BRAND.rating,
    label: "Calificación Promedio",
    sub: "Satisfacción y confianza",
  },
  {
    icon: Calendar,
    value: BRAND.yearsExperience,
    label: "De Trayectoria",
    sub: "Dedicada a la comunidad",
  },
  {
    icon: MapPin,
    value: "5 Estados",
    label: "Con Licencia Activa",
    sub: "FL, NC, SC, TX, NJ",
  },
];

export function Counters() {
  return (
    <section className="bg-[#1B2D5B] text-white py-14 relative overflow-hidden bg-gold-dots-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="text-center group p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C9A84C]/40 transition-colors"
            >
              <div className="inline-flex p-2.5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#FAF6EF]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#E8C5B0] mt-1 font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
