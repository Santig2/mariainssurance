"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito tener estatus migratorio definitivo para tener un seguro de salud?",
    a: "No necesariamente. Para los subsidios gubernamentales de la Ley ACA (Obamacare) se requiere contar con un estatus legalmente presente (incluyendo asilo con permiso de trabajo, DACA, TPS, visas válidas, etc.). Pero si aún no cuentas con documentos definitivos o estás en proceso, existen Planes Médicos Privados (con aseguradoras como Manhattan Life, MedBlue y UHOne) que no solicitan estatus legal y te cubren emergencias, doctores y cirugías los 365 días del año.",
  },
  {
    q: "¿Cuánto cuesta tu asesoría como agente de seguros?",
    a: "Mi asesoría es 100% gratuita para ti. Las compañías aseguradoras reguladas son quienes pagan a los agentes de seguros licenciados; por ley, el costo de un seguro médico es exactamente el mismo si lo adquieres conmigo o directamente con la compañía aseguradora. La diferencia es que conmigo recibes acompañamiento personalizado en español en todo momento.",
  },
  {
    q: "¿Cómo sé si califico para un plan de Obamacare a $0 al mes?",
    a: "El costo y los subsidios de la Ley ACA dependen de tus ingresos estimados en tu declaración de impuestos, el número de personas en tu núcleo familiar y el código postal donde vives. En una llamada de 10 minutos ingresamos tus datos en el sistema oficial del Marketplace y verificamos inmediatamente tu crédito fiscal aplicable.",
  },
  {
    q: "¿Qué ocurre si sufro una enfermedad o accidente y no puedo trabajar?",
    a: "Para eso contamos con la protección financiera y de ingresos. A diferencia de un seguro médico común que solo le paga a la clínica o al hospital, estas coberturas te entregan un cheque o depósito directo a ti en efectivo para que sigas pagando tu renta, comida y compromisos mientras te recuperas.",
  },
  {
    q: "¿El seguro de vida solo paga cuando uno fallece?",
    a: "Ya no. Hoy en día trabajamos con pólizas modernas de National Life Group que incluyen beneficios en vida. Si sufres un infarto, cáncer, derrame cerebral o una incapacidad grave, la aseguradora te adelanta una parte sustancial de tu póliza en vida para cubrir tratamientos o dejar todo en orden sin comprometer tu patrimonio.",
  },
  {
    q: "¿En qué estados tienes licencia para asesorarme?",
    a: "Cuento con licencia activa otorgada por el departamento de seguros en Florida, North Carolina, South Carolina, Texas y New Jersey. Si tú o un familiar vive en cualquiera de estos estados, puedo gestionar tu póliza de forma completamente legal y certificada.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-[#FAF6EF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-3">
            Claridad & Tranquilidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B]">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
          <p className="text-base text-[#4A4A6A] font-light">
            Aquí respondo a las dudas más comunes de nuestra comunidad hispana sin rodeos y en español sencillo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#C9A84C]/30 bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-[#1B2D5B] pr-2">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1B2D5B] text-white rotate-180"
                        : "bg-[#1B2D5B]/5 text-[#1B2D5B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#4A4A6A] leading-relaxed font-light border-t border-black/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#E8C5B0]/20 border border-[#C9A84C]/30">
          <p className="text-sm text-[#1B2D5B] font-semibold mb-2">
            ¿Tienes una pregunta específica sobre tu situación familiar o estatus?
          </p>
          <a
            href="#cotizar"
            className="text-xs uppercase tracking-wider font-bold text-[#1B2D5B] hover:text-[#C9A84C] underline decoration-[#C9A84C] decoration-2 underline-offset-4"
          >
            Escríbeme directamente aquí y lo revisamos juntos →
          </a>
        </div>

      </div>
    </section>
  );
}
