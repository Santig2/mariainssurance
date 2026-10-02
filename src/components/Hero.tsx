"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, CheckCircle2, ArrowRight, Award, Sparkles, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EF] via-[#FAF6EF] to-[#FAF6EF] pt-8 pb-20 lg:pt-16 lg:pb-32 bg-gold-dots">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B]">
              <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-sans">
                Agente de Seguros Licenciada · Desde 2022
              </span>
            </div>

            {/* Main Headline with Playfair Display */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B2D5B] leading-[1.15] tracking-tight">
              Protección para hoy.{" "}
              <span className="italic font-normal block text-[#C9A84C] mt-1">
                Planificación para mañana.
              </span>
            </h1>

            {/* Subtitle addressing primary Hispanic family pain points */}
            <p className="text-lg sm:text-xl text-[#4A4A6A] font-sans font-light leading-relaxed max-w-2xl">
              Te ayudo a entender y elegir el seguro que tu familia verdaderamente necesita: 
              en <strong className="font-semibold text-[#1B2D5B]">tu idioma</strong>, con total 
              transparencia, sin presión y con asesoría continua antes y después de cada trámite.
            </p>

            {/* Value checklist pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>Obamacare / ACA y Planes Privados</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>Opciones sin estatus migratorio requerido</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>Vida & Asistencia Funeraria Garantizada</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>Asesoría 100% gratuita y sin compromiso</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#cotizar"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1B2D5B] text-white font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#121F40] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Revisemos tus opciones juntos</span>
                <span className="w-6 h-6 rounded-full bg-[#C9A84C]/25 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                </span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#C9A84C]/60 text-[#1B2D5B] font-sans text-sm font-semibold hover:bg-[#C9A84C]/10 transition-colors"
              >
                Conoce mi método de trabajo
              </a>
            </div>

            {/* Active licensing location badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#4A4A6A]">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
              <span>
                Licencia activa en: <strong className="text-[#1B2D5B] font-semibold">Florida · North Carolina · South Carolina · Texas · New Jersey</strong>
              </span>
            </div>
          </motion.div>

          {/* Right Column: High Agency Double-Bezel Portrait of Maria */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Outer shell (Doppelrand / Double Bezel) */}
            <div className="relative p-2.5 sm:p-3 rounded-[2.5rem] bg-gradient-to-b from-[#FAF6EF] via-white to-[#E8C5B0]/30 border border-[#C9A84C]/40 shadow-2xl max-w-md w-full">
              
              {/* Inner core */}
              <div className="relative rounded-[2rem] overflow-hidden bg-[#1B2D5B] aspect-square sm:aspect-[4/5] border border-white/20">
                <Image
                  src="/images/maria-arias.jpg"
                  alt="María Rosario Arias Gómez - Agente de Seguros Licenciada"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 450px"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D5B]/90 via-transparent to-transparent" />

                {/* Floating Bottom Card inside portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#C9A84C]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-lg font-bold text-[#1B2D5B]">
                        María Arias
                      </h2>
                      <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-wider">
                        Licensed Insurance Agent
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-[#C9A84C] font-bold text-sm">
                        <span>4.9</span>
                        <Sparkles className="w-3.5 h-3.5 fill-[#C9A84C]" />
                      </div>
                      <span className="text-[10px] text-[#4A4A6A]">
                        +500 Familias
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust badge outside the frame */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-full bg-[#1B2D5B] text-white border border-[#C9A84C] shadow-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-xs font-bold font-sans tracking-wide">
                  Atención 100% en Español
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
