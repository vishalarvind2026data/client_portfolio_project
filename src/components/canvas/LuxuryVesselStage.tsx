"use client";

import React, { useEffect, useRef } from "react";
import { useEngineStore } from "@/store/useEngineStore";

// -----------------------------------------------------------------
// LUXURY MEDIA CONFIGURATION
// Configured with photorealistic cinema-grade footage & photography
// -----------------------------------------------------------------
export const LUXURY_MEDIA_CONFIG = {
  // Cinema Video Assets
  deepOceanVideo: "/videos/ocean-waves.mp4",
  yachtWakeVideo: "/videos/wake-behind-boat.webm",

  // High-Resolution Authentic Assets
  saintTropezImage: "/images/riviera-superyacht-beach.jpg",
  cannesImage: "/images/cannes-yachting.jpg",
  frenchRivieraImage: "/images/french-riviera-yachting.jpg",
};

export function LuxuryVesselStage() {
  const scrollProgress = useEngineStore((s) => s.scrollProgress);
  const pointer = useEngineStore((s) => s.pointer);

  const videoOceanRef = useRef<HTMLVideoElement>(null);
  const videoWakeRef = useRef<HTMLVideoElement>(null);

  // Parallax subtle camera glide based on mouse pointer
  const parallaxX = pointer.x * 12;
  const parallaxY = pointer.y * 8;

  useEffect(() => {
    const playSafe = async (vid: HTMLVideoElement | null) => {
      if (vid) {
        try {
          vid.playbackRate = 0.85;
          await vid.play();
        } catch {
          // Autoplay fallback
        }
      }
    };

    playSafe(videoOceanRef.current);
    playSafe(videoWakeRef.current);
  }, []);

  // -----------------------------------------------------------------
  // 3D DISASSEMBLING NAUTICAL GYRO-COMPASS DEPTH FACTOR
  // Smoothly disassembles and expands into separated 3D layers on scroll
  // -----------------------------------------------------------------
  const disassembleDepth = Math.sin(scrollProgress * Math.PI) * 120; // 0px -> 120px separation -> 0px
  const rotationZ = scrollProgress * 180; // smooth 180deg rotation across the site

  return (
    <div
      id="luxury-vessel-stage"
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* ============================================================== */}
      {/* 1. CINEMA VIDEO BACKGROUND STAGE (DYNAMIC CROSSFADING) */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${parallaxX * 0.4}px, ${parallaxY * 0.4}px) scale(1.03)`,
        }}
      >
        {/* Layer A: Full-Viewport Deep Ocean Water (Hero & Early Scroll) */}
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: scrollProgress < 0.5 ? 1 : Math.max(0, 1 - (scrollProgress - 0.5) * 3),
          }}
        >
          <video
            ref={videoOceanRef}
            src={LUXURY_MEDIA_CONFIG.deepOceanVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] saturate-[1.15]"
          />
        </div>

        {/* Layer B: High-Speed Superyacht Wake Spray (Later Scroll & Contact) */}
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: scrollProgress >= 0.5 ? Math.min(1, (scrollProgress - 0.5) * 3) : 0,
          }}
        >
          <video
            ref={videoWakeRef}
            src={LUXURY_MEDIA_CONFIG.yachtWakeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.15] saturate-[1.2]"
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. CÔTE D'AZUR HOROLOGICAL LIGHTING & OCEAN MIST GRADIENTS */}
      {/* ============================================================== */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-[#050D1A]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A]/85 via-transparent to-[#050D1A]/85 pointer-events-none" />

      {/* Ambient Côte d'Azur Vignette */}
      <div className="absolute inset-0 bg-[#050D1A]/30 pointer-events-none" />
    </div>
  );
}
