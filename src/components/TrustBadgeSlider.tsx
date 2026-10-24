"use client";

import { useState, useEffect } from "react";
import { REVIEWS } from "@/data/reviews";

export default function TrustBadgeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Static reviews (src/data/reviews.ts) - no Google Places API needed.
  const reviews = REVIEWS;

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Increased time so users can read the full review
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl mb-8 shadow-2xl max-w-sm w-full sm:w-auto transform transition-all duration-300 hover:scale-[1.02] hover:bg-black/50 group z-10 cursor-default">
      
      {/* Decorative subtle glow that appears on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-2xl pointer-events-none"></div>

      {/* Header Row: Stars & Google Indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex text-gold text-[11px] sm:text-xs gap-[3px] drop-shadow-md mt-0.5">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <svg viewBox="0 0 48 48" className="w-[14px] h-[14px] opacity-90" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          <span className="text-[9px] text-white/80 font-semibold tracking-widest uppercase">Verified</span>
        </div>
      </div>

      {/* Review Content Slider */}
      <div className="relative h-[65px] w-full min-w-[260px]">
        <div className="relative w-full h-full">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 flex flex-col justify-start w-full transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                    : "opacity-0 translate-y-3 pointer-events-none -z-10"
                }`}
              >
                <p className="text-xs sm:text-sm text-white/90 line-clamp-2 leading-snug font-light italic drop-shadow-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-[11px] font-semibold text-gold tracking-wide drop-shadow-sm">
                    {review.author_name}
                  </span>
                  <span className="text-[9px] font-normal text-white/40">
                    • {review.relative_time_description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
