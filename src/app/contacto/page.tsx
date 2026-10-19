import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contacto Directo con María Arias | Agente Licenciada",
  description: "Comunícate por teléfono, WhatsApp o correo con María Arias para consultas sobre seguros médicos, vida y ahorro en EE.UU.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block">
                Atención Humana & Cercana
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
                Estoy a un mensaje de distancia
              </h1>
              <p className="text-base text-[#4A4A6A] font-light leading-relaxed">
                Sin conmutadores ni operadores automáticos impersonales. Cuando me escribes o llamas, 
                hablas directamente con tu agente de seguros licenciada.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#C9A84C]/30 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#1B2D5B]/5 flex items-center justify-center text-[#1B2D5B]">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#C9A84C]">Teléfono & WhatsApp</div>
                    <a href={`tel:${BRAND.phoneRaw}`} className="text-lg font-serif font-bold text-[#1B2D5B]">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#C9A84C]/30 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#1B2D5B]/5 flex items-center justify-center text-[#1B2D5B]">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#C9A84C]">Correo Electrónico</div>
                    <a href={`mailto:${BRAND.email}`} className="text-sm font-medium text-[#1B2D5B]">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#C9A84C]/30 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#1B2D5B]/5 flex items-center justify-center text-[#1B2D5B]">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#C9A84C]">Horario de Atención</div>
                    <div className="text-xs text-[#4A4A6A]">
                      Lunes a Viernes: 8:30 AM – 7:00 PM EST<br />
                      Sábados con cita previa
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#C9A84C]/30 shadow-2xl">
              <div className="border-b border-[#C9A84C]/20 pb-4 mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#1B2D5B]">
                  Envíame un mensaje directo
                </h3>
                <p className="text-xs text-[#4A4A6A] font-light mt-1">
                  Responderé a tu correo o teléfono en menos de 24 horas hábiles.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
