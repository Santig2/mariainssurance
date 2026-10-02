"use client";

import { motion } from "framer-motion";
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

const services = [
  {
    id: "salud-aca",
    icon: HeartPulse,
    category: "Salud Familiar",
    title: "Seguros de Salud (Obamacare / ACA)",
    tagline: "Planes con subsidio gubernamental según tus ingresos",
    description: "Cobertura médica integral con subsidios que pueden reducir tu mensualidad a $0 o montos muy bajos. Te ayudo a calcular tu subsidio real y elegir el mejor plan de la red.",
    features: [
      "Consultas médicas preventivas al 100%",
      "Medicamentos recetados y urgencias",
      "Redes con Oscar, Ambetter, Cigna, AmeriHealth y UHC",
      "Inscripción anual y periodos especiales de vida",
    ],
    highlight: "Subsidios disponibles según elegibilidad",
  },
  {
    id: "planes-privados",
    icon: Sparkles,
    category: "Sin Barrera Migratoria",
    title: "Planes Privados de Salud",
    tagline: "Tu estatus migratorio no define tu acceso a la salud",
    description: "Planes de salud médicos privados disponibles todo el año para personas en asilo pendiente, DACA, visas de trabajo o sin documentos de residencia formal.",
    features: [
      "Sin requisito de seguro social o estatus definitivo",
      "Afiliación abierta los 365 días del año",
      "Respaldado por Manhattan Life, MedBlue y UHOne",
      "Planes individuales y familiares a tu medida",
    ],
    highlight: "Disponibilidad 365 días al año",
    isSpecial: true,
  },
  {
    id: "dental-vision",
    icon: Smile,
    category: "Beneficios Complementarios",
    title: "Dental, Visión & Audición",
    tagline: "El complemento esencial para cuidar tu bienestar completo",
    description: "La mayoría de los seguros de salud no cubren tratamientos dentales mayores o lentes. Estos planes previenen gastos imprevistos de bolsillo.",
    features: [
      "Limpiezas, extracciones y endodoncias",
      "Exámenes de la vista y monturas/lentes",
      "Sin tiempos de espera para chequeos preventivos",
      "Precios accesibles mensuales para toda la familia",
    ],
    highlight: "Cuidado integral para tu sonrisa",
  },
  {
    id: "proteccion-financiera",
    icon: ShieldCheck,
    category: "Protección Financiera",
    title: "Protección de Ingresos y Accidentes",
    tagline: "Si no puedes trabajar por salud, tus cuentas siguen pagas",
    description: "Si sufres una enfermedad crítica o un accidente imprevisto, este seguro te entrega dinero en efectivo directo a ti para pagar renta, alimentos y facturas.",
    features: [
      "Indemnización directa a tu cuenta bancaria",
      "Protección ante enfermedades graves y cirugías",
      "Mantiene la estabilidad económica de tu hogar",
      "Fácil calificación y activación inmediata",
    ],
    highlight: "Dinero en efectivo directo a tu bolsillo",
  },
  {
    id: "vida-asistencia",
    icon: HeartHandshake,
    category: "Tranquilidad Familiar",
    title: "Seguro de Vida & Asistencia Funeraria",
    tagline: "Garantiza que tus seres queridos nunca queden desamparados",
    description: "Soluciones de vida con National Life Group con beneficios en vida, además de cobertura funeraria internacional garantizada con Assure For Life.",
    features: [
      "Seguros de Vida con National Life Group (beneficios en vida)",
      "Asistencia funeraria integral con Assure For Life",
      "Cobertura y repatriación si la familia lo requiere",
      "Paz mental sin dejar deudas a tus hijos",
    ],
    highlight: "Beneficios en vida y repatriación",
  },
  {
    id: "retiro-anualidades",
    icon: TrendingUp,
    category: "Planificación de Futuro",
    title: "Anualidades & Planificación del Retiro",
    tagline: "Construye un patrimonio seguro sin riesgo de mercado",
    description: "Herramientas financieras diseñadas para proteger y multiplicar tus ahorros con tasas garantizadas, asegurando un retiro digno y libre de sobresaltos.",
    features: [
      "Protección contra pérdidas del mercado financiero",
      "Crecimiento con ventajas fiscales en EE.UU.",
      "Ingresos garantizados para tu etapa de jubilación",
      "Estrategia paso a paso para trabajadores independientes",
    ],
    highlight: "Crecimiento seguro y garantizado",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FAF6EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest mb-3">
            Portafolio de Soluciones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B]">
            Soluciones a la medida de tu familia
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#4A4A6A] font-sans font-light">
            No todas las familias tienen la misma situación ni el mismo presupuesto. 
            Te acompaño a analizar todas las alternativas oficiales para que tomes la mejor decisión con tranquilidad.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id === "planes-privados" ? "planes-privados" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                item.isSpecial
                  ? "bg-gradient-to-b from-[#1B2D5B] to-[#121F40] text-white shadow-2xl ring-2 ring-[#C9A84C]"
                  : "bg-white border border-[#C9A84C]/25 shadow-md hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Special Badge if Private Plan */}
              {item.isSpecial && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#C9A84C] text-[#1B2D5B] text-[11px] font-bold tracking-wider uppercase font-sans shadow-md">
                  ★ Sin estatus requerido
                </div>
              )}

              <div>
                {/* Category & Icon */}
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

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold mb-2 ${
                    item.isSpecial ? "text-white" : "text-[#1B2D5B]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Tagline */}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    item.isSpecial ? "text-[#C9A84C]" : "text-[#4A4A6A]"
                  }`}
                >
                  {item.tagline}
                </p>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 font-light ${
                    item.isSpecial ? "text-white/80" : "text-[#4A4A6A]"
                  }`}
                >
                  {item.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2.5 mb-8">
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

              {/* Bottom CTA Card link */}
              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <a
                  href="#cotizar"
                  className={`group inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    item.isSpecial
                      ? "bg-[#C9A84C] text-[#1B2D5B] hover:bg-white"
                      : "bg-[#1B2D5B]/5 hover:bg-[#1B2D5B] text-[#1B2D5B] hover:text-white"
                  }`}
                >
                  <span>Consultar este servicio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Private Plans Special Callout Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#1B2D5B] via-[#2A4585] to-[#1B2D5B] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-[#C9A84C]/50">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">
              Un mensaje para nuestra comunidad
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              "Tu estatus migratorio no define tu derecho a tener acceso a la salud."
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Si recientemente llegaste al país, estás en espera de asilo, tienes parole o 
              no calificas para subsidios ACA por cualquier motivo, <strong>existen alternativas reales</strong> con 
              aseguradoras como Manhattan Life, MedBlue y UHOne. No tienes por qué postergar tu salud ni la de tus hijos.
            </p>
            <div className="pt-2">
              <a
                href="#cotizar"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>Hablemos de tus alternativas en privado</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
