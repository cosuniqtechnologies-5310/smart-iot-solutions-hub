"use client";

import { useState } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality";
  location: string;
  description: string;
  image: string;
  scope: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "ooty-hillside-retreat",
    title: "The Ooty Hillside Retreat",
    category: "Residential",
    location: "Ooty, Nilgiris",
    description: "A sprawling 8,000 sq.ft luxury villa nestled in the hills. The client required complete climate automation, centralized lighting, motorized curtains, and an invisible multi-room audio system.",
    image: "/images/sol_luxury_villa.jpg",
    scope: ["Smart Lighting", "Climate Control", "Home Theater AV", "Motorized Curtains"]
  },
  {
    id: "fintech-hq-bangalore",
    title: "FinTech HQ, Bangalore",
    category: "Commercial",
    location: "Bangalore, Karnataka",
    description: "A modern 25,000 sq.ft workspace demanding high-level biometric access protocols, automated energy management sensors, boom barrier perimeter entry, and state-of-the-art boardroom AV setups.",
    image: "/images/sol_office.jpg",
    scope: ["Biometric Access", "Network Security", "Boardroom AV", "Boom Barrier Gates"]
  },
  {
    id: "serenity-palm-resort",
    title: "Serenity Palm Boutique Resort",
    category: "Hospitality",
    location: "Munnar, Kerala",
    description: "A premier eco-luxury resort featuring 24 private chalets. Engineered with smart keyless RFID door access, centralized HVAC scheduling, motorized ambient lighting, and automated perimeter security.",
    image: "/images/smart_home_villa_1786093285055.png",
    scope: ["Guest Room Automation", "Keyless Access", "Centralized HVAC", "Perimeter Security"]
  },
  {
    id: "skyline-penthouse-coimbatore",
    title: "Skyline Grand Penthouse",
    category: "Residential",
    location: "Race Course, Coimbatore",
    description: "A duplex penthouse featuring panoramic city views with customized architectural lighting, automated motorized sliding glass door access, safety edges, and integrated voice controls.",
    image: "/images/sol_apartment.jpg",
    scope: ["Sliding Glass Automation", "Mood Lighting", "Touchless Controls", "Smart Security"]
  },
  {
    id: "aura-tech-park",
    title: "Aura Tech Park Enterprise Hub",
    category: "Commercial",
    location: "Coimbatore, Tamil Nadu",
    description: "Automated multi-tenant corporate hub equipped with high-speed automated boom barriers, smart vehicle detection loops, biometric visitor gates, and automated lighting across all floors.",
    image: "/images/auto_office_1786094016416.png",
    scope: ["Boom Barriers", "Loop Detectors", "Access Control", "Energy Monitoring"]
  }
];

const categories = ["All Projects", "Residential", "Commercial", "Hospitality"] as const;

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Interactive Filter Menu */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
        {categories.map((category) => {
          const count = category === "All Projects" 
            ? projectsData.length 
            : projectsData.filter((p) => p.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-6 py-2.5 rounded-full text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] shadow-[0_4px_15px_rgba(208,163,83,0.35)] border border-[#d0a353]"
                  : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#d0a353]/50 shadow-sm hover:shadow"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[0.6rem] px-2 py-0.5 rounded-full ${
                  isActive 
                    ? "bg-[#0c121e]/20 text-[#0c121e] font-extrabold" 
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16">
        {filteredProjects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <div
              key={project.id}
              className={`group relative w-full h-auto md:h-[600px] rounded-[2rem] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col ${
                isReverse ? "md:flex-row-reverse" : "md:flex-row"
              } overflow-hidden transition-all duration-500`}
            >
              {/* Image Container with Safe Fallbacks */}
              <div className="w-full md:w-[60%] h-[300px] md:h-full relative overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#0c121e]/80 backdrop-blur-md text-[#d0a353] text-[0.62rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#d0a353]/40 shadow-sm">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div
                className={`w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-white relative z-10 ${
                  isReverse
                    ? "shadow-[10px_0_30px_rgba(0,0,0,0.03)]"
                    : "shadow-[-10px_0_30px_rgba(0,0,0,0.03)]"
                }`}
              >
                <div className="inline-flex items-center gap-2 bg-[#f9f8f4] px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-[#ca9740] border border-[#d0a353]/20 mb-6 w-max">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d0a353]"></span> {project.category}
                </div>

                <h3
                  className="text-2xl lg:text-3xl font-bold text-[#1a202c] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-10">
                  <div className="text-[0.65rem] font-bold text-[#ca9740] uppercase tracking-widest mb-3">
                    Scope of Work
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-semibold text-gray-700 border border-gray-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?subject=${encodeURIComponent("Case Study Inquiry: " + project.title)}`}
                  className="inline-flex items-center gap-3 text-[#1a202c] text-[0.7rem] font-bold uppercase tracking-widest hover:text-[#d0a353] transition-colors w-max group/link"
                >
                  Request Consultation{" "}
                  <i className="fas fa-arrow-right transform group-hover/link:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <i className="fas fa-folder-open text-gray-300 text-5xl mb-4 block"></i>
            <h4 className="text-lg font-bold text-gray-800 mb-2 font-heading">No Projects Found</h4>
            <p className="text-gray-500 text-sm mb-6">There are currently no featured projects in this category.</p>
            <button
              onClick={() => setSelectedCategory("All Projects")}
              className="px-5 py-2.5 rounded-full bg-[#d0a353] text-[#0c121e] font-bold text-xs uppercase tracking-wider hover:bg-[#ca9740] transition shadow-sm"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

