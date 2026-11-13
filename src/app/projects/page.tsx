import Link from 'next/link';
import { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Our Projects | Smart IoT Solutions",
  description: "Explore our portfolio of smart home and commercial automation projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-20 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" />
          <div className="absolute inset-0 bg-[#d0a353]/30 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 shadow-inner">
            <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
            <span className="text-[#d0a353]">/</span> PROJECTS
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Architectural <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Masterpieces.</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Explore a curated gallery of our finest automation integrations. From hillside villas to corporate headquarters, we deliver flawless invisible technology.
          </p>
        </div>
      </section>

      {/* Immersive Gallery Section - Light Theme */}
      <section className="bg-[#fdfcf9] pb-32 pt-16 relative">
        <div className="container max-w-[1200px]">
          <ProjectsGallery />
        </div>
      </section>
    </>
  );
}
