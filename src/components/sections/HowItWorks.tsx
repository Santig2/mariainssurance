"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Search, Scale, FileText, UserCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#1B2D5B] text-white relative overflow-hidden bg-gold-dots-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-3">
            Filosofía & Transparencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Mi forma de trabajar
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
          <p className="text-base sm:text-lg text-white/80 font-sans font-light">
            Un proceso de 5 pasos diseñado para que tomes el control de tu tranquilidad con el respaldo 
            de una persona real que responde por ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {BRAND.methodSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A84C]/50 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-bold text-[#C9A84C]/40 group-hover:text-[#C9A84C] transition-colors">
                  {step.step}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {step.name}
              </h3>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
          >
            <span>Iniciemos el Paso 1: Conozcámonos hoy</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
