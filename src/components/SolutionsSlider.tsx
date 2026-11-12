"use client";
import React, { useRef, useState, useEffect } from 'react';

export default function SolutionsSlider({ solutions }: { solutions: any[] }) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [wishlist, setWishlist] = useState<number[]>([]);
    const isScrollingRef = useRef(false); // prevent double-reset during smooth scroll

    const filteredSolutions = activeCategory === 'All'
        ? solutions
        : solutions.filter(s => s.category === activeCategory);

    // Triple-copy for seamless looping in both directions
    const loopedSolutions = [...filteredSolutions, ...filteredSolutions, ...filteredSolutions];
    const CARD_WIDTH = 320; // px per card (300px card + 20px gap)
    // Exact pixel width of one full copy — used for loop reset boundaries
    const copyWidth = filteredSolutions.length * CARD_WIDTH;

    // Seed scroll to the middle copy on mount and on category change
    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;
        // Jump to exact start of copy 2 — card-boundary aligned, no fractional pixels
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = filteredSolutions.length * CARD_WIDTH;
        el.style.scrollBehavior = '';
    }, [activeCategory, solutions, filteredSolutions.length, CARD_WIDTH]);

    const scrollLeft = () => {
        const el = sliderRef.current;
        if (!el || isScrollingRef.current) return;
        isScrollingRef.current = true;

        el.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });

        // After smooth scroll finishes (~450ms), silently reset into middle copy
        setTimeout(() => {
            if (el.scrollLeft < copyWidth) {
                el.style.scrollBehavior = 'auto';
                el.scrollLeft += copyWidth;
                el.style.scrollBehavior = '';
            }
            isScrollingRef.current = false;
        }, 450);
    };

    const scrollRight = () => {
        const el = sliderRef.current;
        if (!el || isScrollingRef.current) return;
        isScrollingRef.current = true;

        el.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });

        // After smooth scroll finishes (~450ms), silently reset into middle copy
        setTimeout(() => {
            if (el.scrollLeft >= copyWidth * 2) {
                el.style.scrollBehavior = 'auto';
                el.scrollLeft -= copyWidth;
                el.style.scrollBehavior = '';
            }
            isScrollingRef.current = false;
        }, 450);
    };


    const toggleWishlist = (idx: number) => {
        setWishlist(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    const categoryIcons: Record<string, string> = {
        Residential: 'fa-home',
        Commercial: 'fa-building',
        Specialized: 'fa-microchip',
    };

    return (
        <section className="py-[60px] bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav">What are you looking for</span>
                            <span className="w-10 h-[1px] bg-[#d0a353]/40"></span>
                        </div>
                        <h2 className="font-heading text-4xl lg:text-[3.2rem] font-bold text-[#1a202c] tracking-tight">
                            We Deal&apos;s With...
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {['All', 'Residential', 'Commercial', 'Specialized'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                                        activeCategory === cat
                                            ? 'bg-[#1a202c] text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
                                    }`}
                                >
                                    {cat === 'All' ? 'All solutions' : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex gap-3 pb-2">
                        <button
                            onClick={scrollLeft}
                            className="w-11 h-11 rounded-full bg-white border border-[#d0a353]/30 flex items-center justify-center text-[#ca9740] hover:bg-[#ca9740] hover:text-white transition shadow-sm cursor-pointer z-10"
                        >
                            <i className="fas fa-chevron-left text-sm"></i>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-11 h-11 rounded-full bg-white border border-[#d0a353]/30 flex items-center justify-center text-[#ca9740] hover:bg-[#ca9740] hover:text-white transition shadow-sm cursor-pointer z-10"
                        >
                            <i className="fas fa-chevron-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-width slider – arrow-controlled infinite loop */}
            <div className="relative">
                {/* Right-side fade to hide the peeking card */}
                <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-28"
                    style={{ background: 'linear-gradient(to right, transparent, white)' }}
                />

                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-5 hide-scroll-bar pb-6 pt-2"
                    style={{
                        scrollBehavior: 'smooth',
                        marginLeft: 'calc(max(0px, (100% - 1200px) / 2) + 1.5rem)',
                        paddingRight: 'calc(max(0px, (100% - 1200px) / 2) + 1.5rem)',
                    }}
                >
                {loopedSolutions.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[80vw] md:w-[280px] lg:w-[300px] shrink-0 group bg-gradient-to-r from-[#ca9740] via-[#fdf0a6] to-[#ca9740] p-[1.5px] rounded-[1.1rem] shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(208,163,83,0.3)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full relative group/inner">
                        {/* Image Area */}
                        <div className="relative w-full h-52 overflow-hidden bg-gray-50">
                            {item.img?.match(/\.(mp4|webm)$/i) ? (
                                <video
                                    src={item.img}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover/inner:scale-107 transition-transform duration-700 ease-in-out"
                                    style={{ transform: 'scale(1)', transition: 'transform 0.7s ease' }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            ) : (
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover/inner:scale-107 transition-transform duration-700 ease-in-out"
                                    style={{ transform: 'scale(1)', transition: 'transform 0.7s ease' }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            )}

                            {/* Category Badge - top left */}
                            <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#ca9740] text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm border border-[#d0a353]/20">
                                    <i className={`fas ${categoryIcons[item.category] || 'fa-star'} text-[8px]`}></i>
                                    {item.category}
                                </span>
                            </div>

                            {/* Wishlist / Save button - top right */}
                            <button
                                onClick={() => toggleWishlist(idx % filteredSolutions.length)}
                                className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer ${
                                    wishlist.includes(idx % filteredSolutions.length)
                                        ? 'bg-[#ca9740] text-white'
                                        : 'bg-white/90 backdrop-blur-sm text-gray-400 hover:text-[#ca9740]'
                                }`}
                                aria-label="Save"
                            >
                                <i className={`${wishlist.includes(idx % filteredSolutions.length) ? 'fas' : 'far'} fa-heart text-xs`}></i>
                            </button>

                            {/* Gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Card Body */}
                        <div className="flex flex-col flex-grow p-5">

                            {/* Rating stars */}
                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="flex gap-0.5">
                                    {[1,2,3,4,5].map(s => (
                                        <i key={s} className={`fas fa-star text-[10px] ${s <= 4 ? 'text-[#ca9740]' : 'text-gray-200'}`}></i>
                                    ))}
                                </div>
                                <span className="text-[0.65rem] text-gray-400 font-medium">(4.8)</span>
                                <span className="ml-auto text-[0.6rem] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                                    <i className="fas fa-circle text-[5px] mr-1"></i>Available
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-[1.05rem] font-bold text-[#1a202c] mb-1.5 leading-tight group-hover/inner:text-[#ca9740] transition-colors duration-200">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[0.78rem] text-gray-500 leading-relaxed mb-4 flex-grow">
                                {item.desc}
                            </p>

                            {/* Features pills */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {['Smart Control', 'App Ready', 'Warranty'].map(tag => (
                                    <span key={tag} className="text-[0.6rem] bg-[#f9f6ef] text-[#b07e2a] font-semibold px-2 py-0.5 rounded-full border border-[#d0a353]/15">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-100 mb-4"></div>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-2 mt-auto">
                                <button className="flex-1 cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b88530] hover:to-[#ca9740] text-white py-2.5 rounded-xl text-[0.75rem] font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(208,163,83,0.4)] flex items-center justify-center gap-2">
                                    <i className="fas fa-shopping-cart text-[11px]"></i>
                                    View Products
                                </button>
                                <button className="w-10 h-10 rounded-xl border-2 border-[#d0a353]/30 text-[#ca9740] hover:bg-[#d0a353] hover:text-white hover:border-[#d0a353] flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0">
                                    <i className="fas fa-arrow-right text-xs"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>

            {/* Bottom row count */}
            <div className="container mt-4">
                <p className="text-[0.72rem] text-gray-400 font-medium">
                    Showing <span className="text-[#ca9740] font-bold">{filteredSolutions.length}</span> solutions
                    {activeCategory !== 'All' && <> in <span className="text-[#1a202c] font-bold">{activeCategory}</span></>}
                </p>
            </div>
        </section>
    );
}
