import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { CheckCircle2, ArrowRight, HeartHandshake } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Seguro de Vida & Asistencia Funeraria | María Arias",
  description: "Pólizas con beneficios en vida de National Life Group y asistencia funeraria con repatriación de Assure For Life.",
  path: "/servicios/seguro-de-vida",
});

export default function SeguroDeVidaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Protección Familiar Total</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              Seguro de Vida & Asistencia Funeraria
            </h1>
            <p className="text-lg text-[#4A4A6A] font-light mt-4 leading-relaxed">
              Un seguro de vida moderno no es solo para cuando ya no estés. Es una herramienta financiera 
              que protege a tu familia hoy mismo a través de beneficios en vida si enfrentas un problema grave de salud.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-lg space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B2D5B]">
              Beneficios esenciales de nuestras pólizas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>Beneficios en vida:</strong> Adelanto de capital ante cáncer, infarto o incapacidad</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>National Life Group:</strong> Compañía centenaria con máxima solidez</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>Assure For Life:</strong> Asistencia funeraria integral y repatriación</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Garantía de no dejar deudas a tus hijos</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1B2D5B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#121F40] shadow-lg"
            >
              <span>Cotizar seguro de vida gratis</span>
              <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
