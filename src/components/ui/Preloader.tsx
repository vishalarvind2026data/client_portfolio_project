"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useEngineStore } from "@/store/useEngineStore";
import { Compass } from "lucide-react";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);
  const curtainTopRef = useRef<HTMLDivElement>(null!);
  const curtainBottomRef = useRef<HTMLDivElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);
  const setLoaded = useEngineStore((s) => s.setLoaded);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 6;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);

        // Vertical Cinema Curtain Reveal
        const tl = gsap.timeline({
          onComplete: () => {
            setLoaded(true);
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
          },
        });

        tl.to(contentRef.current, {
          opacity: 0,
          scale: 0.96,
          duration: 0.35,
          ease: "power2.inOut",
        })
          .to(
            curtainTopRef.current,
            {
              yPercent: -100,
              duration: 0.95,
              ease: "power4.inOut",
            },
            "-=0.1"
          )
          .to(
            curtainBottomRef.current,
            {
              yPercent: 100,
              duration: 0.95,
              ease: "power4.inOut",
            },
            "<"
          );

        // Fail-safe
        setTimeout(() => {
          setLoaded(true);
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        }, 850);
      } else {
        setPercent(current);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [setLoaded]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-auto bg-[#050D1A]"
    >
      {/* Top Cinema Curtain Panel */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050D1A] border-b border-[#C5A059]/30"
      />
      {/* Bottom Cinema Curtain Panel */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050D1A] border-t border-[#C5A059]/30"
      />

      {/* Center Horological Monogram & Compass Calibration */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg"
      >
        {/* Monogram AB inside Omega Bezel */}
        <div className="relative w-20 h-20 rounded-full border border-[#C5A059]/40 flex items-center justify-center bg-[#0B1D33]/80 shadow-[0_0_35px_rgba(197,160,89,0.2)] mb-5">
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C5A059]/30 animate-[spin_20s_linear_infinite]" />
          <span className="font-serif-luxury text-2xl font-bold tracking-widest text-[#FAF9F6]">
            AB
          </span>
        </div>

        {/* Monogram Title */}
        <div className="text-[11px] font-mono-telemetry text-[#C5A059] tracking-[0.26em] uppercase mb-1">
          CÔTE D&apos;AZUR · MONACO · SAINT-TROPEZ
        </div>

        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.16em] text-white uppercase mb-2">
          ARYAN BATRA
        </h1>

        <p className="text-xs text-[#94A3B8] font-sans-luxury tracking-wide mb-6">
          Aspiring Yacht Broker · Luxury Maritime Advisory
        </p>

        {/* Nautical Compass Calibration Line */}
        <div className="w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden mb-3.5 relative">
          <div
            className="h-full bg-gradient-to-r from-[#C5A059] via-[#38BDF8] to-[#FAF9F6] transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center gap-2 text-[10px] font-mono-telemetry text-[#E6D7C3] tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5 text-[#38BDF8] animate-spin" />
          <span>INITIALIZING SUPERYACHT STAGE · {String(percent).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
