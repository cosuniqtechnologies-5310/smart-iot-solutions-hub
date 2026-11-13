import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Smart IoT Solutions",
  description: "Get in touch for a free site visit and personalized automation solutions.",
};

export default function ContactPage() {
  return (
    <>



    <section className="relative pt-32 pb-20 bg-[#0c121e] overflow-hidden">
        {/* Glitter Background with Opacity and Blend Mode */}
        <div className="absolute inset-0 z-0">
            <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" />
            <div className="absolute inset-0 bg-[#d0a353]/30 mix-blend-multiply pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/80 to-transparent z-0"></div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 shadow-inner">
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  HOME
                </Link> 
                <span className="text-[#d0a353]">/</span> CONTACT US
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">smarter.</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                Free site visit. Personalized solution. Expert guidance across South India. Drop us a message and our team will get back to you within 24 hours.
            </p>
        </div>
    </section>

    <section className="py-16 lg:py-20 bg-white relative">
        <div className="container max-w-[1100px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                
                {/* Left Side: Contact Info & Image */}
                <div className="lg:col-span-5 flex flex-col">
                    <h2 className="text-3xl font-bold mb-6 text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>
                        Get in Touch
                    </h2>
                    
                    <div className="space-y-5 mb-8">
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-phone-alt fa-flip-horizontal text-base"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.7rem] uppercase tracking-wider mb-0.5">Phone</h4>
                                <p className="text-gray-600 text-sm font-medium"><a href="tel:+919626904991" className="hover:text-[#d0a353] transition">+91 96269 04991</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-envelope text-base"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.7rem] uppercase tracking-wider mb-0.5">Email</h4>
                                <p className="text-gray-600 text-sm font-medium"><a href="mailto:hello@smartiotsolutions.in" className="hover:text-[#d0a353] transition">hello@smartiotsolutions.in</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-map-marker-alt text-base"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.7rem] uppercase tracking-wider mb-0.5">Experience Center</h4>
                                <p className="text-gray-600 text-[0.8rem] leading-relaxed font-medium">RS Puram, Coimbatore,<br />Tamil Nadu 641002</p>
                            </div>
                        </div>
                    </div>

                    {/* Fills the white space beautifully */}
                    <div className="mt-4 relative rounded-2xl overflow-hidden shadow-xl h-[200px] border border-gray-100 group">
                        <img src="/images/sol_office.jpg" alt="Our Experience Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-5">
                            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[0.55rem] font-bold uppercase tracking-widest text-white border border-white/20 mb-2 w-max">
                                <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Visit Us
                            </div>
                            <h4 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Step into the future.</h4>
                            <p className="text-gray-300 text-[0.7rem] mt-0.5">Book a live demo at our showroom.</p>
                        </div>
                    </div>
                </div>
                
                {/* Right Side: The Form */}
                <div className="lg:col-span-7">
                    {/* Gradient Border Wrapper */}
                    <div className="bg-gradient-to-r from-[#ca9740] via-[#fdf0a6] to-[#ca9740] p-[1.5px] rounded-2xl shadow-[0_15px_40px_rgba(208,163,83,0.15)] h-full">
                        <div className="bg-white rounded-2xl p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                            {/* Decorative background element */}
                            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#d0a353]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

                            <div className="mb-5">
                                <h3 className="text-2xl font-bold text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>Request a Quote</h3>
                                <p className="text-gray-500 text-[0.8rem] mt-1">Fill out the form below and our experts will contact you shortly.</p>
                            </div>

                            <form id="contact-form" className="space-y-4 relative z-10 flex-grow flex flex-col justify-between">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                                        <input type="text" name="user_name" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-lg px-4 py-2.5 text-[0.8rem] focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="Your name" required />
                                    </div>
                                    <div>
                                        <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                                        <input type="tel" name="user_phone" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-lg px-4 py-2.5 text-[0.8rem] focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="+91" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                                    <input type="email" name="user_email" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-lg px-4 py-2.5 text-[0.8rem] focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="you@example.com" required />
                                </div>
                                
                                <div>
                                    <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">I'm interested in</label>
                                    <div className="relative">
                                        <select name="interest" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-lg px-4 py-2.5 text-[0.8rem] focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 font-medium appearance-none cursor-pointer">
                                            <option value="Premium Home Package">Premium Home Package</option>
                                            <option value="Luxury Villa Package">Luxury Villa Package</option>
                                            <option value="Commercial / Office">Commercial / Office</option>
                                            <option value="Security & Gate">Security & Gate</option>
                                            <option value="Site Visit Only">Site Visit Only</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                            <i className="fas fa-chevron-down text-[10px]"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                                    <textarea name="message" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-lg px-4 py-3 text-[0.8rem] focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 h-20 resize-none font-medium" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                
                                <div id="form-status" className="text-xs font-bold hidden"></div>
                                
                                <button type="submit" id="submit-button" className="cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b58635] hover:to-[#ca9740] text-[#0c121e] px-6 py-3 rounded-lg text-[0.8rem] font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-[0_10px_20px_rgba(208,163,83,0.3)] hover:-translate-y-0.5 w-full flex items-center justify-center gap-2 mt-2">
                                    Send Request <i className="fas fa-paper-plane text-[10px]"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    </>
  );
}

