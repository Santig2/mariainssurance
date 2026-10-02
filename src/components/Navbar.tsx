"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Shield, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#C9A84C]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1B2D5B] group-hover:text-[#C9A84C] transition-colors">
              María Arias
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#C9A84C] font-semibold">
              Licensed Insurance Agent
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium">
            <Link
              href="#servicios"
              className="text-[#1A1A2E] hover:text-[#1B2D5B] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#planes-privados"
              className="relative text-[#1B2D5B] font-semibold hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
              Planes Privados
            </Link>
            <Link
              href="#metodo"
              className="text-[#1A1A2E] hover:text-[#1B2D5B] transition-colors"
            >
              Cómo Trabajo
            </Link>
            <Link
              href="#sobre-mi"
              className="text-[#1A1A2E] hover:text-[#1B2D5B] transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#preguntas"
              className="text-[#1A1A2E] hover:text-[#1B2D5B] transition-colors"
            >
              Preguntas
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13050000000"
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1B2D5B] hover:text-[#C9A84C] transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              <span>(305) 555-0192</span>
            </a>
            <a
              href="#cotizar"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B2D5B] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#121F40] shadow-sm hover:shadow-md"
            >
              <span>Revisemos tus opciones</span>
              <span className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="#cotizar"
              className="px-3 py-1.5 rounded-full bg-[#1B2D5B] text-white text-xs font-bold font-sans"
            >
              Cotizar
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#1B2D5B] hover:text-[#C9A84C] focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#C9A84C]/20 bg-[#FAF6EF] px-4 pt-3 pb-6 space-y-3 font-sans">
          <Link
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#1A1A2E] hover:bg-[#FAF6EF]"
          >
            Servicios de Seguros
          </Link>
          <Link
            href="#planes-privados"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1B2D5B] bg-[#E8C5B0]/30 rounded-md"
          >
            Planes Privados (Sin estatus requerido)
          </Link>
          <Link
            href="#metodo"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#1A1A2E]"
          >
            Mi Método de Asesoría
          </Link>
          <Link
            href="#sobre-mi"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#1A1A2E]"
          >
            Conoce a María Arias
          </Link>
          <Link
            href="#preguntas"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#1A1A2E]"
          >
            Preguntas Frecuentes
          </Link>
          <div className="pt-4 border-t border-[#C9A84C]/20 space-y-3">
            <a
              href="tel:+13050000000"
              className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-[#1B2D5B]"
            >
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              Llamar: (305) 555-0192
            </a>
            <a
              href="#cotizar"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-full bg-[#1B2D5B] text-white font-bold text-sm"
            >
              Revisar mis opciones gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
