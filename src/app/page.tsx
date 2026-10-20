"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { LuxuryVesselStage } from "@/components/canvas/LuxuryVesselStage";
import { HUD } from "@/components/ui/HUD";
import { Preloader } from "@/components/ui/Preloader";
import { HeroSection } from "@/components/sections/HeroSection";
import { YachtExplodeShowcase } from "@/components/sections/YachtExplodeShowcase";
import { YachtingExperienceSection } from "@/components/sections/YachtingExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useEngineStore } from "@/store/useEngineStore";

export default function Home() {
  const setScrollProgress = useEngineStore((s) => s.setScrollProgress);

  useEffect(() => {
    // Initialize Butter-Smooth Lenis Inertial Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [setScrollProgress]);

  return (
    <main className="relative min-h-[500vh] bg-[#050D1A] text-[#FAF9F6] select-none">
      {/* 1. Luxury Cinema Curtain Preloader */}
      <Preloader />

      {/* 2. Horological Luxury Navigation */}
      <HUD />

      {/* 3. Persistent Hardware-Accelerated Video & Visual Stage */}
      <LuxuryVesselStage />

      {/* 4. Authentic Scrollytelling Sections (100% Resume Grounded) */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Section 01: Hero & Profile Summary */}
        <HeroSection />

        {/* Real-Time 3D Superyacht Mechanical Disassembly Engine (Pure Wordless Three.js Art) */}
        <YachtExplodeShowcase />

        {/* Section 02: Yachting Experience (All 3 Houses with Actual Images) */}
        <YachtingExperienceSection />

        {/* Section 04: Dual Education (MSc Luxury & B.A. LL.B) */}
        <EducationSection />

        {/* Section 05: Credentials, Legalstix Certifications & Skills */}
        <SkillsSection />

        {/* Section 06: Direct Candidate Contact Desk */}
        <ContactSection />
      </div>
    </main>
  );
}
