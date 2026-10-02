"use client";

import { motion } from "framer-motion";
import { Users, Building2, Star, Calendar, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+500",
    label: "Familias Protegidas",
    sub: "En Florida, Texas y más",
  },
  {
    icon: Building2,
    value: "+10",
    label: "Aseguradoras Aliadas",
    sub: "Planes públicos y privados",
  },
  {
    icon: Star,
    value: "4.9 ★",
    label: "Calificación Promedio",
    sub: "De satisfacción y confianza",
  },
  {
    icon: Calendar,
    value: "+3 Años",
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

const carriers = [
  { name: "Oscar Health", category: "ACA / Marketplace" },
  { name: "Ambetter", category: "ACA / Marketplace" },
  { name: "Cigna Healthcare", category: "ACA / Privado" },
  { name: "AmeriHealth Caritas", category: "ACA / Marketplace" },
  { name: "UnitedHealthcare", category: "Salud Integral" },
  { name: "MedBlue", category: "Salud Privada" },
  { name: "Manhattan Life", category: "Salud & Dental" },
  { name: "UHOne", category: "Planes Privados" },
  { name: "National Life Group", category: "Seguro de Vida" },
  { name: "Assure For Life", category: "Asistencia Funeraria" },
];

export function TrustSection() {
  return (
    <section className="bg-[#1B2D5B] text-white py-16 lg:py-20 relative overflow-hidden bg-gold-dots-navy">
      {/* Decorative top & bottom thin gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Counter Badges */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 pb-14 border-b border-[#C9A84C]/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
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

        {/* Carrier Logos / Partners Strip */}
        <div className="pt-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-8">
            Compañías Aseguradoras con las que trabajamos
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {carriers.map((carrier, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#C9A84C]/30 text-xs sm:text-sm font-sans tracking-wide text-[#FAF6EF] transition-all duration-300 hover:border-[#C9A84C] hover:-translate-y-0.5 shadow-sm"
              >
                <span className="font-semibold text-white">{carrier.name}</span>
                <span className="text-[10px] text-[#C9A84C] ml-2 opacity-80">· {carrier.category}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#FAF6EF]/60 mt-8 italic max-w-xl mx-auto">
            Acceso a las principales aseguradoras reguladas para comparar y garantizar la prima más adecuada según tu presupuesto familiar.
          </p>
        </div>

      </div>
    </section>
  );
}
