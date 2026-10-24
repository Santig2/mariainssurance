"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "¿Necesito tener estatus migratorio definitivo para tener un seguro de salud?",
    a: "No necesariamente. Para los subsidios gubernamentales de la Ley ACA (Obamacare) se requiere contar con un estatus legalmente presente (incluyendo asilo con permiso de trabajo, DACA, TPS, etc.). Pero si aún no cuentas con documentos definitivos, existen Planes Médicos Privados (con Manhattan Life, MedBlue y UHOne) que no solicitan estatus legal y te cubren emergencias, doctores y cirugías los 365 días del año.",
  },
  {
    q: "¿Cuánto cuesta tu asesoría como agente de seguros?",
    a: "Mi asesoría es 100% gratuita para ti. Las aseguradoras reguladas son quienes pagan a los agentes de seguros licenciados; por ley, el costo de un seguro médico es exactamente el mismo si lo adquieres conmigo o directamente con la compañía.",
  },
  {
    q: "¿Cómo sé si califico para un plan de Obamacare a $0 al mes?",
    a: "El costo y los subsidios de la Ley ACA dependen de tus ingresos estimados en tu declaración de impuestos, el número de personas en tu núcleo familiar y el código postal donde vives. En una llamada de 10 minutos ingresamos tus datos en el sistema oficial del Marketplace y verificamos inmediatamente tu crédito fiscal aplicable.",
  },
  {
    q: "¿En qué estados tienes licencia para asesorarme y emitir mi póliza?",
    a: "Cuento con licencia oficial y certificación en Florida (FL), North Carolina (NC), South Carolina (SC), Texas (TX) y New Jersey (NJ). Todo el proceso de asesoría, cálculo de subsidios y emisión se realiza de forma remota, segura y 100% en español.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-[#FAF6EF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold mb-3">
            Claridad & Respuestas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B]">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto my-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#C9A84C]/30 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-[#1B2D5B] pr-2">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
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
                      transition={{ duration: 0.25 }}
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

      </div>
    </section>
  );
}
