"use client";

import React from "react";
import { ArrowDownRight, Anchor, Compass, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[105vh] w-full flex flex-col justify-between px-6 md:px-16 pt-36 pb-20 z-10 pointer-events-none"
    >
      {/* Top Riviera Tag */}
      <div className="max-w-3xl pointer-events-auto space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-[#C5A059]/40 text-xs text-[#C5A059] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="font-mono-telemetry uppercase tracking-widest text-[10px]">
            SAINT-TROPEZ · CANNES · FRENCH RIVIERA
          </span>
        </div>

        {/* Display Headline without unnecessary video pill */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tight leading-[0.95] uppercase">
          ARYAN BATRA. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#C5A059] to-[#38BDF8]">
            ASPIRING YACHT
          </span>{" "}
          <br />
          BROKER.
        </h1>

        {/* Authentic Profile Summary directly from Resume (100% Verbatim) */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#CBD5E1] font-sans-luxury font-normal leading-relaxed">
          &ldquo;A business student with a strong interest in the luxury yachting industry, 
          I have gained practical business development experience across several yachting and charter houses. 
          I am working toward a career as a yacht broker and am eager to continue building my skills in 
          client relations and market research.&rdquo;
        </p>

        {/* Action Triggers */}
        <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
          <button
            onClick={() => scrollToSection("experience-section")}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#050D1A] font-cinzel font-bold text-xs uppercase tracking-widest transition-transform active:scale-95 shadow-[0_0_25px_rgba(197,160,89,0.35)]"
          >
            <span>YACHTING EXPERIENCE</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection("skills-section")}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full glass-smoked-card hover:bg-white/10 text-white font-sans-luxury font-medium text-xs uppercase tracking-widest transition-colors border border-white/20"
          >
            <span>INDUSTRY CREDENTIALS</span>
            <Anchor className="w-4 h-4 text-[#38BDF8]" />
          </button>
        </div>
      </div>

      {/* Bottom Live Metric Strip - 100% Resume Accurate */}
      <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl pointer-events-auto">
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono-telemetry text-[#C5A059] tracking-wider">
            CURRENT INTERNSHIP
          </div>
          <div className="text-sm sm:text-base font-bold text-white font-cinzel">Saint Tropez Yacht Charter</div>
          <div className="text-xs text-[#94A3B8] font-sans-luxury">Business Development Intern (Sept 2026 – Present)</div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono-telemetry text-[#38BDF8] tracking-wider">
            PREVIOUS HOUSES
          </div>
          <div className="text-sm sm:text-base font-bold text-white font-cinzel">Villa & Moana Yachting</div>
          <div className="text-xs text-[#94A3B8] font-sans-luxury">Cannes & French Riviera Operations</div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono-telemetry text-[#C5A059] tracking-wider">
            LUXURY BUSINESS
          </div>
          <div className="text-sm sm:text-base font-bold text-white font-cinzel">Burgundy School of Business</div>
          <div className="text-xs text-[#94A3B8] font-sans-luxury">M1 Management & MSc Luxury Innovation</div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono-telemetry text-emerald-400 tracking-wider">
            LEGAL FOUNDATION
          </div>
          <div className="text-sm sm:text-base font-bold text-white font-cinzel">Bachelor of Laws (B.A. LL.B)</div>
          <div className="text-xs text-[#94A3B8] font-sans-luxury">Amity University · IPR & Contract Specialization</div>
        </div>
      </div>
    </section>
  );
}
