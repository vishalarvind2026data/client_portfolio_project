"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Scale, BookOpen, Compass, CheckCircle2, ShieldCheck, Award, Sparkles } from "lucide-react";

export function EducationSection() {
  const [activePedigree, setActivePedigree] = useState<"finance" | "law">("finance");

  return (
    <section
      id="education-section"
      className="relative min-h-[120vh] w-full flex items-center justify-start px-6 md:px-16 py-32 z-10 pointer-events-none"
      data-cursor="EDUCATION & LAW"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
        {/* ============================================================== */}
        {/* LEFT 50%: DUAL EDUCATION CARDS (VERBATIM RESUME TEXT) */}
        {/* ============================================================== */}
        <div className="lg:col-span-6 space-y-6">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#C5A059]/40 text-xs text-[#C5A059]">
            <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono-telemetry uppercase tracking-widest text-[10px]">
              ACADEMIC PEDIGREE // LUXURY &amp; LAW
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase">
              DUAL PEDIGREE: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#C5A059] to-[#38BDF8]">
                MANAGEMENT &amp; LAW.
              </span>
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8] font-sans-luxury leading-relaxed">
              Combining elite French luxury business education with a formal 5-year law degree, equipped
              with corporate finance mathematics and international contract scrutiny.
            </p>
          </div>

          {/* Institution 1: Burgundy School of Business */}
          <div
            onClick={() => setActivePedigree("finance")}
            className={`glass-smoked-card p-6 rounded-2xl border transition-all duration-300 shadow-xl space-y-4 cursor-pointer ${
              activePedigree === "finance"
                ? "border-[#C5A059] ring-1 ring-[#C5A059]/50 shadow-[0_0_25px_rgba(197,160,89,0.2)]"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                <span className="font-cinzel text-base sm:text-lg font-bold text-white">
                  Burgundy School of Business
                </span>
              </div>
              <span className="text-xs font-mono-telemetry text-[#C5A059]">Dijon, France</span>
            </div>

            {/* Degree 1: Master's in Management (M1) */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-white">
                  Master&apos;s in Management (M1)
                </div>
                <span className="text-[11px] font-mono-telemetry text-emerald-400 font-semibold">
                  2025–2026
                </span>
              </div>
              <div className="text-[11px] text-[#CBD5E1] font-sans-luxury leading-relaxed">
                <strong className="text-[#38BDF8]">Relevant Subjects:</strong> Corporate Finance | Financial
                Theory and Mathematics | Financial Modeling Quantitative Methods
              </div>
            </div>

            {/* Degree 2: MSc Luxury Management and Innovation */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-white">
                  MSc Luxury Management and Innovation
                </div>
                <span className="text-[11px] font-mono-telemetry text-[#C5A059] font-semibold">
                  2026–2027
                </span>
              </div>
              <div className="text-[11px] text-[#CBD5E1] font-sans-luxury leading-relaxed">
                <strong className="text-[#C5A059]">Relevant Subjects:</strong> Luxury Entrepreneurship,
                Consumer Behavior &amp; Psychology of Luxury, Digital Project Consulting, Reinventing Luxury
              </div>
            </div>
          </div>

          {/* Institution 2: Amity University (Law Degree) */}
          <div
            onClick={() => setActivePedigree("law")}
            className={`glass-smoked-card p-6 rounded-2xl border transition-all duration-300 shadow-xl space-y-4 cursor-pointer ${
              activePedigree === "law"
                ? "border-[#38BDF8] ring-1 ring-[#38BDF8]/50 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-[#38BDF8]" />
                <span className="font-cinzel text-base sm:text-lg font-bold text-white">
                  Amity University
                </span>
              </div>
              <span className="text-xs font-mono-telemetry text-[#38BDF8]">Kolkata, India</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-white">
                  Bachelor of Laws (Legum Baccalaureus) — B.A.LLB(H)
                </div>
                <span className="text-[11px] font-mono-telemetry text-[#94A3B8] font-semibold">
                  2019–2024
                </span>
              </div>
              <div className="text-[11px] font-mono-telemetry text-[#C5A059] font-semibold">
                Specialization: Intellectual Property Rights (IPR)
              </div>
              <div className="text-[11px] text-[#CBD5E1] font-sans-luxury leading-relaxed">
                <strong className="text-[#38BDF8]">Relevant Subjects:</strong> Intellectual Property Rights,
                Taxation Law, Securities Law, Business Law and International Public Relations
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* RIGHT 50%: RELEVANT ACADEMIC EXECUTIVE CINEMAGRAPH & TELEMETRY */}
        {/* ============================================================== */}
        <div className="lg:col-span-6 space-y-5">
          {/* Authentic Academic Pedigree Showcase with Ambient Visual Effect */}
          <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden glass-smoked-card border border-[#C5A059]/40 shadow-2xl group">
            
            {/* Prestigious European Business School & Grand Law Library Image */}
            <Image
              src="/images/academic-pedigree-luxury.jpg"
              alt="Burgundy School of Business and Legal Scholarship Salon"
              fill
              priority
              className="object-cover object-center filter contrast-[1.05] brightness-[0.85] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Ambient Golden Light Caustic Sweep Overlay (Dynamic Video Effect) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050D1A]/90 via-transparent to-[#C5A059]/10 pointer-events-none" />
            
            {/* Animated Luminous Dust / Light Sweep Effect */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.35)_0%,transparent_60%)] animate-pulse" />

            {/* Top Verification Telemetry Pill */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C5A059]/40 text-[10px] font-mono-telemetry text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold">VERIFIED ACADEMIC PEDIGREE // FRANCE &amp; INDIA</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono-telemetry text-[#C5A059]">
                <ShieldCheck className="w-3 h-3 text-[#38BDF8]" />
                <span>OFFICIAL DOSSIER</span>
              </div>
            </div>

            {/* Floating Interactive Academic Module Lens */}
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl glass-smoked-card border border-white/15 backdrop-blur-xl shadow-2xl space-y-3 pointer-events-auto">
              {/* Dynamic Curriculum Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                <button
                  onClick={() => setActivePedigree("finance")}
                  className={`px-3 py-1 rounded-lg text-[10px] font-cinzel font-bold tracking-wider transition-all ${
                    activePedigree === "finance"
                      ? "bg-[#C5A059] text-[#050D1A] shadow-[0_0_12px_rgba(197,160,89,0.4)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  BSB CORPORATE FINANCE
                </button>
                <button
                  onClick={() => setActivePedigree("law")}
                  className={`px-3 py-1 rounded-lg text-[10px] font-cinzel font-bold tracking-wider transition-all ${
                    activePedigree === "law"
                      ? "bg-[#38BDF8] text-[#050D1A] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  AMITY JURISPRUDENCE &amp; IPR
                </button>
              </div>

              {activePedigree === "finance" ? (
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono-telemetry text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    <span>BURGUNDY SCHOOL OF BUSINESS (DIJON, FRANCE)</span>
                  </div>
                  <div className="font-cinzel text-sm sm:text-base font-bold text-white">
                    Quantitative Financial Modeling &amp; Luxury Positioning
                  </div>
                  <p className="text-[11px] text-[#CBD5E1] font-sans-luxury leading-relaxed">
                    Mastery of corporate financial theory, cash-flow structuring, and UHNW consumer psychology applied directly to mega-yacht acquisitions and charter operations.
                  </p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono-telemetry text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-[#38BDF8]" />
                    <span>AMITY UNIVERSITY SCHOOL OF LAW (5-YEAR DEGREE)</span>
                  </div>
                  <div className="font-cinzel text-sm sm:text-base font-bold text-white">
                    Intellectual Property Rights, Securities &amp; Contract Scrutiny
                  </div>
                  <p className="text-[11px] text-[#CBD5E1] font-sans-luxury leading-relaxed">
                    Rigorous formal legal training in maritime memoranda of agreement (MOA), securities regulations, taxation law, and contractual closing protocols.
                  </p>
                </div>
              )}

              {/* Bottom Credential Verification Stamp */}
              <div className="pt-2 flex items-center justify-between text-[9px] font-mono-telemetry text-[#94A3B8] border-t border-white/5">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  M1 + MSC + B.A. LL.B DUAL QUALIFICATIONS
                </span>
                <span className="text-[#C5A059]">FRENCH RIVIERA BROKERAGE CANDIDATE</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
