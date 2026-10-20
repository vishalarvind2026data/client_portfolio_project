"use client";

import React from "react";
import { Award, ShieldCheck, Languages, Check, BarChart3, Users, FileSpreadsheet, BookMarked, Compass, FileText } from "lucide-react";

export function SkillsSection() {
  const certifications = [
    {
      title: "Course for Capital Market, Investment, and Securities",
      date: "04/11/2024",
      issuer: "Legalstix Law School",
    },
    {
      title: "Course for Data Protection and Privacy Laws",
      date: "03/06/2024",
      issuer: "Legalstix Law School",
    },
  ];

  const skillsList = [
    { name: "Market Research & Competitive Analysis", icon: BarChart3, desc: "Global yacht listings, pricing movements & competitor positioning." },
    { name: "Client Relationship Management", icon: Users, desc: "Structuring UHNW client networks and luxury partner relations." },
    { name: "MS Excel", icon: FileSpreadsheet, desc: "Corporate finance modeling, charter yield calculations & database management." },
    { name: "Team Collaboration", icon: Users, desc: "Day-to-day coordination with brokerage teams across Cannes & Saint-Tropez." },
    { name: "Accounting", icon: BookMarked, desc: "Financial mathematics, transaction reporting & operational bookkeeping." },
    { name: "Record Keeping", icon: FileText, desc: "Systematic client dossier maintenance and contract documentation." },
  ];

  return (
    <section
      id="skills-section"
      className="relative min-h-[100vh] w-full flex items-center justify-end px-6 md:px-16 py-32 z-10 pointer-events-none"
      data-cursor="CREDENTIALS"
    >
      <div className="w-full max-w-xl space-y-6 pointer-events-auto">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#C5A059]/40 text-xs text-[#C5A059]">
          <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="font-mono-telemetry uppercase tracking-widest text-[10px]">
            HOROLOGICAL SPEC // CREDENTIALS & TELEMETRY
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase">
            CERTIFIED SKILLS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#C5A059] to-[#38BDF8]">
              LANGUAGES.
            </span>
          </h2>
          <p className="text-xs md:text-sm text-[#94A3B8] font-sans-luxury leading-relaxed">
            Market research rigor, professional capital market certifications, and bilingual immersion
            in the Mediterranean yachting ecosystem.
          </p>
        </div>

        {/* 6 Verbatim Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {skillsList.map((sk, idx) => {
            const Icon = sk.icon;
            return (
              <div
                key={idx}
                className="glass-smoked-card p-3.5 rounded-xl border border-white/10 hover:border-[#C5A059]/50 transition-all space-y-1.5 shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-white">
                  <Icon className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{sk.name}</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-sans-luxury leading-normal">{sk.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications (Legalstix Law School) - Verbatim */}
        <div className="glass-smoked-card p-5 rounded-2xl border border-[#C5A059]/30 space-y-3.5 shadow-xl">
          <div className="text-xs font-cinzel font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2.5">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>PROFESSIONAL CERTIFICATIONS // LEGALSTIX LAW SCHOOL</span>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="flex items-start justify-between gap-3 text-xs">
                <div>
                  <div className="font-cinzel font-semibold text-white tracking-wide">{cert.title}</div>
                  <div className="text-[11px] text-[#94A3B8] font-sans-luxury">{cert.issuer}</div>
                </div>
                <span className="text-[11px] font-mono-telemetry text-[#C5A059] shrink-0 font-medium px-2 py-0.5 rounded bg-[#C5A059]/10 border border-[#C5A059]/20">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Banner - Verbatim */}
        <div className="glass-smoked-card p-4 rounded-xl border border-[#C5A059]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-lg">
          <div className="flex items-center gap-2 text-white font-cinzel font-bold">
            <Languages className="w-4 h-4 text-[#C5A059]" />
            <span>LANGUAGES:</span>
          </div>
          <div className="flex items-center gap-5 text-xs font-mono-telemetry">
            <div>
              <strong className="text-white">ENGLISH:</strong>{" "}
              <span className="text-[#38BDF8] font-bold">TOEIC Score: 825</span>
            </div>
            <div>
              <strong className="text-white">FRENCH:</strong>{" "}
              <span className="text-emerald-400 font-bold">Currently Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
