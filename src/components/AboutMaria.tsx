"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Check, Heart, MapPin, Sparkles } from "lucide-react";

const credentials = [
  "Licencia oficial de seguros en Florida, NC, SC, TX y NJ",
  "Más de 3 años de trayectoria ininterrumpida asesorando familias",
  "Más de 500 familias hispanas protegidas en el país",
  "Alianzas directas con más de 10 aseguradoras líderes",
  "Asesoría y acompañamiento 100% en español, sin costo para el cliente",
];

const cities = [
  "Miami", "Hialeah", "Doral", "Kendall", "Homestead", "Miami Lakes", 
  "Coral Gables", "Pembroke Pines", "Miramar", "Miami Beach", "Cutler Bay", 
  "Miami Gardens", "Sweetwater", "Fontainebleau"
];

export function AboutMaria() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#FAF6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Maria's High-Res Portrait in Luxury Frame */}
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
                  src="/images/maria-arias.jpg"
                  alt="María Rosario Arias Gómez"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              {/* Floating Personal Quote */}
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

          {/* Right Column: Story & Authority */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest">
              Conoce a tu Agente
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              María Rosario Arias Gómez
            </h2>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
              Licensed Insurance Agent · Warm Authority
            </p>

            <div className="space-y-4 text-base text-[#4A4A6A] font-light leading-relaxed">
              <p>
                Desde que comencé en el sector asegurador en el año <strong className="font-semibold text-[#1B2D5B]">2022</strong>, 
                descubrí que una de las mayores barreras que enfrentan los inmigrantes e hispanos en los Estados Unidos no es la falta de seguros, 
                sino la <em>confusión, la barrera del idioma y el temor al rechazo</em> por su situación migratoria.
              </p>
              <p>
                Por eso decidí construir una práctica profesional basada en la <strong>empatía y la claridad absoluta</strong>. 
                Aquí no hay presiones de venta ni tecnicismos incomprensibles. Me siento contigo a revisar tu caso, respondemos cada duda 
                y encontramos la opción que mejor se ajuste al bolsillo y las necesidades reales de tu familia.
              </p>
            </div>

            {/* Credentials Checklist */}
            <div className="pt-2 space-y-2.5">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-[#1A1A2E]">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#C9A84C] stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Local South Florida SEO Cities */}
            <div className="pt-6 border-t border-[#C9A84C]/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B2D5B] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Atención local en el Sur de la Florida:</span>
              </div>
              <p className="text-xs text-[#4A4A6A] leading-relaxed">
                {cities.join(" · ")} y condados de Miami-Dade, Broward y Palm Beach, así como atención bilingüe a distancia en NC, SC, TX y NJ.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-4 flex items-center gap-4">
              <div>
                <span className="font-serif text-2xl text-[#1B2D5B] italic font-bold">
                  María Arias
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#C9A84C]">
                  Agente de Seguros Licenciada
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
