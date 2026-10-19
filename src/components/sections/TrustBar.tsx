"use client";

import { useState } from "react";

export interface CarrierItem {
  name: string;
  slug: string;
  domain: string;
  category: string;
}

export const CARRIERS: CarrierItem[] = [
  { name: "Oscar Health", slug: "oscar", domain: "hioscar.com", category: "ACA / Marketplace" },
  { name: "Ambetter", slug: "ambetter", domain: "ambetterhealth.com", category: "ACA / Marketplace" },
  { name: "Cigna Healthcare", slug: "cigna", domain: "cigna.com", category: "ACA & Privado" },
  { name: "AmeriHealth Caritas", slug: "amerihealth", domain: "amerihealthcaritas.com", category: "ACA / Marketplace" },
  { name: "UnitedHealthcare", slug: "unitedhealthcare", domain: "uhc.com", category: "Salud Integral" },
  { name: "Florida Blue", slug: "floridablue", domain: "floridablue.com", category: "Salud Florida" },
  { name: "Manhattan Life", slug: "manhattanlife", domain: "manhattanlife.com", category: "Salud, Dental & Visión" },
  { name: "National Life Group", slug: "nationallifegroup", domain: "nationallife.com", category: "Seguro de Vida" },
  { name: "Assure For Life", slug: "assureforlife", domain: "assureforlife.com", category: "Previsión Funeraria" },
  { name: "MedBlue", slug: "medblue", domain: "medbluehealthplans.com", category: "Planes Privados" },
  { name: "UHOne", slug: "uhone", domain: "uhone.com", category: "Planes Privados PPO" },
];

// Duplicate the array to ensure a seamless infinite loop
const SCROLL_ITEMS = [...CARRIERS, ...CARRIERS];

function CarrierLogo({ carrier }: { carrier: CarrierItem }) {
  const [imgFailed, setImgFailed] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);

  // Sources to try: 1) local PNG, 2) local SVG, 3) Clearbit fallback
  const sources = [
    `/images/logos/${carrier.slug}.png`,
    `/images/logos/${carrier.slug}.svg`,
    `https://logo.clearbit.com/${carrier.domain}`,
  ];

  return (
    <div className="mx-3 sm:mx-4 flex flex-col items-center justify-center cursor-default group/item py-2">
      <div className="h-20 sm:h-24 w-48 sm:w-60 px-5 py-3 rounded-2xl bg-gradient-to-b from-[#16274D] to-[#0D1A38] border border-[#C9A84C]/35 hover:border-[#DFBE65] shadow-md shadow-[#0A1224]/30 hover:shadow-xl hover:shadow-[#C9A84C]/15 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
        {!imgFailed ? (
          <img
            src={sources[srcIndex]}
            alt={`Logo de ${carrier.name}`}
            className="max-h-10 sm:max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover/item:scale-105"
            onError={() => {
              if (srcIndex < sources.length - 1) {
                setSrcIndex((prev) => prev + 1);
              } else {
                setImgFailed(true);
              }
            }}
          />
        ) : (
          <div className="flex flex-col items-center text-center px-2">
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover/item:text-[#DFBE65] transition-colors leading-tight">
              {carrier.name}
            </span>
            <span className="text-[9px] text-[#C9A84C] uppercase tracking-wider font-semibold mt-1">
              {carrier.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="bg-white py-12 sm:py-16 border-y border-[#C9A84C]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">
          Colaboramos con las principales aseguradoras reguladas de EE.UU.
        </p>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right fading gradients to blend the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {SCROLL_ITEMS.map((carrier, idx) => (
            <CarrierLogo key={`${carrier.slug}-${idx}`} carrier={carrier} />
          ))}
        </div>
      </div>

      {/* Internal Styles for the Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}} />
    </section>
  );
}
