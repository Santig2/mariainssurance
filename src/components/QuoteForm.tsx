"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield, Send, CheckCircle2, Phone, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const quoteSchema = z.object({
  fullName: z.string().min(3, "Por favor escribe tu nombre y apellido completos"),
  phone: z.string().min(10, "Por favor ingresa un número de teléfono válido (10 dígitos)"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  state: z.string().min(2, "Selecciona tu estado de residencia"),
  serviceInterest: z.string().min(2, "Selecciona el servicio que te interesa"),
  situation: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const servicesOptions = [
  "Seguro de Salud (Obamacare / ACA con subsidio)",
  "Planes Privados de Salud (Sin estatus requerido)",
  "Beneficios Dentales y Visión",
  "Protección Financiera e Ingresos por Accidente/Enfermedad",
  "Seguro de Vida (National Life Group) con beneficios en vida",
  "Asistencia Funeraria (Assure For Life)",
  "Planificación de Retiro / Anualidades",
];

const statesList = [
  "Florida (FL)",
  "North Carolina (NC)",
  "South Carolina (SC)",
  "Texas (TX)",
  "New Jersey (NJ)",
  "Otro Estado",
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    // Simular envío de datos a webhook/API o Resend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Formulario de cotización recibido:", data);
    setIsLoading(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C9A84C", "#1B2D5B", "#E8C5B0"],
      });
    } catch (e) {
      // Ignorar si no está soportado en entorno
    }
  };

  return (
    <section id="cotizar" className="py-20 lg:py-28 bg-[#1B2D5B] text-white relative overflow-hidden bg-gold-dots-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Warm invitation & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase font-bold tracking-widest">
              <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Cotización Gratuita & Sin Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Revisemos tus opciones juntos
            </h2>

            <p className="text-base text-white/80 font-light leading-relaxed">
              No tienes que descifrar este sistema tú solo. Déjame tus datos y me comunicaré 
              directamente contigo para explicarte qué planes aplican a tu familia, cuánto te costaría 
              y cuáles son las coberturas reales.
            </p>

            {/* Direct Contact Blocks */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                    Llamada directa o WhatsApp
                  </div>
                  <a href="tel:+13050000000" className="text-lg font-serif font-bold text-white hover:text-[#C9A84C] transition-colors">
                    (305) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                    Correo electrónico
                  </div>
                  <a href="mailto:maria@mariaariasinsurance.com" className="text-sm font-sans font-medium text-white hover:text-[#C9A84C] transition-colors">
                    maria@mariaariasinsurance.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                    Horario de atención
                  </div>
                  <div className="text-xs text-white/80">
                    Lunes a Viernes: 8:30 AM – 7:00 PM (EST)<br />
                    Sábados: Con cita previa
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#E8C5B0] italic pt-2">
              * Tus datos son completamente confidenciales y nunca se comparten con terceros ni entidades públicas.
            </div>
          </div>

          {/* Right Column: High-End Card with Form */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-white text-[#1A1A2E] border border-[#C9A84C]/40 shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1B2D5B] text-[#C9A84C] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#1B2D5B]">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-[#4A4A6A] font-light max-w-md mx-auto text-sm sm:text-base">
                    Gracias por confiar en mí. Revisaré tu caso personalmente y te contactaré en las próximas horas por llamada o WhatsApp para revisar tus opciones.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-[#C9A84C] text-[#1B2D5B] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6EF]"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  <div className="border-b border-[#C9A84C]/20 pb-4 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#1B2D5B]">
                      Formulario de Consulta Gratuita
                    </h3>
                    <p className="text-xs text-[#4A4A6A] font-light">
                      Completa los campos básicos para cotizar y te contactaré a la brevedad.
                    </p>
                  </div>

                  {/* Nombre Completo */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Teléfono & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="(305) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        {...register("email")}
                        placeholder="tu.correo@ejemplo.com"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Estado & Servicio */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                        Estado donde vives *
                      </label>
                      <select
                        {...register("state")}
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none bg-white transition-colors"
                      >
                        <option value="" disabled>Selecciona tu estado</option>
                        {statesList.map((st, i) => (
                          <option key={i} value={st}>{st}</option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="text-xs text-red-600 mt-1">{errors.state.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                        Servicio de interés *
                      </label>
                      <select
                        {...register("serviceInterest")}
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none bg-white transition-colors"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        {servicesOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.serviceInterest && (
                        <p className="text-xs text-red-600 mt-1">{errors.serviceInterest.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Situación o comentario */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
                      ¿Algún detalle que quieras comentar? (Opcional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Ej. Somos una familia de 3 en Miami, queremos saber si calificamos para Obamacare o un plan privado sin SSN..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-full bg-[#1B2D5B] hover:bg-[#121F40] text-white font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span>Procesando...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#C9A84C]" />
                          <span>Solicitar Asesoría Gratuita en Español</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
