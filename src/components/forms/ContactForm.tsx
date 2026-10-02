"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Por favor escribe tu nombre"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(10, "Ingresa un teléfono válido de 10 dígitos"),
  subject: z.string().min(3, "Indica el asunto de tu consulta"),
  message: z.string().min(10, "Escribe tu mensaje o pregunta detallada"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-white text-center border border-[#C9A84C]/40 shadow-lg space-y-3">
        <CheckCircle2 className="w-12 h-12 text-[#C9A84C] mx-auto" />
        <h4 className="font-serif text-2xl font-bold text-[#1B2D5B]">Mensaje Enviado</h4>
        <p className="text-sm text-[#4A4A6A] font-light">
          Muchas gracias. María Arias responderá a tu mensaje a la brevedad posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
          Nombre Completo *
        </label>
        <input
          {...register("name")}
          placeholder="Tu nombre y apellido"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
            Correo Electrónico *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="tu@correo.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
            Teléfono *
          </label>
          <input
            {...register("phone")}
            placeholder="(305) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
          Asunto *
        </label>
        <input
          {...register("subject")}
          placeholder="Ej. Consulta sobre seguros de salud en Florida"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none"
        />
        {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-bold text-[#1B2D5B] mb-1.5">
          Mensaje *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Escribe aquí tu duda o situación particular..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A84C] text-sm outline-none resize-none"
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full bg-[#1B2D5B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#121F40] transition-colors flex items-center justify-center gap-2 shadow-md"
      >
        <Send className="w-4 h-4 text-[#C9A84C]" />
        <span>{loading ? "Enviando..." : "Enviar Mensaje Directo"}</span>
      </button>
    </form>
  );
}
