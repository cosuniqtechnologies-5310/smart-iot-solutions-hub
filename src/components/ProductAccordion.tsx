"use client";

import { useState } from "react";

export interface AccordionSection {
  title: string;
  items?: string[];
  content?: string;
}

interface ProductAccordionProps {
  sections?: AccordionSection[];
  particulars?: string | string[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function ProductAccordion({
  sections,
  particulars,
  defaultOpenIndex = null, // Default closed
  className = "",
}: ProductAccordionProps) {
  // Build normalized sections
  const resolvedSections: AccordionSection[] = [];

  if (sections && sections.length > 0) {
    resolvedSections.push(...sections);
  } else if (particulars) {
    resolvedSections.push({
      title: "PARTICULARS",
      items: Array.isArray(particulars) ? particulars : [particulars],
    });
  }

  // Track which section is open (index, or null if all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  if (resolvedSections.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {resolvedSections.map((section, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={section.title + idx}
            className={`rounded-lg border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#ca9740] bg-white shadow-sm"
                : "border-[#d0a353]/30 bg-[#fdfcf9] hover:border-[#ca9740] hover:bg-[#d0a353]/5"
            }`}
          >
            {/* Accordion Header Button */}
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors duration-150 cursor-pointer ${
                isOpen
                  ? "bg-[#d0a353]/15 text-[#8f6217] border-b border-[#ca9740]/20 font-bold"
                  : "text-[#0c121e] font-bold"
              }`}
            >
              <span className="text-[0.68rem] tracking-wider uppercase font-heading font-bold">
                {section.title}
              </span>
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] transition-transform duration-200 ${
                  isOpen
                    ? "bg-[#d0a353]/25 text-[#8f6217] rotate-180"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>

            {/* Accordion Body Content */}
            {isOpen && (
              <div className="p-3 bg-white text-[0.72rem] text-gray-700 leading-relaxed animate-fadeIn">
                {section.items && section.items.length > 0 ? (
                  <ul className="space-y-1.5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#d0a353]/15 text-[#ca9740] flex items-center justify-center text-[7px] mt-0.5 shrink-0">
                          <i className="fas fa-check"></i>
                        </span>
                        <span className="font-medium text-gray-800 leading-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-medium text-gray-800 leading-tight">
                    {section.content}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
