import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";
import { Check, Shield, MapPin, Heart, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Sobre María Arias | Agente de Seguros Licenciada",
  description: "Conoce a María Rosario Arias Gómez, su historia, trayectoria desde 2022 y misión de asesorar a familias hispanas en EE.UU. con Warm Authority.",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative p-3 rounded-[2.5rem] bg-white border border-[#C9A84C]/40 shadow-2xl">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#1B2D5B]">
                  <Image
                    src="/images/maria/portrait.png"
                    alt={BRAND.fullName}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">
                Mi Misión & Valores
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
                "La protección no es un lujo, es la base para prosperar en este país."
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-[#4A4A6A] font-light leading-relaxed">
                <p>
                  Soy <strong>{BRAND.fullName}</strong>, agente de seguros con licencia activa en Florida, North Carolina, 
                  South Carolina, Texas y New Jersey. Desde el año {BRAND.sinceYear}, he dedicado mi carrera a derribar las 
                  barreras de confusión e incertidumbre que muchas familias hispanas enfrentan al llegar o vivir en los Estados Unidos.
                </p>
                <p>
                  Muchos de mis clientes temían aplicar al sistema de salud por su condición migratoria o porque en el pasado 
                  recibieron información engañosa. Mi compromiso con la filosofía de <strong>Warm Authority</strong> es 
                  brindarte un espacio seguro, profesional y totalmente honesto donde revisamos cada póliza en español, con calma y sin presiones.
                </p>
              </div>

              <div className="pt-4 border-t border-[#C9A84C]/20">
                <h3 className="font-serif text-lg font-bold text-[#1B2D5B] mb-3">
                  Licencias de Estado Oficiales:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {BRAND.activeStates.map((st, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-xs font-semibold text-[#1B2D5B]"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/cotizar"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B2D5B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#121F40] transition-colors shadow-lg"
                >
                  <span>Revisemos tus opciones juntos</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
