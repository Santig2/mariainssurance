import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

export const metadata = constructMetadata({
  title: "Blog & Guías Educativas de Seguros | María Arias",
  description: "Artículos, consejos y explicaciones sencillas en español sobre seguros médicos, estatus migratorio, Obamacare y vida en EE.UU.",
  path: "/blog",
});

export const blogPosts = [
  {
    slug: "como-funciona-obamacare-inmigrantes",
    title: "¿Cómo funciona el Obamacare para inmigrantes y qué requisitos piden?",
    excerpt: "Conoce exactamente qué documentos migratorios son aceptados por el Mercado de Salud y cómo calcular el subsidio familiar según tus ingresos.",
    date: "1 Octubre, 2026",
    readTime: "5 min de lectura",
    category: "Salud & ACA",
    content: `El Seguro de Salud bajo la Ley ACA (conocido popularmente como Obamacare) ofrece subsidios fiscales federales que reducen drásticamente la prima mensual que paga cada familia. Muchas personas creen erróneamente que se necesita ser ciudadano estadounidense o residente permanente para calificar, pero la ley establece que cualquier persona con 'presencia legal' en el país es elegible. Esto incluye solicitantes de asilo con permiso de trabajo (C08), personas con estatus de protección temporal (TPS), DACA, parole humanitario vigente, visas de trabajo (H-1B, L-1, O-1) y visas de estudiante. María Arias puede calcular tu subsidio en menos de 10 minutos.`,
  },
  {
    slug: "planes-privados-sin-social-security",
    title: "Planes médicos privados en EE.UU.: Cobertura real sin seguro social",
    excerpt: "Si estás esperando asilo o no calificas para ACA, descubre cómo funcionan las redes PPO privadas de Manhattan Life y MedBlue.",
    date: "28 Septiembre, 2026",
    readTime: "4 min de lectura",
    category: "Planes Privados",
    content: `Una de las mayores inquietudes que escucho a diario es: 'María, recién llegué a Estados Unidos y no tengo Seguro Social definitivo, ¿puedo tener seguro médico?' La respuesta es sí. A través de planes privados de salud ofrecidos por compañías autorizadas como Manhattan Life, MedBlue y UHOne, las familias pueden asegurarse los 365 días del año sin periodos de espera gubernamentales y sin que su estatus migratorio sea un impedimento.`,
  },
  {
    slug: "seguro-vida-beneficios-en-vida",
    title: "¿Qué son los beneficios en vida de un seguro de vida?",
    excerpt: "Aprende cómo una póliza de National Life Group te entrega dinero en efectivo ante infartos o cáncer sin tener que fallecer.",
    date: "20 Septiembre, 2026",
    readTime: "6 min de lectura",
    category: "Vida & Familia",
    content: `El concepto tradicional del seguro de vida era simple: una persona fallece y su familia recibe el dinero. Sin embargo, las pólizas modernas de National Life Group han revolucionado el mercado incorporando los llamados 'Living Benefits' o beneficios en vida. Si sufres un diagnóstico de enfermedad crítica (como cáncer, derrame cerebral, insuficiencia renal) o una enfermedad crónica que no te permita trabajar, la aseguradora te adelanta hasta el 80% o más del valor de la póliza en vida para cubrir tratamientos y no perder tu casa.`,
  },
];

export default function BlogListPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <section className="py-16 lg:py-24 bg-gold-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold block mb-2">
              Recursos & Educación
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2D5B]">
              Guías Claras de Seguros en Español
            </h1>
            <p className="text-base text-[#4A4A6A] font-light mt-4">
              Información confiable, sin tecnicismos y pensada exclusivamente para la comunidad hispana en Estados Unidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="p-8 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#4A4A6A] mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1B2D5B]/5 font-bold text-[#1B2D5B]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-[#1B2D5B] mb-3 hover:text-[#C9A84C] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#4A4A6A] font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#4A4A6A]/80">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1B2D5B] hover:text-[#C9A84C]"
                  >
                    <span>Leer artículo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
