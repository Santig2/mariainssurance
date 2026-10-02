"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#FAF6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-3 rounded-[2.5rem] bg-white border border-[#C9A84C]/40 shadow-2xl">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#1B2D5B]">
                <Image
                  src="/images/maria/portrait.png"
                  alt={BRAND.fullName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 max-w-xs p-4 rounded-2xl bg-[#1B2D5B] text-white border border-[#C9A84C] shadow-xl">
                <div className="flex items-center gap-1.5 text-[#C9A84C] mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#C9A84C]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">
                    Mi Compromiso
                  </span>
                </div>
                <p className="text-xs font-light text-white/90 italic leading-snug">
                  "No eres un número de póliza más. Eres una familia que merece estar segura y tranquila en este país."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest">
              Conoce a tu Agente
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              {BRAND.fullName}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
              {BRAND.title} · Warm Authority
            </p>

            <div className="space-y-4 text-base text-[#4A4A6A] font-light leading-relaxed">
              <p>
                Desde que comencé en el sector asegurador en el año <strong className="font-semibold text-[#1B2D5B]">{BRAND.sinceYear}</strong>, 
                descubrí que la mayor barrera para los hispanos en EE.UU. no es la falta de seguros, sino la desinformación y el miedo al rechazo 
                por su estatus migratorio.
              </p>
              <p>
                Mi filosofía de <strong className="text-[#1B2D5B] font-semibold">Warm Authority</strong> combina el rigor técnico de una agente 
                licenciada en 5 estados con la calidez y cercanía de una persona de tu misma cultura que vela por tus finanzas y tu salud.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-[#1A1A2E]">
                <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#C9A84C] stroke-[3]" />
                </div>
                <span>Licencia activa oficial en FL, NC, SC, TX y NJ</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1A1A2E]">
                <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#C9A84C] stroke-[3]" />
                </div>
                <span>Más de 500 familias asesoradas en su idioma</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1A1A2E]">
                <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#C9A84C] stroke-[3]" />
                </div>
                <span>Asesoría 100% gratuita y sin presión</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B2D5B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#121F40] transition-colors"
              >
                <span>Leer mi historia completa</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
