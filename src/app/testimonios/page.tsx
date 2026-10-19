import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { constructMetadata } from "@/lib/seo";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Testimonios & Reseñas de Clientes | María Arias Insurance",
  description: "Opiniones y experiencias reales de familias hispanas aseguradas con María Arias en Florida, Texas, New Jersey y más.",
  path: "/testimonios",
});

const allTestimonials = [
  {
    name: "Carlos & Elena Mendoza",
    location: "Miami, FL",
    service: "Obamacare / ACA Plan ($0/mes)",
    quote: "Teníamos miedo de aplicar porque mi esposo aún tiene su trámite migratorio en curso y pensábamos que afectaría nuestra regularización. María nos explicó con toda paciencia que la salud no se niega y encontramos un plan excelente con prima de $0 al mes. Siempre que tenemos una duda médica, ella nos responde el WhatsApp.",
    rating: 5,
  },
  {
    name: "Maribel Ramos",
    location: "Hialeah, FL",
    service: "Plan Privado PPO (Sin estatus requerido)",
    quote: "Llegué hace menos de un año a los Estados Unidos y ninguna agencia me daba opciones claras sin seguro social regular. María me presentó una alternativa privada con Manhattan Life que cubrió las consultas de mis dos hijos y mis exámenes de rutina. Su calidad humana no tiene comparación.",
    rating: 5,
  },
  {
    name: "Javier Delgado",
    location: "Doral, FL",
    service: "Seguro de Vida & Asistencia Funeraria",
    quote: "Trabajo como contratista independiente y si a mí me pasa algo, mi familia se quedaba sin sustento. María me estructuró una póliza con National Life Group con beneficios en vida y la cobertura de repatriación con Assure For Life. Dormir con tranquilidad no tiene precio.",
    rating: 5,
  },
  {
    name: "Rosa Morales",
    location: "Houston, TX",
    service: "Obamacare ACA Familiar",
    quote: "Vivo en Texas y la contacté por recomendación de mi hermana en Miami. Me asesoró por videollamada como si estuviera a mi lado, revisó el plan de mis tres hijos y logramos una prima sumamente accesible.",
    rating: 5,
  },
  {
    name: "Fernando & Sofía P.",
    location: "Pembroke Pines, FL",
    service: "Seguro de Hogar & Propiedad",
    quote: "Compramos nuestra primera casa y las cotizaciones de seguro eran ridículamente altas. María analizó los deducibles, ajustó las coberturas y nos ahorró más de $1,400 al año con una aseguradora excelente.",
    rating: 5,
  },
  {
    name: "Guillermo T.",
    location: "Newark, NJ",
    service: "Plan de Retiro & Anualidades",
    quote: "Como independiente nunca tuve 401(k). Con María abrí una anualidad indexada donde mi dinero crece sin riesgo de que la bolsa caiga. Excelente asesoría profesional.",
    rating: 5,
  },
];

export default function TestimoniosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block mb-2">
              Experiencias de Familias
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B]">
              Lo que dicen quienes ya confían en mí
            </h1>
            <p className="text-base text-[#4A4A6A] font-light mt-4">
              Más de 500 familias respaldadas en Florida, Texas, New Jersey y las Carolinas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3 text-[#C9A84C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A84C]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#E8C5B0] mb-3 opacity-60" />
                  <p className="text-sm text-[#4A4A6A] font-light leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="font-serif font-bold text-base text-[#1B2D5B]">{t.name}</div>
                  <div className="text-xs text-[#C9A84C] font-semibold">{t.service}</div>
                  <div className="text-[11px] text-[#4A4A6A]/80">{t.location}</div>
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
