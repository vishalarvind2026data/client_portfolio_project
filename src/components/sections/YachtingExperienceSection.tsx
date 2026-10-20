"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, MapPin, Anchor, Briefcase, Sparkles, Calendar } from "lucide-react";

export function YachtingExperienceSection() {
  const experiences = [
    {
      id: "saint-tropez",
      company: "Saint Tropez Yacht Charter",
      role: "Business Development Intern",
      period: "Sept 2026 – Present",
      location: "Saint-Tropez, Côte d'Azur, France",
      isCurrent: true,
      image: "/images/riviera-superyacht-beach.jpg",
      imageCaption: "Port de Saint-Tropez & Baie des Canebiers Anchorage",
      bullets: [
        "Supporting business development and client servicing activities within a leading yacht charter operation on the Côte d'Azur.",
        "Assisting high-net-worth clients and charter brokers with fleet availability, customized itineraries, and luxury hospitality coordination.",
      ],
      spec: {
        sector: "Côte d'Azur Charter Operations",
        location: "Saint-Tropez, France",
        focus: "Business Development & Client Servicing",
      },
    },
    {
      id: "villa-yachting",
      company: "Villa Yachting",
      role: "Business Development Intern",
      period: "Jul 2026 – Sept 2026",
      location: "French Riviera, France",
      isCurrent: false,
      image: "/images/french-riviera-yachting.jpg",
      imageCaption: "French Riviera Coastline, Cap d'Antibes & Monaco Waters",
      bullets: [
        "Conducted market research on the global yacht brokerage and charter industry to identify emerging trends and business opportunities.",
        "Built and maintained structured databases of luxury partners, UHNW client networks, and strategic stakeholders.",
        "Analyzed competitor positioning, yacht listings, and pricing movements to support business development initiatives.",
        "Assisted in creating marketing content.",
      ],
      spec: {
        sector: "Global Yacht Brokerage & Charter Intelligence",
        location: "French Riviera, France",
        focus: "Market Research & UHNW Databases",
      },
    },
    {
      id: "moana-yachting",
      company: "Moana Yachting",
      role: "Business Development Intern",
      period: "May 2026 – Jul 2026",
      location: "Cannes, France",
      isCurrent: false,
      image: "/images/cannes-yachting.jpg",
      imageCaption: "Bay of Cannes & Port Pierre Canto at Golden Sunset",
      bullets: [
        "Identified and qualified prospective clients and strategic partners through targeted lead generation and industry research.",
        "Supported outreach initiatives by preparing prospect lists and drafting client communication materials.",
        "Provided day-to-day support to the brokerage team in client servicing and operational activities.",
        "Collaborated with the team on business development strategies and contributed to strengthening relationships within the luxury yachting ecosystem.",
      ],
      spec: {
        sector: "Cannes Yacht Brokerage Division",
        location: "Cannes, French Riviera",
        focus: "Lead Generation & Client Outreach",
      },
    },
  ];

  return (
    <section
      id="experience-section"
      className="relative min-h-[140vh] w-full px-6 md:px-16 py-32 z-10"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#C5A059]/40 text-xs text-[#C5A059]">
            <Briefcase className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono-telemetry uppercase tracking-widest text-[10px]">
              PROFESSIONAL BACKGROUND // 3 YACHTING HOUSES
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-wider leading-tight">
            YACHTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#C5A059] to-[#38BDF8]">
              EXPERIENCE.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans-luxury max-w-2xl mx-auto">
            Practical business development, market intelligence, and client servicing experience
            across the leading maritime destinations of Saint-Tropez, Cannes, and the French Riviera.
          </p>
        </div>

        {/* ============================================================== */}
        {/* ALL 3 WORK EXPERIENCES DISPLAYED WITH ACTUAL LOCATION IMAGES */}
        {/* ============================================================== */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`glass-smoked-container p-6 sm:p-8 md:p-10 rounded-3xl border border-[#C5A059]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Column (Content & Exact Resume Bullets) */}
              <div className={`space-y-5 ${idx % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono-telemetry text-[#C5A059] uppercase tracking-widest">
                        EXPERIENCE 0{idx + 1}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-telemetry font-bold ${
                          exp.isCurrent
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-white/5 text-[#94A3B8] border border-white/10"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {exp.company}
                    </h3>
                    <div className="text-xs text-[#38BDF8] font-sans-luxury font-medium mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center bg-[#050D1A]/60 shrink-0">
                    <Anchor className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono-telemetry">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>{exp.location}</span>
                </div>

                {/* Verbatim Bullet Points */}
                <ul className="space-y-3 text-xs sm:text-[13px] text-[#CBD5E1] font-sans-luxury leading-relaxed pt-1">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Specification Badges */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 text-[10px] font-mono-telemetry">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#94A3B8] block">SECTOR:</span>
                    <span className="text-white font-medium truncate block">{exp.spec.sector}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#94A3B8] block">FOCUS:</span>
                    <span className="text-[#C5A059] font-medium truncate block">{exp.spec.focus}</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Actual Authentic Location Photograph) */}
              <div className={`relative h-[300px] sm:h-[360px] md:h-[400px] w-full rounded-2xl overflow-hidden glass-smoked-card border border-[#C5A059]/40 shadow-xl group ${
                idx % 2 === 1 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
              }`}>
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.08] brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent pointer-events-none" />

                {/* Location Badge on Image */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono-telemetry text-white flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#38BDF8]" />
                  <span>{exp.location.toUpperCase()}</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-mono-telemetry text-[#C5A059] uppercase tracking-wider font-semibold">
                      AUTHENTIC DESTINATION
                    </div>
                    <div className="font-cinzel text-xs sm:text-sm font-bold text-white">
                      {exp.imageCaption}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 text-[10px] font-mono-telemetry font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
