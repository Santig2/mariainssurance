"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const articles = [
  {
    slug: "como-funciona-obamacare-inmigrantes",
    title: "¿Cómo funciona el Obamacare para inmigrantes y qué requisitos piden?",
    excerpt: "Conoce exactamente qué documentos migratorios son aceptados por el Mercado de Salud y cómo calcular el subsidio familiar.",
    date: "1 Octubre, 2026",
    readTime: "5 min de lectura",
    category: "Salud & ACA",
  },
  {
    slug: "planes-privados-sin-social-security",
    title: "Planes médicos privados en EE.UU.: Cobertura real sin seguro social",
    excerpt: "Si estás esperando asilo o no calificas para ACA, descubre cómo funcionan las redes PPO privadas de Manhattan Life y MedBlue.",
    date: "28 Septiembre, 2026",
    readTime: "4 min de lectura",
    category: "Planes Privados",
  },
  {
    slug: "seguro-vida-beneficios-en-vida",
    title: "¿Qué son los beneficios en vida de un seguro de vida?",
    excerpt: "Aprende cómo una póliza de National Life Group te entrega dinero en efectivo ante infartos o cáncer sin tener que fallecer.",
    date: "20 Septiembre, 2026",
    readTime: "6 min de lectura",
    category: "Vida & Familia",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EF] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block mb-2">
              Educación & Consejos
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2D5B]">
              Artículos & Guías de Seguros
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1B2D5B] hover:text-[#C9A84C]"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.slug}
              className="p-6 rounded-3xl bg-white border border-[#C9A84C]/25 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#4A4A6A] mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1B2D5B]/5 font-semibold text-[#1B2D5B]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A84C]" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1B2D5B] mb-2 hover:text-[#C9A84C] transition-colors">
                  <Link href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#4A4A6A] leading-relaxed font-light mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-[#4A4A6A]/70">{item.date}</span>
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-xs font-bold text-[#1B2D5B] flex items-center gap-1 hover:text-[#C9A84C]"
                >
                  <span>Leer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
