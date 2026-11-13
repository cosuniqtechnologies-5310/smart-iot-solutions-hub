import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Smart IoT Solutions",
  description: "Discover our comprehensive range of home automation, smart locks, and gate automation services.",
};

export default function ServicesPage() {
  return (
    <>

    {/* Hero Section - Keep Dark to match Home Hero */}
    <section className="relative pt-32 pb-24 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" />
            <div className="absolute inset-0 bg-[#d0a353]/30 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 shadow-inner">
                <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
                <span className="text-[#d0a353]">/</span> SERVICES
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Ecosystems of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">intelligence.</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                We engineer bespoke automation environments for luxury residences, forward-thinking enterprises, and world-class hospitality venues.
            </p>
        </div>
    </section>

    {/* The Portals - Light Theme matching Home */}
    <section className="py-24 bg-[#fdfcf9] relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-0 bottom-0 left-0 right-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 10% 90%, #d0a353 0%, transparent 40%), radial-gradient(circle at 90% 10%, #d0a353 0%, transparent 40%)" }}></div>
        </div>

        <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Residential Portal */}
                <div className="group relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-white flex flex-col h-[700px]">
                    <div className="h-[55%] relative overflow-hidden">
                        <img src="/images/sol_luxury_villa.jpg" alt="Residential Automation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    <div className="h-[45%] p-10 flex flex-col bg-white relative z-20">
                        <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-[1px] bg-[#d0a353]"></span> RESIDENTIAL
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1a202c] leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            The Responsive Home.
                        </h2>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Immersive home theater audio, automated climate control, and enterprise-grade perimeter security managed from a single elegant interface.
                        </p>
                        
                        <div className="mt-auto grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-lightbulb text-[#ca9740]"></i> Smart Lighting
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-shield-alt text-[#ca9740]"></i> Security
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-door-open text-[#ca9740]"></i> Motorized Gates
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-temperature-low text-[#ca9740]"></i> Climate Control
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commercial Portal */}
                <div className="group relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-white flex flex-col h-[700px]">
                    <div className="h-[55%] relative overflow-hidden">
                        <img src="/images/sol_office.jpg" alt="Commercial Automation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    <div className="h-[45%] p-10 flex flex-col bg-white relative z-20">
                        <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-[1px] bg-[#d0a353]"></span> COMMERCIAL
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1a202c] leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            The Intelligent Enterprise.
                        </h2>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Reduce energy costs by 30%, secure assets with biometric protocols, and enable seamless boardroom presentations with one-touch AV routing.
                        </p>
                        
                        <div className="mt-auto grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-fingerprint text-[#ca9740]"></i> Biometric Access
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-leaf text-[#ca9740]"></i> Energy Sensors
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-tv text-[#ca9740]"></i> Boardroom AV
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] font-bold text-gray-700">
                                <i className="fas fa-network-wired text-[#ca9740]"></i> Infrastructure
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* How We Work - Light Theme */}
    <section className="py-24 bg-white relative border-t border-gray-100">
        <div className="container">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase font-nav mb-4">
                    <span className="w-8 h-[1px] bg-[#d0a353]"></span> METHODOLOGY <span className="w-8 h-[1px] bg-[#d0a353]"></span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>
                    Execution without compromise.
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-8 left-12 right-12 h-[1px] bg-gray-200 z-0 border-t border-dashed border-gray-300"></div>
                
                <div className="relative group text-center">
                    <div className="w-16 h-16 mx-auto bg-white border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-md">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-white text-xl font-bold">01</span>
                    </div>
                    <h4 className="font-bold text-[#1a202c] mb-3 text-lg">Consultation</h4>
                    <p className="text-sm text-gray-500 leading-relaxed px-2">On-site analysis of your lifestyle or business workflows to outline exact technological requirements.</p>
                </div>
                
                <div className="relative group text-center">
                    <div className="w-16 h-16 mx-auto bg-white border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-md">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-white text-xl font-bold">02</span>
                    </div>
                    <h4 className="font-bold text-[#1a202c] mb-3 text-lg">Architecture</h4>
                    <p className="text-sm text-gray-500 leading-relaxed px-2">Detailed CAD schematics, network blueprints, and transparent Bill of Materials (BOQ).</p>
                </div>
                
                <div className="relative group text-center">
                    <div className="w-16 h-16 mx-auto bg-white border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-md">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-white text-xl font-bold">03</span>
                    </div>
                    <h4 className="font-bold text-[#1a202c] mb-3 text-lg">Deployment</h4>
                    <p className="text-sm text-gray-500 leading-relaxed px-2">Flawless, clean installations executed by our certified network and automation engineers.</p>
                </div>
                
                <div className="relative group text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ca9740] to-[#dfb45e] border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative shadow-lg">
                        <span className="-rotate-45 text-white text-xl font-bold"><i className="fas fa-check"></i></span>
                    </div>
                    <h4 className="font-bold text-[#1a202c] mb-3 text-lg">Support</h4>
                    <p className="text-sm text-gray-500 leading-relaxed px-2">24/7 dedicated local support, preventative maintenance, and seamless software updates.</p>
                </div>
            </div>
            
            <div className="text-center mt-20">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(208,163,83,0.3)] hover:-translate-y-1">
                    Book a Consultation <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    </section>

    </>
  );
}
