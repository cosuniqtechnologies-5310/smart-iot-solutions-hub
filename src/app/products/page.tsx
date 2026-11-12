"use client";

import { useState } from "react";
import { products, Product } from "@/data/products";
import ProductAccordion from "@/components/ProductAccordion";
import Link from "next/link";

function getProductTag(product: Product): string {
  if (product.tag) return product.tag;
  if (product.series) return product.series;
  if (product.name.includes(" - ")) {
    return product.name.split(" - ")[0].trim();
  }
  if (product.name.startsWith("BOLT-")) {
    return "BOLT";
  }
  if (product.category === "Accessories") {
    return "ACCESSORY";
  }
  return product.name.split(" ")[0].trim();
}

export default function ProductsPage() {
  const categories = [
    "All Products",
    "Swing Gate Operators", 
    "Boom Barriers", 
    "Sliding Gate Operators", 
    "Sliding Glass Door Operators",
    "Switches & Controls",
    "Smart Curtains",
    "Lighting",
    "Smart Locks & Security",
    "Gateways & Controllers",
    "Accessories",
    "Networking & Routers"
  ] as const;

  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Premium Hero Section similar to Home Page */}
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
            <span className="text-[#d0a353]">/</span> PRODUCTS
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Collection.</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
            Browse our comprehensive range of high-quality automation hardware, carefully selected for maximum security, reliability, and elegant design.
          </p>
        </div>
      </section>

      {/* Main E-commerce Layout */}
      <section className="py-12 bg-[#fdfcf9]">
        <div className="container max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar / Filters */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sticky top-24">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 font-medium ${
                          selectedCategory === category 
                            ? "bg-[#d0a353]/10 text-[#d0a353] border border-[#d0a353]/20 font-bold" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                        }`}
                      >
                        {category}
                        {category !== "All Products" && (
                          <span className="float-right text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            {products.filter(p => p.category === category).length}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 p-5 bg-gradient-to-br from-[#0c121e] to-[#1a202c] rounded-xl text-center border border-[#d0a353]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#d0a353]/10 rounded-full blur-xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                  <h4 className="text-white font-heading font-bold text-base mb-2 relative z-10">Need Expert Advice?</h4>
                  <p className="text-gray-400 text-xs mb-4 relative z-10">Let us help you choose the right automation products.</p>
                  <a href="tel:+919626904991" className="inline-block w-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] py-2 rounded text-xs font-bold shadow-md hover:shadow-lg transition relative z-10">
                    <i className="fas fa-phone-alt mr-2"></i> CONTACT SALES
                  </a>
                </div>
              </div>
            </aside>
            
            {/* Product Grid */}
            <main className="w-full lg:flex-1 min-w-0">
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-heading">
                  {selectedCategory}
                </h2>
                <div className="text-sm text-gray-500 font-medium">
                  Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> products
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gradient-to-r from-[#ca9740]/30 via-[#fdf0a6]/25 to-[#ca9740]/30 p-[1px] rounded-2xl hover:shadow-[0_12px_30px_rgba(208,163,83,0.2)] transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group/wrapper"
                  >
                    <div className="bg-white rounded-[15px] overflow-hidden flex flex-col h-full relative group">
                      
                      {/* Image Area - Pure White Background with centered object-contain */}
                      <div className="w-full aspect-[16/10] bg-white relative flex items-center justify-center border-b border-gray-100 overflow-hidden pt-9 pb-3 px-4">
                        {/* Top-Left Series Tag (QUIK, ICON, etc.) */}
                        <div className="absolute top-2.5 left-2.5 bg-[#0c121e]/90 backdrop-blur-sm text-[#d0a353] text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm border border-[#d0a353]/35 z-20">
                          {getProductTag(product)}
                        </div>
                        
                        {/* Top-Right Code Badge */}
                        <div className="absolute top-2.5 right-2.5 bg-gray-100 text-gray-800 text-[0.6rem] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm border border-gray-200 z-20">
                          {product.code}
                        </div>

                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full w-auto h-auto object-contain object-center m-auto group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          />
                        ) : (
                          <i className="fas fa-box text-gray-300 text-4xl group-hover:scale-105 transition-transform duration-300 m-auto"></i>
                        )}
                      </div>
                      
                      {/* Content Area - Compact Padding */}
                      <div className="p-4 flex flex-col flex-grow relative bg-white">
                        
                        {/* Category Label */}
                        <span className="text-[0.6rem] font-bold text-[#ca9740] uppercase tracking-wider block mb-1">
                          {product.category}
                        </span>

                        {/* Title - strictly one line */}
                        <div className="mb-2.5">
                          <Link href={`/products/${product.id}`} className="group/title block" title={product.name}>
                            <h3
                              className="text-[0.92rem] font-bold text-[#0c121e] leading-snug group-hover/title:text-[#ca9740] transition-colors truncate font-heading"
                            >
                              {product.name}
                            </h3>
                          </Link>
                        </div>

                        {/* Price & Tax UI - Clean Seamless Typography */}
                        <div className="mb-3.5 pb-2.5 border-b border-gray-100 flex items-baseline justify-between gap-2">
                          <div>
                            <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-400 block mb-0.5 font-heading">
                              List Price
                            </span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl sm:text-2xl font-black text-gray-900 font-heading tracking-tight leading-none">
                                {typeof product.price === "number" ? `₹${product.price.toLocaleString("en-IN")}` : (product.price || "Quote Req.")}
                              </span>
                              {product.priceNote && (
                                <span className="text-[0.65rem] font-bold text-[#b5852f] tracking-wide uppercase">
                                  ({product.priceNote.replace(/^LIST\s*PRICE\s*\+?\s*/i, "+").trim()})
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Accordion (Default Closed) */}
                        <div className="mb-3 flex-grow">
                          <ProductAccordion
                            sections={product.accordions}
                            particulars={product.particulars}
                            defaultOpenIndex={null}
                          />
                        </div>
                        
                        {/* Compact CTA Button */}
                        <div className="mt-auto pt-2.5 border-t border-gray-100">
                          <Link
                            href={`/contact?product=${encodeURIComponent(product.code)}`}
                            className="w-full group/btn relative flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-[#d0a353]/40 bg-[#fdfcf9] hover:bg-gradient-to-r hover:from-[#ca9740] hover:to-[#dfb45e] text-[#0c121e] hover:text-[#0c121e] font-bold text-[0.7rem] uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
                          >
                            <span className="flex items-center gap-2">
                              <i className="fas fa-file-invoice text-[#ca9740] group-hover/btn:text-[#0c121e] transition-colors text-[11px]"></i>
                              <span>Request Quote & Info</span>
                            </span>
                            <span className="w-5 h-5 rounded-full bg-[#d0a353]/20 group-hover/btn:bg-white/50 flex items-center justify-center text-[9px] group-hover/btn:translate-x-0.5 transition-all">
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                  <i className="fas fa-box-open text-gray-300 text-6xl mb-4"></i>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500">We don't have any products in this category yet.</p>
                </div>
              )}
            </main>
            
          </div>
        </div>
      </section>
    </>
  );
}
