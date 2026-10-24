import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Servicios de Seguros | María Arias Insurance",
  description: "Portafolio de seguros médicos ACA/Obamacare, planes privados PPO sin estatus, seguro de vida y anualidades de retiro.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block mb-2">
              Soluciones Integrales
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B]">
              Servicios & Planes de Cobertura
            </h1>
            <p className="text-base text-[#4A4A6A] font-light mt-4">
              Cada etapa de la vida requiere un plan adecuado. Explora nuestras soluciones oficiales 
              con el respaldo de aseguradoras líderes en EE.UU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BRAND.services.map((svc) => (
              <div
                key={svc.slug}
                className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1B2D5B]/5 flex items-center justify-center text-[#1B2D5B] mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1B2D5B] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#4A4A6A] font-light leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={svc.path}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B2D5B] hover:text-[#C9A84C]"
                  >
                    <span>Conocer detalles del plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
