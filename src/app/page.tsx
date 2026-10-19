import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Counters } from "@/components/sections/Counters";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6EF]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Counters />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <ContactCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
