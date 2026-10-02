import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AIChat } from "@/components/chat/AIChat";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Planes Privados de Salud (PPO) | Sin Estatus Requerido | María Arias",
  description: "Planes médicos privados disponibles todo el año sin requisito de estatus migratorio. Respaldados por Manhattan Life, MedBlue y UHOne.",
  path: "/servicios/planes-privados",
});

export default function PlanesPrivadosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C] text-[#1B2D5B] text-xs uppercase font-bold tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Sin Barrera Migratoria</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              "Tu estatus migratorio no define tu acceso a la salud."
            </h1>
            <p className="text-lg text-[#4A4A6A] font-light mt-4 leading-relaxed">
              Si estás en espera de asilo, tienes DACA, visa o no cuentas con documentos definitivos de residencia, 
              <strong>no tienes que quedarte sin atención médica</strong>. Existen opciones PPO privadas con cobertura 
              real en todo Estados Unidos.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#1B2D5B] to-[#121F40] text-white border border-[#C9A84C] shadow-2xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-white">
              Ventajas exclusivas de los Planes Privados PPO:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Inscripción abierta los 365 días del año</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>No se requiere Seguro Social ni estatus permanente</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Red de doctores y clínicas de prestigio</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Cobertura de cirugías, urgencias y hospitalización</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white/80">
              <strong className="text-[#C9A84C]">Compañías emisoras:</strong> Manhattan Life, MedBlue y UHOne.
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white shadow-xl"
            >
              <span>Consultar opciones confidencialmente</span>
              <ArrowRight className="w-4 h-4" />
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
