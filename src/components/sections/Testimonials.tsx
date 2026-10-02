"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Carlos & Elena M.",
    location: "Miami, FL",
    service: "Obamacare / ACA Plan",
    quote:
      "Teníamos miedo de aplicar porque mi esposo aún tiene su trámite migratorio en curso y pensábamos que afectaría nuestra regularización. María nos explicó con toda paciencia que la salud no se niega y encontramos un plan excelente con prima de $0 al mes.",
    stars: 5,
  },
  {
    name: "Maribel R.",
    location: "Hialeah, FL",
    service: "Plan Privado PPO (Sin estatus)",
    quote:
      "Llegué hace menos de un año a los Estados Unidos y ninguna agencia me daba opciones claras sin seguro social regular. María me presentó una alternativa privada con Manhattan Life que cubrió las consultas de mis hijos y exámenes de rutina.",
    stars: 5,
  },
  {
    name: "Javier D.",
    location: "Doral, FL",
    service: "Seguro de Vida & Asistencia Funeraria",
    quote:
      "Trabajo como contratista independiente y si a mí me pasa algo, mi familia se quedaba sin sustento. María me estructuró una póliza con National Life Group con beneficios en vida y la cobertura de repatriación con Assure For Life.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-3">
            Historias Reales de Familias Reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B]">
            La confianza que se gana con hechos
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
        </div>

        <div className="mb-14 rounded-3xl overflow-hidden relative shadow-xl border border-[#C9A84C]/30 max-h-80">
          <Image
            src="/images/family-protection.jpg"
            alt="Familia hispana protegida"
            width={1280}
            height={450}
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D5B]/90 via-[#1B2D5B]/50 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-md text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-[#C9A84C] block mb-2">
                Tranquilidad Garantizada
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                "Cuidar a los tuyos es la mejor decisión que puedes tomar hoy."
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-md flex flex-col justify-between relative group hover:border-[#C9A84C] transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#C9A84C]">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A84C]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#E8C5B0] mb-3 opacity-60" />
                <p className="text-sm text-[#4A4A6A] leading-relaxed font-light mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <div className="font-serif font-bold text-base text-[#1B2D5B]">
                  {t.name}
                </div>
                <div className="text-xs text-[#C9A84C] font-semibold">
                  {t.service}
                </div>
                <div className="text-[11px] text-[#4A4A6A]/80">
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/testimonios"
            className="text-xs uppercase tracking-wider font-bold text-[#1B2D5B] hover:text-[#C9A84C] underline decoration-[#C9A84C] decoration-2 underline-offset-4"
          >
            Ver más testimonios y experiencias de clientes →
          </Link>
        </div>

      </div>
    </section>
  );
}
