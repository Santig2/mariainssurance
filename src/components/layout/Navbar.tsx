"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-5 z-50 mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300">
      <div className="bg-[#FAF6EF]/92 backdrop-blur-xl border border-[#C9A84C]/35 rounded-full px-5 sm:px-8 py-1.5 sm:py-2 shadow-[0_10px_35px_rgba(27,45,91,0.09),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center shrink-0 pr-4 lg:pr-8 group py-0.5">
            <img 
              src="/images/maria/logosinfondo.png" 
              alt={BRAND.name} 
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation Links - Espacio amplio y equilibrado */}
          <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-10 xl:gap-12 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1B2D5B]/85">
            <Link 
              href="/servicios" 
              className="py-1 px-1.5 hover:text-[#C9A84C] transition-colors relative group/link"
            >
              <span>Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-200 group-hover/link:w-full" />
            </Link>
            <Link 
              href="/sobre-mi" 
              className="py-1 px-1.5 hover:text-[#C9A84C] transition-colors relative group/link"
            >
              <span>Sobre Mí</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-200 group-hover/link:w-full" />
            </Link>
            <Link 
              href="/testimonios" 
              className="py-1 px-1.5 hover:text-[#C9A84C] transition-colors relative group/link"
            >
              <span>Testimonios</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-200 group-hover/link:w-full" />
            </Link>
            <Link 
              href="/blog" 
              className="py-1 px-1.5 hover:text-[#C9A84C] transition-colors relative group/link"
            >
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-200 group-hover/link:w-full" />
            </Link>
            <Link 
              href="/contacto" 
              className="py-1 px-1.5 hover:text-[#C9A84C] transition-colors relative group/link"
            >
              <span>Contacto</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-200 group-hover/link:w-full" />
            </Link>
          </nav>

          {/* Right Area: Phone + CTA con separación clara */}
          <div className="flex items-center shrink-0 gap-4 sm:gap-6 pl-4 lg:pl-8 border-l border-[#C9A84C]/25">
            <a 
              href={`tel:${BRAND.phoneRaw}`} 
              className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#1B2D5B] hover:text-[#C9A84C] transition-colors whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded-full bg-[#1B2D5B]/5 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
              </div>
              <span>{BRAND.phone}</span>
            </a>
            
            <Link 
              href="/cotizar" 
              className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1B2D5B] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-[#121F40] active:scale-[0.98] transition-all shadow-sm hover:shadow"
            >
              <span className="hidden sm:inline">Cotizar Gratis</span>
              <span className="sm:hidden">Cotizar</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#1B2D5B] hover:text-[#C9A84C] hover:bg-black/5 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-1 rounded-2xl bg-[#FAF6EF]/95 backdrop-blur-2xl border border-[#C9A84C]/30 p-5 shadow-xl font-sans text-xs font-semibold uppercase tracking-wider space-y-3">
          <Link 
            href="/servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#1B2D5B] hover:bg-[#C9A84C]/15 transition-colors"
          >
            Servicios
          </Link>
          <Link 
            href="/sobre-mi" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#1B2D5B] hover:bg-[#C9A84C]/15 transition-colors"
          >
            Sobre Mí
          </Link>
          <Link 
            href="/testimonios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#1B2D5B] hover:bg-[#C9A84C]/15 transition-colors"
          >
            Testimonios
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#1B2D5B] hover:bg-[#C9A84C]/15 transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#1B2D5B] hover:bg-[#C9A84C]/15 transition-colors"
          >
            Contacto
          </Link>
          <div className="pt-3 border-t border-[#C9A84C]/20">
            <a 
              href={`tel:${BRAND.phoneRaw}`} 
              className="flex items-center gap-2.5 px-3 py-2 text-[#1B2D5B] font-bold"
            >
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              <span>{BRAND.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
