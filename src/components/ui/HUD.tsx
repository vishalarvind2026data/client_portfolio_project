"use client";

import React from "react";
import { Anchor, Phone, Mail, Compass } from "lucide-react";

export function HUD() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* HOROLOGICAL LUXURY NAVIGATION BAR */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-4 flex items-center justify-between glass-smoked-container border-b border-[#C5A059]/20 transition-all duration-300">
        {/* Left: Aryan Batra Monogram & Identity */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center bg-[#0B1D33]/90 shadow-[0_0_15px_rgba(197,160,89,0.2)]">
            <Anchor className="w-4 h-4 text-[#C5A059]" />
          </div>
          <div>
            <div className="font-cinzel text-sm font-bold tracking-[0.16em] text-white flex items-center gap-2">
              ARYAN BATRA
              <span className="text-[9px] font-mono-telemetry font-medium px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                ASPIRING BROKER
              </span>
            </div>
            <div className="text-[11px] text-[#94A3B8] font-sans-luxury tracking-wide hidden sm:block">
              Saint-Tropez · Cannes · French Riviera
            </div>
          </div>
        </div>

        {/* Center: Horological Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium font-sans-luxury tracking-wider text-[#CBD5E1]">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="hover:text-[#C5A059] transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("experience-section")}
            className="hover:text-[#C5A059] transition-colors"
          >
            YACHTING EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection("education-section")}
            className="hover:text-[#C5A059] transition-colors"
          >
            EDUCATION & LAW
          </button>
          <button
            onClick={() => scrollToSection("skills-section")}
            className="hover:text-[#C5A059] transition-colors"
          >
            CREDENTIALS
          </button>
          <button
            onClick={() => scrollToSection("contact-section")}
            className="text-[#C5A059] font-semibold hover:underline transition-colors"
          >
            CONTACT
          </button>
        </nav>

        {/* Right: Direct Phone CTA & Get In Touch */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+33605593712"
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors font-mono-telemetry"
          >
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>+33 6 05 59 37 12</span>
          </a>

          <button
            onClick={() => scrollToSection("contact-section")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#050D1A] text-xs font-cinzel font-bold tracking-wider transition-transform active:scale-95 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
          >
            <span>GET IN TOUCH</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* HOROLOGICAL MINIMAL FOOTER RIBBON */}
      {/* ======================================================== */}
      <footer className="fixed bottom-0 left-0 w-full z-30 px-6 md:px-12 py-3 glass-smoked-container border-t border-[#C5A059]/20 flex items-center justify-between pointer-events-none text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-medium">Saint Tropez Yacht Charter</span>
          <span className="text-white/20">|</span>
          <span className="hidden sm:inline">Business Development Intern</span>
        </div>

        <div className="flex items-center gap-5 text-xs font-mono-telemetry">
          <span className="text-[#C5A059] font-medium hidden sm:inline">aryanbatra18@gmail.com</span>
          <span className="text-white/60">+33 6 05 59 37 12</span>
        </div>
      </footer>
    </>
  );
}
