import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Planificación de Retiro & Anualidades | María Arias",
  description: "Protección y crecimiento de tus ahorros con ventajas fiscales y capital garantizado sin riesgo de mercado en EE.UU.",
  path: "/servicios/planificacion-retiro",
});

export default function PlanificacionRetiroPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Patrimonio & Jubilación</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              Anualidades & Planificación del Retiro
            </h1>
            <p className="text-lg text-[#4A4A6A] font-light mt-4 leading-relaxed">
              Muchos trabajadores independientes, contratistas y dueños de pequeños negocios no cuentan 
              con un plan 401(k) empresarial. Con las anualidades fijas e indexadas, puedes hacer crecer tu 
              dinero con protección total contra pérdidas de mercado.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-lg space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B2D5B]">
              Características clave de nuestras soluciones de retiro:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>Piso del 0%:</strong> Tu capital acumulado nunca sufre pérdidas bursátiles</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>Crecimiento compuesto:</strong> Intereses diferidos de impuestos</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span><strong>Flujo de ingresos garantizado:</strong> Renta vitalicia para tu jubilación</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Ideal para contratistas (1099) y pequeños empresarios</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1B2D5B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#121F40] shadow-lg"
            >
              <span>Diseñar mi plan de retiro</span>
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
