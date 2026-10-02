"use client";

import { motion } from "framer-motion";

const CARRIERS = [
  { name: "Oscar Health", domain: "hioscar.com" },
  { name: "Ambetter", domain: "ambetterhealth.com" },
  { name: "Cigna", domain: "cigna.com" },
  { name: "AmeriHealth", domain: "amerihealthcaritas.com" },
  { name: "UnitedHealthcare", domain: "uhc.com" },
  { name: "Florida Blue", domain: "floridablue.com" },
  { name: "Manhattan Life", domain: "manhattanlife.com" },
  { name: "National Life Group", domain: "nationallife.com" },
  { name: "Assure For Life", domain: "assureforlife.com" },
];

// Duplicate the array to ensure a seamless infinite loop
const SCROLL_ITEMS = [...CARRIERS, ...CARRIERS];

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-[#C9A84C]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">
          Colaboramos con las aseguradoras líderes del país
        </h3>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right fading gradients to blend the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {SCROLL_ITEMS.map((carrier, idx) => (
            <div 
              key={idx} 
              className="mx-8 sm:mx-12 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="h-10 sm:h-12 w-32 sm:w-40 relative flex items-center justify-center">
                <img 
                  src={`https://logo.clearbit.com/${carrier.domain}`}
                  alt={`Logo de ${carrier.name}`}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    // Fallback to text if the logo fails to load from Clearbit
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="hidden text-sm font-bold text-[#1B2D5B] text-center w-full">
                  {carrier.name}
                </span>
              </div>
            </div>
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
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}
