"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 mx-auto max-w-6xl px-4 sm:px-6 transition-all">
      <div className="bg-[#FAF6EF]/95 backdrop-blur-2xl border border-[#C9A84C]/30 shadow-xl rounded-full px-6 sm:px-10 py-1">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center py-1">
            <img 
              src="/images/maria/logosinfondo.png" 
              alt={BRAND.name} 
              className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* Right Area: Phone + CTA */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href={`tel:${BRAND.phoneRaw}`} className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#1B2D5B] hover:text-[#C9A84C] transition-colors">
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
            
            <Link href="/cotizar" className="group flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-[#1B2D5B] text-white text-xs sm:text-sm font-bold uppercase hover:bg-[#121F40] transition-all hover:scale-105 shadow-md">
              <span className="hidden sm:inline">Cotizar Gratis</span>
              <span className="sm:hidden">Cotizar</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
