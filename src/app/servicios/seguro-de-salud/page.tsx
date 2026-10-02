import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AIChat } from "@/components/chat/AIChat";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Seguro de Salud (Obamacare / ACA) | María Arias",
  description: "Asesoría para planes médicos ACA con subsidios del gobierno. Redes con Oscar, Ambetter, Cigna y UnitedHealthcare en FL, TX, NC, SC, NJ.",
  path: "/servicios/seguro-de-salud",
});

export default function SeguroDeSaludPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block mb-2">
              Salud Familiar Integral
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              Seguro de Salud: Obamacare & Ley ACA
            </h1>
            <p className="text-lg text-[#4A4A6A] font-light mt-4 leading-relaxed">
              La Ley de Cuidado de Salud a Bajo Precio (ACA) permite que miles de familias hispanas accedan 
              a cobertura médica integral con subsidios federales que pueden cubrir hasta el 100% de la prima mensual.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-lg space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B2D5B]">
              ¿Qué cubren estos planes esenciales?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Chequeos preventivos y vacunas sin copago</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Medicamentos recetados y farmacia</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Atención de urgencias y hospitalización</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Maternidad, parto y cuidado del recién nacido</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1B2D5B]/5 border border-[#C9A84C]/30 text-xs sm:text-sm text-[#4A4A6A]">
              <strong className="text-[#1B2D5B]">Aseguradoras oficiales disponibles:</strong> Oscar Health, Ambetter, 
              Cigna, AmeriHealth Caritas Next y UnitedHealthcare.
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1B2D5B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#121F40] shadow-lg"
            >
              <span>Calcular mi subsidio gratis</span>
              <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <AIChat />
    </main>
  );
}
