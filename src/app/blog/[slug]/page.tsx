import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { blogPosts } from "../page";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Blog María Arias`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />

      <article className="py-16 lg:py-24 bg-gold-dots flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#1B2D5B] hover:text-[#C9A84C]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al blog</span>
          </Link>

          <div>
            <div className="flex items-center gap-3 text-xs text-[#4A4A6A] mb-3">
              <span className="px-3 py-1 rounded-full bg-[#1B2D5B]/5 font-bold text-[#1B2D5B]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2D5B] leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C9A84C]/30 shadow-md text-[#1A1A2E] leading-relaxed font-light text-base sm:text-lg space-y-6">
            <p className="font-normal text-lg sm:text-xl text-[#1B2D5B] italic border-l-4 border-[#C9A84C] pl-4">
              {post.excerpt}
            </p>
            <div className="pt-2 text-base text-[#4A4A6A] leading-relaxed">
              {post.content}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#1B2D5B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C9A84C]/40">
            <div>
              <h3 className="font-serif text-xl font-bold">¿Tienes dudas sobre este tema?</h3>
              <p className="text-xs text-white/80 font-light mt-1">
                María Arias evalúa tu caso sin compromiso ni costo alguno.
              </p>
            </div>
            <Link
              href="/cotizar"
              className="px-6 py-3 rounded-full bg-[#C9A84C] text-[#1B2D5B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Hablar con María</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
