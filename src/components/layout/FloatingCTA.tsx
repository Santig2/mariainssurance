"use client";

import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2.5">
      <a
        href={`tel:${BRAND.phoneRaw}`}
        className="w-12 h-12 rounded-full bg-[#1B2D5B] text-white border border-[#C9A84C] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:bg-[#121F40]"
        aria-label="Llamar a María Arias"
      >
        <Phone className="w-5 h-5 text-[#C9A84C]" />
      </a>
      <Link
        href="/cotizar"
        className="px-4 py-2.5 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:bg-white transition-all hover:scale-105"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Cotizar Gratis</span>
      </Link>
    </div>
  );
}
