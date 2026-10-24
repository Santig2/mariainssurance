"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  HeartPulse, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  HeartHandshake, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { BRAND } from "@/lib/constants";

const servicesList = [
  {
    icon: HeartPulse,
    category: "Salud Familiar",
    title: "Seguro de Salud (Obamacare / ACA)",
    tagline: "Planes con subsidio gubernamental según tus ingresos",
    description: "Cobertura médica integral con subsidios que pueden reducir tu mensualidad a $0 o primas muy bajas con Oscar, Ambetter, Cigna y UHC.",
    features: [
      "Consultas médicas preventivas al 100%",
      "Medicamentos recetados y urgencias hospitalarias",
      "Cálculo de subsidio exacto y transparente",
    ],
    path: "/servicios/seguro-de-salud",
    isSpecial: false,
  },
  {
    icon: Sparkles,
    category: "Sin Barrera Migratoria",
    title: "Planes Privados de Salud (PPO)",
    tagline: "Tu estatus migratorio no define tu acceso a la salud",
    description: "Planes privados disponibles todo el año para asilo en trámite, DACA o sin documentos de residencia formal con Manhattan Life y MedBlue.",
    features: [
      "Sin requisito de seguro social o estatus migratorio",
      "Afiliación abierta los 365 días del año",
      "Red amplia de clínicas y hospitales",
    ],
    path: "/servicios/planes-privados",
    isSpecial: true,
  },
  {
    icon: HeartHandshake,
    category: "Tranquilidad Familiar",
    title: "Seguro de Vida & Asistencia Funeraria",
    tagline: "Beneficios en vida y cobertura garantizada",
    description: "Pólizas con beneficios en vida ante enfermedades graves con National Life Group y cobertura funeraria con repatriación de Assure For Life.",
    features: [
      "Indemnización en vida por enfermedad crítica",
      "Repatriación y cobertura funeraria internacional",
      "Paz mental sin dejar deudas a tus hijos",
    ],
    path: "/servicios/seguro-de-vida",
    isSpecial: false,
  },
  {
    icon: TrendingUp,
    category: "Planificación de Futuro",
    title: "Anualidades & Planificación de Retiro",
    tagline: "Multiplica tus ahorros sin riesgo de mercado",
    description: "Estrategias de jubilación con capital garantizado y ventajas fiscales diseñadas para contratistas, dueños de negocio y trabajadores independientes.",
    features: [
      "Protección contra caídas del mercado bursátil",
      "Rentas vitalicias o crecimiento indexado",
      "Asesoría personalizada paso a paso",
    ],
    path: "/servicios/planificacion-retiro",
    isSpecial: false,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FAF6EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest mb-3">
            Portafolio Completo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B]">
            Soluciones adaptadas a tu familia
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#4A4A6A] font-sans font-light">
            Revisamos todas las alternativas oficiales para garantizarte la máxima protección dentro de tu presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                item.isSpecial
                  ? "bg-gradient-to-b from-[#1B2D5B] to-[#121F40] text-white shadow-2xl ring-2 ring-[#C9A84C]"
                  : "bg-white border border-[#C9A84C]/25 shadow-md hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {item.isSpecial && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#C9A84C] text-[#1B2D5B] text-[11px] font-bold tracking-wider uppercase font-sans shadow-md">
                  ★ Sin estatus requerido
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      item.isSpecial ? "text-[#E8C5B0]" : "text-[#C9A84C]"
                    }`}
                  >
                    {item.category}
                  </span>
                  <div
                    className={`p-3 rounded-2xl ${
                      item.isSpecial
                        ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                        : "bg-[#1B2D5B]/5 text-[#1B2D5B]"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold mb-2 ${
                    item.isSpecial ? "text-white" : "text-[#1B2D5B]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    item.isSpecial ? "text-[#C9A84C]" : "text-[#4A4A6A]"
                  }`}
                >
                  {item.tagline}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 font-light ${
                    item.isSpecial ? "text-white/80" : "text-[#4A4A6A]"
                  }`}
                >
                  {item.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          item.isSpecial ? "text-[#C9A84C]" : "text-[#C9A84C]"
                        }`}
                      />
                      <span className={item.isSpecial ? "text-white/90" : "text-[#1A1A2E]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <Link
                  href={item.path}
                  className={`group inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    item.isSpecial
                      ? "bg-[#C9A84C] text-[#1B2D5B] hover:bg-white"
                      : "bg-[#1B2D5B]/5 hover:bg-[#1B2D5B] text-[#1B2D5B] hover:text-white"
                  }`}
                >
                  <span>Ver detalles del plan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
