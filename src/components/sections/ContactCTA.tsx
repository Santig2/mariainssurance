"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-[#1B2D5B] via-[#2A4585] to-[#1B2D5B] text-white py-16 lg:py-20 relative overflow-hidden border-t border-[#C9A84C]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">
          Asesoría Personalizada Sin Costo
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
          ¿Listo para proteger la salud y el futuro de tu familia?
        </h2>
        <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
          En una breve llamada de 10 minutos evaluamos tus opciones, calculamos tus subsidios y 
          te entregamos una cotización clara y sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/cotizar"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Cotizar en Línea Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C9A84C]" />
            <span>Llamar: {BRAND.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
