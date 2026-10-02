import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AIChat } from "@/components/chat/AIChat";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { constructMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Cotizar Seguro Gratis | María Arias Insurance",
  description: "Solicita tu cotización gratuita y sin compromiso para seguros de salud, vida, hogar o retiro en FL, NC, SC, TX y NJ.",
  path: "/cotizar",
});

export default function CotizarPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2D5B]/5 border border-[#C9A84C]/40 text-[#1B2D5B] text-xs uppercase font-bold tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Asesoría 100% Gratuita</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
                Revisemos tus opciones de seguro juntos
              </h1>

              <p className="text-base text-[#4A4A6A] font-light leading-relaxed">
                Completa tus datos básicos en el formulario y me pondré en contacto contigo para 
                analizar tu situación, verificar tus subsidios gubernamentales y presentarte opciones reales sin costo.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#C9A84C]/30 shadow-sm">
                  <Phone className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-sm font-bold text-[#1B2D5B]">{BRAND.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#C9A84C]/30 shadow-sm">
                  <Mail className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-sm font-medium text-[#1B2D5B]">{BRAND.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <AIChat />
    </main>
  );
}
