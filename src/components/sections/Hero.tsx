"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";

const BACKGROUNDS = [
  "/images/hero/bg-1.jpg",
  "/images/hero/bg-2.jpg",
  "/images/hero/bg-3.jpg",
  "/images/hero/bg-4.jpg",
];

export function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden mt-[-68px] pt-[68px] sm:mt-[-78px] sm:pt-[78px] bg-[#050505]">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={bgIndex}
          src={BACKGROUNDS[bgIndex]}
          alt="María Arias - Protección y seguros de salud y vida para familias hispanas"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.85, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] sm:object-[68%_center] pointer-events-none"
        />
      </AnimatePresence>

      {/* Editorial Vignettes & Gradients */}
      {/* Left gradient for flawless text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent w-full md:w-[65%] z-10 pointer-events-none" />
      {/* Top subtle vignette for slim navbar integration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505]/75 via-[#050505]/40 to-transparent z-10 pointer-events-none" />
      {/* Bottom gradient grounding */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent h-1/3 mt-auto z-10 pointer-events-none" />

      {/* Content Container - Editorial Left Aligned with Golden Ratio Spacing */}
      <div className="relative z-20 w-full min-h-[calc(100dvh-68px)] sm:min-h-[calc(100dvh-78px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-16 sm:py-24">
        <div className="max-w-2xl">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white mb-5 shadow-lg"
          >
            <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase font-sans text-white/90">
              Seguros de Salud & Vida · USA
            </span>
          </motion.div>

          {/* Headline - Editorial Two-line Cadence */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.9rem] font-serif font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            Protección para hoy.
            <span className="block italic font-normal text-[#C9A84C] mt-1 sm:mt-2">
              Planificación para mañana.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="text-sm sm:text-base lg:text-lg text-white/85 font-sans font-light max-w-xl mb-8 sm:mb-9 leading-relaxed"
          >
            La tranquilidad de tu familia no es un lujo, es una decisión. Te asesoro en tu idioma, sin presión y con absoluta transparencia en cada paso.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <Link
              href="/cotizar"
              className="group inline-flex items-center justify-between sm:justify-start gap-4 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C9A84C] hover:bg-[#DFBE65] text-[#1B2D5B] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-[#C9A84C]/25"
            >
              <span>Explorar Opciones</span>
              <div className="w-7 h-7 rounded-full bg-[#1B2D5B]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#1B2D5B]" />
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 text-xs text-white/75 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
              <span>Asesoría personalizada · 100% en español</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
