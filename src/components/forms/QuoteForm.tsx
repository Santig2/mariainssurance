"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { BRAND } from "@/lib/constants";

const quoteSchema = z.object({
  fullName: z.string().min(3, "Por favor escribe tu nombre completo"),
  phone: z.string().min(10, "Ingresa un número de 10 dígitos válido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  state: z.string().min(2, "Selecciona tu estado de residencia"),
  serviceInterest: z.string().min(2, "Selecciona el servicio de interés"),
  familyMembers: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const servicesOptions = [
  "Seguro de Salud (Obamacare / ACA con subsidio)",
  "Planes Privados de Salud (Sin estatus requerido)",
  "Seguro de Vida (National Life Group con beneficios en vida)",
  "Planificación de Retiro / Anualidades",
  "Asistencia Funeraria (Assure For Life)",
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "quote" }),
      });
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C9A84C", "#1B2D5B", "#E8C5B0"],
      });
    } catch {}
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-[2rem] bg-white text-center border border-[#C9A84C]/40 shadow-xl max-w-xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#1B2D5B] text-[#C9A84C] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-[#1B2D5B]">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="text-sm text-[#4A4A6A] font-light leading-relaxed">
          Gracias por dar el primer paso. María Arias revisará personalmente tus opciones y te contactará 
          en breve por llamada o WhatsApp.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2.5 rounded-full border border-[#C9A84C] text-[#1B2D5B] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6EF]"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white text-[#1A1A2E] border border-[#C9A84C]/40 shadow-2xl">
      <div className="border-b border-[#C9A84C]/20 pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#C9A84C] mb-1">
          <Shield className="w-4 h-4" />
          <span>Cotización Confidencial & Gratuita</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1B2D5B]">
          Revisemos tus opciones de seguro
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
            Nombre Completo *
          </label>
          <input
            {...register("fullName")}
            placeholder="Ej. Juan Pérez"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none"
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
              Teléfono / WhatsApp *
            </label>
            <input
              {...register("phone")}
              placeholder="(305) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none"
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
              Correo Electrónico *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
              Estado de residencia *
            </label>
            <select
              {...register("state")}
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none bg-white"
            >
              <option value="" disabled>Selecciona tu estado</option>
              {BRAND.activeStates.map((st, i) => (
                <option key={i} value={st}>{st}</option>
              ))}
              <option value="Otro Estado">Otro Estado</option>
            </select>
            {errors.state && <p className="text-xs text-red-600 mt-1">{errors.state.message}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
              Servicio de interés *
            </label>
            <select
              {...register("serviceInterest")}
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none bg-white"
            >
              <option value="" disabled>Selecciona una solución</option>
              {servicesOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.serviceInterest && <p className="text-xs text-red-600 mt-1">{errors.serviceInterest.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
            ¿Cuántas personas necesitas asegurar?
          </label>
          <input
            {...register("familyMembers")}
            placeholder="Ej. Solo yo / Pareja / Familia de 4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
            Comentarios o preguntas sobre tu caso
          </label>
          <textarea
            {...register("message")}
            rows={3}
            placeholder="Ej. Deseo saber si califico a subsidio o si puedo aplicar con asilo en trámite..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-full bg-[#1B2D5B] hover:bg-[#121F40] text-white font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
          >
            {isLoading ? <span>Enviando solicitud...</span> : (
              <>
                <Sparkles className="w-4 h-4 text-[#C9A84C]" />
                <span>Solicitar Asesoría Gratuita en Español</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
