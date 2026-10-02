"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Scale, FileText, UserCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    name: "Conozco",
    description:
      "Escucho tu historia con empatía y confidencialidad. Identificamos tu situación familiar, ciudad de residencia, presupuesto real y necesidades médicas inmediatas.",
  },
  {
    num: "02",
    icon: Search,
    name: "Analizo",
    description:
      "Evalúo minuciosamente si eres elegible para subsidios del gobierno (ACA / Obamacare) o si la ruta más conveniente es un plan médico privado sin requisitos migratorios.",
  },
  {
    num: "03",
    icon: Scale,
    name: "Comparo",
    description:
      "Revisamos juntos las opciones en las aseguradoras oficiales (Oscar, Ambetter, Manhattan Life, MedBlue, etc.). Cotejamos copagos, deducibles y redes de doctores.",
  },
  {
    num: "04",
    icon: FileText,
    name: "Explico",
    description:
      "Te traduzco cada término en un español cotidiano, claro y sin letra chica. Sabrás con exactitud qué cubre, qué no cubre y exactamente cuánto pagarás.",
  },
  {
    num: "05",
    icon: UserCheck,
    name: "Acompaño",
    description:
      "Mi labor no termina cuando te inscribes. Si necesitas cambiar de médico, pedir una tarjeta digital o resolver un reclamo, me llamas directamente a mí.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#1B2D5B] text-white relative overflow-hidden bg-gold-dots-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-3">
            Filosofía & Transparencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Mi forma de trabajar
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
          <p className="text-base sm:text-lg text-white/80 font-sans font-light">
            Un proceso de 5 pasos diseñado para que tomes el control de tu salud con dignidad, 
            tranquilidad y el acompañamiento de una persona real que responde por ti.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Step Number with Warm Gold accent */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-bold text-[#C9A84C]/40 group-hover:text-[#C9A84C] transition-colors">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-[#C9A84C]/15 text-[#C9A84C]">
                  <step.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {step.name}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action strip */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#E8C5B0] italic mb-6">
            "No vendo pólizas por vender; construyo relaciones de protección a largo plazo con mi gente."
          </p>
          <a
            href="#cotizar"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
          >
            <span>Iniciemos el Paso 1: Conozcámonos hoy</span>
          </a>
        </div>

      </div>
    </section>
  );
}
