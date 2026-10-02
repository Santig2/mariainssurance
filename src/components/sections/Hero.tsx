"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

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
    <section className="relative w-full h-[100dvh] overflow-hidden mt-[-120px] pt-[120px] bg-[#050505]">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={bgIndex}
          src={BACKGROUNDS[bgIndex]}
          alt="María Arias - Protección para familias hispanas"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.85, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-[70%_50%]"
        />
      </AnimatePresence>

      {/* Editorial Vignette / Gradient */}
      {/* Dark gradient on the left to ensure text readability, fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent w-full sm:w-[60%] z-10" />
      {/* Dark gradient from bottom for a solid grounding */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent h-1/2 mt-auto z-10" />

      {/* Content Container - Aligned Bottom Left (Editorial Split) */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20 sm:pb-28">
        <div className="max-w-xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white mb-6 shadow-xl"
          >
            <Shield className="w-4 h-4 text-[#C9A84C]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase font-sans">
              Seguros de Salud & Vida · USA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl lg:text-[4rem] font-serif font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Protección <br className="hidden sm:block" /> para hoy. <br/>
            <span className="italic font-normal text-[#C9A84C]">Planificación <br className="hidden sm:block" /> para mañana.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg text-white/80 font-sans font-light max-w-lg mb-10 leading-relaxed"
          >
            La tranquilidad de tu familia no es un lujo, es una decisión. Te asesoro en tu idioma, sin presión y con absoluta transparencia en cada paso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <Link
              href="/cotizar"
              className="group inline-flex items-center justify-between gap-6 px-8 py-4 sm:py-5 rounded-full bg-[#C9A84C] text-[#1B2D5B] text-sm sm:text-base font-bold uppercase tracking-widest transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
            >
              <span>Explorar Opciones</span>
              <div className="w-8 h-8 rounded-full bg-[#1B2D5B]/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform">
                <ArrowRight className="w-4 h-4 text-[#1B2D5B]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
