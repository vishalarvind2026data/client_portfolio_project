"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { Sparkles } from "lucide-react";

interface DeckExpertise {
  deckNum: string;
  title: string;
  subtitle: string;
  desc: string;
  stepIndex: number;
}

const DECK_EXPERTISE: DeckExpertise[] = [
  {
    deckNum: "DECK 01 / 06",
    title: "AVIONICS & TELEMETRY",
    subtitle: "High-Seas Electronic Systems",
    desc: "Satellite telemetry, radar navigation, and offshore passage planning.",
    stepIndex: 1,
  },
  {
    deckNum: "DECK 02 / 06",
    title: "CHARTER LOGISTICS",
    subtitle: "VIP Riviera Operations",
    desc: "Bespoke itineraries, tender transfers, and UHNW guest management.",
    stepIndex: 2,
  },
  {
    deckNum: "DECK 03 / 06",
    title: "YACHT BROKERAGE",
    subtitle: "Sales & Acquisitions",
    desc: "Vessel valuation, buyer advocacy, and prime Monaco berth placement.",
    stepIndex: 3,
  },
  {
    deckNum: "DECK 04 / 06",
    title: "MARITIME LAW",
    subtitle: "MYBA Contracts & Diligence",
    desc: "Charter contracts, regulatory compliance, and transaction structuring.",
    stepIndex: 4,
  },
  {
    deckNum: "DECK 05 / 06",
    title: "TECHNICAL AUDITS",
    subtitle: "Propulsion & Surveys",
    desc: "Engine room inspections, refit oversight, and class compliance.",
    stepIndex: 5,
  },
  {
    deckNum: "DECK 06 / 06",
    title: "FLEET MANAGEMENT",
    subtitle: "Harbor & Port Operations",
    desc: "Commercial fleet oversight across Saint-Tropez, Cannes, and Monaco.",
    stepIndex: 6,
  },
];

export function YachtExplodeShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeDeck, setActiveDeck] = useState<DeckExpertise>(DECK_EXPERTISE[0]);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const sectionElement = sectionRef.current;

    // ------------------------------------------------------------------
    // 1. SCENE & CAMERA INITIALIZATION
    // ------------------------------------------------------------------
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    // Studio Perspective Camera: 30° FOV, 19.5 units back
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    camera.position.set(0, 2.0, 19.5);
    camera.lookAt(0, 0, 0);

    // ------------------------------------------------------------------
    // 2. RENDERER SETUP (ACES Filmic Tone Mapping + PCF Soft Shadows)
    // ------------------------------------------------------------------
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ------------------------------------------------------------------
    // 3. STUDIO REFLECTIONS & LIGHTING (PMREM ROOM ENVIRONMENT)
    // ------------------------------------------------------------------
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    // Main Champagne Key Light (Warm sunlight on deck)
    const keyLight = new THREE.DirectionalLight(0xfff8ea, 3.8);
    keyLight.position.set(14, 20, 15);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Côte d'Azur Azure Rim Light (Accentuates hull curves)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    rimLight.position.set(-16, 10, -12);
    scene.add(rimLight);

    // Subtle Marine Fill Light from bottom
    const bottomFillLight = new THREE.DirectionalLight(0x0284c7, 1.2);
    bottomFillLight.position.set(0, -10, 5);
    scene.add(bottomFillLight);

    // Internal Core Engine Room Floodlights
    const enginePointLight = new THREE.PointLight(0xd4af37, 4.0, 14);
    enginePointLight.position.set(0, 0.0, -1.2);
    scene.add(enginePointLight);

    const saloonPointLight = new THREE.PointLight(0xffeedd, 2.2, 10);
    saloonPointLight.position.set(0, 0.5, 0.5);
    scene.add(saloonPointLight);

    // ------------------------------------------------------------------
    // 4. FLOATING LUMINESCENT SEA SPRAY PARTICLES
    // ------------------------------------------------------------------
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 22;
      particlePositions[i + 1] = (Math.random() - 0.2) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 18;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 0.065,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ------------------------------------------------------------------
    // 5. THE PBR LUXURY MATERIALS
    // ------------------------------------------------------------------
    // High-Gloss White Pearl Marine Lacquer
    const matHullWhite = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.08,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
    });

    // Dark Sapphire Metallic Antifouling Bottom
    const matHullNavy = new THREE.MeshPhysicalMaterial({
      color: 0x071324,
      roughness: 0.12,
      metalness: 0.45,
      clearcoat: 0.95,
    });

    // Smoked Obsidian Tinted Glass
    const matObsidianGlass = new THREE.MeshPhysicalMaterial({
      color: 0x06111f,
      roughness: 0.02,
      transmission: 0.9,
      transparent: true,
      opacity: 0.88,
      ior: 1.55,
      thickness: 0.4,
      clearcoat: 1.0,
    });

    // Honey-Warm Marine Teak Wood Decking
    const matTeakDeck = new THREE.MeshStandardMaterial({
      color: 0xa87742,
      roughness: 0.65,
      metalness: 0.02,
    });

    // Mirror-Polished Champagne Gold (#d4af37)
    const matChampagneGold = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    // Brushed Titanium Alloy (#334155)
    const matBrushedTitanium = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.28,
      metalness: 0.88,
    });

    // Prismatic Cyan Pool Water with Emissive Glow
    const matPoolWater = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
    });

    // White Leather Upholstery
    const matLeather = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.82,
      metalness: 0.02,
    });

    // Polished Marine Chrome
    const matChrome = new THREE.MeshPhysicalMaterial({
      color: 0xe2e8f0,
      metalness: 0.98,
      roughness: 0.05,
      clearcoat: 1.0,
    });

    // ------------------------------------------------------------------
    // HELPER: STREAMLINED AERODYNAMIC YACHT PLANFORM CREATOR
    // Bow at +Z, Stern at -Z, Correctly Oriented with rotateX(Math.PI / 2)
    // ------------------------------------------------------------------
    const createYachtShape = (
      bowZ: number,
      sternZ: number,
      maxBeam: number,
      transomRatio: number = 0.84
    ) => {
      const shape = new THREE.Shape();
      const halfBeam = maxBeam * 0.5;
      const shoulderZ = bowZ * 0.55;

      shape.moveTo(0, bowZ);
      shape.bezierCurveTo(
        halfBeam * 0.45,
        bowZ * 0.85,
        halfBeam,
        shoulderZ,
        halfBeam,
        0
      );
      shape.lineTo(halfBeam * transomRatio, sternZ);
      shape.quadraticCurveTo(0, sternZ - 0.18, -halfBeam * transomRatio, sternZ);
      shape.lineTo(-halfBeam, 0);
      shape.bezierCurveTo(
        -halfBeam,
        shoulderZ,
        -halfBeam * 0.45,
        bowZ * 0.85,
        0,
        bowZ
      );

      return shape;
    };

    // ------------------------------------------------------------------
    // 6. MASTER YACHT ASSEMBLY GROUP
    // ------------------------------------------------------------------
    const masterYacht = new THREE.Group();
    scene.add(masterYacht);

    // Initial 3/4 front beauty angle shifted left slightly for side card balance
    masterYacht.position.x = -0.9;
    masterYacht.rotation.y = -0.75;
    masterYacht.rotation.x = 0.18;

    // ==================================================================
    // LAYER 06 (layer06_LowerHullProps) — Base: baseY = -0.55
    // Deep-V Sculpted Lower Monohull, Boot Stripe, Portholes & Propellers
    // ==================================================================
    const layer06 = new THREE.Group();
    masterYacht.add(layer06);

    const hullShape = createYachtShape(5.8, -5.2, 3.2, 0.85);
    const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
      depth: 0.58,
      bevelEnabled: true,
      bevelThickness: 0.28,
      bevelSize: 0.22,
      bevelSegments: 5,
    });
    hullGeo.rotateX(Math.PI / 2);
    const hullMesh = new THREE.Mesh(hullGeo, matHullNavy);
    layer06.add(hullMesh);

    // Gold Boot-Stripe Accent Line running along waterline
    const stripeShape = createYachtShape(5.72, -5.1, 3.24, 0.86);
    const stripeGeo = new THREE.ExtrudeGeometry(stripeShape, {
      depth: 0.04,
      bevelEnabled: false,
    });
    stripeGeo.rotateX(Math.PI / 2);
    const stripeMesh = new THREE.Mesh(stripeGeo, matChampagneGold);
    stripeMesh.position.set(0, 0.22, 0);
    layer06.add(stripeMesh);

    // Glowing Azure Under-Hull LED Line
    const ledStripeMesh = new THREE.Mesh(
      stripeGeo,
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    ledStripeMesh.position.set(0, 0.16, 0);
    layer06.add(ledStripeMesh);

    // Recessed Illuminated Hull Portholes (Port & Starboard)
    for (let p = 0; p < 6; p++) {
      const pz = -2.4 + p * 0.95;
      const pw = 0.08,
        ph = 0.05;
      const portLightMat = new THREE.MeshBasicMaterial({ color: 0xfff0c2 });

      const portHoleL = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, ph, pw),
        portLightMat
      );
      portHoleL.position.set(-1.46, 0.12, pz);
      layer06.add(portHoleL);

      const portHoleR = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, ph, pw),
        portLightMat
      );
      portHoleR.position.set(1.46, 0.12, pz);
      layer06.add(portHoleR);
    }

    // Bow Chrome Anchor Pockets
    const anchorPocketL = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.12, 0.22),
      matBrushedTitanium
    );
    anchorPocketL.position.set(-0.75, 0.22, 4.6);
    anchorPocketL.rotation.y = 0.35;
    layer06.add(anchorPocketL);

    const anchorPocketR = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.12, 0.22),
      matBrushedTitanium
    );
    anchorPocketR.position.set(0.75, 0.22, 4.6);
    anchorPocketR.rotation.y = -0.35;
    layer06.add(anchorPocketR);

    // Swim Platform
    const swimPlat = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.07, 0.75),
      matTeakDeck
    );
    swimPlat.position.set(0, 0.28, -5.3);
    layer06.add(swimPlat);

    // Swim Platform Ladder
    const swimLadder = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.02, 0.4),
      matChrome
    );
    swimLadder.position.set(-0.85, 0.32, -5.45);
    layer06.add(swimLadder);

    // Propellers at stern (-Z)
    const createBronzePropeller = (xPos: number) => {
      const propGroup = new THREE.Group();
      propGroup.position.set(xPos, -0.05, -5.2);

      // Shaft strut bracket
      const strut = new THREE.Mesh(
        new THREE.BoxGeometry(0.03, 0.22, 0.08),
        matChampagneGold
      );
      strut.position.set(0, 0.1, 0.1);
      strut.rotation.x = -0.4;
      propGroup.add(strut);

      const hub = new THREE.Mesh(
        new THREE.ConeGeometry(0.09, 0.28, 16),
        matChampagneGold
      );
      hub.rotateX(Math.PI / 2);
      propGroup.add(hub);

      for (let b = 0; b < 5; b++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.03, 0.32, 0.1),
          matChampagneGold
        );
        blade.position.set(
          Math.cos(b * 1.25) * 0.16,
          Math.sin(b * 1.25) * 0.16,
          0.05
        );
        blade.rotation.z = b * 1.25;
        blade.rotation.x = 0.45;
        propGroup.add(blade);
      }

      return propGroup;
    };

    const propLeft = createBronzePropeller(-0.85);
    const propRight = createBronzePropeller(0.85);
    layer06.add(propLeft, propRight);

    // ==================================================================
    // LAYER 05 (layer05_InternalV16Engines) — Base: baseY = -0.15
    // Exposed Structural Ribcage, Turbos & Twin V16 Engines
    // ==================================================================
    const layer05 = new THREE.Group();
    masterYacht.add(layer05);

    const keel = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.22, 9.0),
      matChampagneGold
    );
    layer05.add(keel);

    for (let i = 0; i < 14; i++) {
      const zPos = -4.0 + (i / 13) * 8.0;
      const w = zPos > 1.2 ? Math.max(0.6, 2.9 - (zPos - 1.2) * 0.68) : 2.9;
      const rib = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.065, 0.09),
        i % 2 === 0 ? matChampagneGold : matBrushedTitanium
      );
      rib.position.set(0, 0.03, zPos);
      layer05.add(rib);
    }

    const createV16Block = (xOffset: number) => {
      const engineGroup = new THREE.Group();
      engineGroup.position.set(xOffset, 0.08, -1.6);

      const block = new THREE.Mesh(
        new THREE.BoxGeometry(0.65, 0.42, 1.9),
        matBrushedTitanium
      );
      engineGroup.add(block);

      const h1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.2, 1.8),
        matChampagneGold
      );
      h1.position.set(-0.2, 0.22, 0);
      h1.rotation.z = -0.38;

      const h2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.2, 1.8),
        matChampagneGold
      );
      h2.position.set(0.2, 0.22, 0);
      h2.rotation.z = 0.38;
      engineGroup.add(h1, h2);

      // Chrome Turbochargers & Exhaust Manifolds
      for (let t = 0; t < 3; t++) {
        const turbo = new THREE.Mesh(
          new THREE.CylinderGeometry(0.09, 0.09, 0.12, 16),
          matChrome
        );
        turbo.rotation.z = Math.PI / 2;
        turbo.position.set(-0.38, 0.28, -0.6 + t * 0.6);
        engineGroup.add(turbo);

        const turboR = new THREE.Mesh(
          new THREE.CylinderGeometry(0.09, 0.09, 0.12, 16),
          matChrome
        );
        turboR.rotation.z = Math.PI / 2;
        turboR.position.set(0.38, 0.28, -0.6 + t * 0.6);
        engineGroup.add(turboR);
      }

      return engineGroup;
    };

    const portEngine = createV16Block(-0.75);
    const stbdEngine = createV16Block(0.75);
    layer05.add(portEngine, stbdEngine);

    // ==================================================================
    // LAYER 04 (layer04_MainDeckPool) — Base: baseY = 0.0 (Flush on Hull)
    // Full-Length Main Deck, Teak Flooring, Infinity Pool & VIP Lounge
    // ==================================================================
    const layer04 = new THREE.Group();
    masterYacht.add(layer04);

    const mainDeckShape = createYachtShape(5.7, -5.0, 3.2, 0.88);
    const mainDeckGeo = new THREE.ExtrudeGeometry(mainDeckShape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.035,
      bevelSegments: 4,
    });
    mainDeckGeo.rotateX(Math.PI / 2);
    const mainDeckMesh = new THREE.Mesh(mainDeckGeo, matHullWhite);
    mainDeckMesh.position.set(0, 0.06, 0);
    layer04.add(mainDeckMesh);

    const mainTeakShape = createYachtShape(5.5, -4.8, 3.0, 0.86);
    const mainTeakGeo = new THREE.ExtrudeGeometry(mainTeakShape, {
      depth: 0.02,
      bevelEnabled: false,
    });
    mainTeakGeo.rotateX(Math.PI / 2);
    const mainTeakMesh = new THREE.Mesh(mainTeakGeo, matTeakDeck);
    mainTeakMesh.position.set(0, 0.13, 0);
    layer04.add(mainTeakMesh);

    // Aft Glass-Fronted Infinity Pool with glowing water & gold rim
    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.12, 1.2),
      matPoolWater
    );
    pool.position.set(0, 0.15, -3.8);
    layer04.add(pool);

    const poolRim = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 0.03, 1.3),
      matChampagneGold
    );
    poolRim.position.set(0, 0.21, -3.8);
    layer04.add(poolRim);

    // Aft Luxury Sunbeds (White Stitched Leather)
    const sunbedL = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.08, 1.1),
      matLeather
    );
    sunbedL.position.set(-1.0, 0.16, -3.8);
    const sunbedR = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.08, 1.1),
      matLeather
    );
    sunbedR.position.set(1.0, 0.16, -3.8);
    layer04.add(sunbedL, sunbedR);

    // Foredeck VIP Lounge & Sunbathing Island
    const lounge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.85, 0.08, 24, 1, false, 0, Math.PI),
      matLeather
    );
    lounge.position.set(0, 0.16, 3.6);
    layer04.add(lounge);

    const loungeTable = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.09, 16),
      matTeakDeck
    );
    loungeTable.position.set(0, 0.18, 3.4);
    layer04.add(loungeTable);

    // Foredeck Chrome Fairleads & Cleats
    const cleatL = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.03, 0.12),
      matChrome
    );
    cleatL.position.set(-1.0, 0.15, 4.2);
    const cleatR = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.03, 0.12),
      matChrome
    );
    cleatR.position.set(1.0, 0.15, 4.2);
    layer04.add(cleatL, cleatR);

    // ==================================================================
    // LAYER 03 (layer03_OwnerUpperSaloon) — Base: baseY = +0.38
    // Owner's Deck, Panoramic Obsidian Glass, Aero Wings & Terrace
    // ==================================================================
    const layer03 = new THREE.Group();
    masterYacht.add(layer03);

    const upShape = createYachtShape(4.0, -3.8, 2.7, 0.9);
    const upGeo = new THREE.ExtrudeGeometry(upShape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 4,
    });
    upGeo.rotateX(Math.PI / 2);
    const upMesh = new THREE.Mesh(upGeo, matHullWhite);
    upMesh.position.set(0, 0.05, -0.2);
    layer03.add(upMesh);

    // Teak floor for Owner's private terrace
    const upTeakShape = createYachtShape(3.8, -3.6, 2.5, 0.88);
    const upTeakGeo = new THREE.ExtrudeGeometry(upTeakShape, {
      depth: 0.015,
      bevelEnabled: false,
    });
    upTeakGeo.rotateX(Math.PI / 2);
    const upTeakMesh = new THREE.Mesh(upTeakGeo, matTeakDeck);
    upTeakMesh.position.set(0, 0.11, -0.2);
    layer03.add(upTeakMesh);

    // Main Saloon Obsidian Glass Superstructure
    const saloonShape = createYachtShape(3.0, -2.6, 2.0, 0.92);
    const saloonGeo = new THREE.ExtrudeGeometry(saloonShape, {
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 3,
    });
    saloonGeo.rotateX(Math.PI / 2);
    const saloonGlass = new THREE.Mesh(saloonGeo, matObsidianGlass);
    saloonGlass.position.set(0, 0.18, -0.2);
    layer03.add(saloonGlass);

    // Sculpted Aero Wings with Port & Starboard Navigation Lights
    const w1 = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.32, 2.2),
      matHullWhite
    );
    w1.position.set(-1.12, 0.24, -1.1);
    w1.rotation.x = 0.26;

    const navLightPort = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    navLightPort.position.set(-1.16, 0.36, -0.2);
    layer03.add(w1, navLightPort);

    const w2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.32, 2.2),
      matHullWhite
    );
    w2.position.set(1.12, 0.24, -1.1);
    w2.rotation.x = 0.26;

    const navLightStbd = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0x22c55e })
    );
    navLightStbd.position.set(1.16, 0.36, -0.2);
    layer03.add(w2, navLightStbd);

    // ==================================================================
    // LAYER 02 (layer02_FlybridgeHelipad) — Base: baseY = +0.72
    // Flybridge Deck, Navigation Visor Glass & Touch-and-Go Helipad
    // ==================================================================
    const layer02 = new THREE.Group();
    masterYacht.add(layer02);

    const flyShape = createYachtShape(2.5, -2.7, 2.3, 0.88);
    const flyGeo = new THREE.ExtrudeGeometry(flyShape, {
      depth: 0.09,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 4,
    });
    flyGeo.rotateX(Math.PI / 2);
    const flyMesh = new THREE.Mesh(flyGeo, matHullWhite);
    flyMesh.position.set(0, 0.045, -0.3);
    layer02.add(flyMesh);

    // Navigation Bridge Forward Visor Glass
    const bridgeGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 1.0, 0.28, 32, 1, false, 0, Math.PI),
      matObsidianGlass
    );
    bridgeGlass.rotateY(-Math.PI / 2);
    bridgeGlass.position.set(0, 0.18, 0.85);
    layer02.add(bridgeGlass);

    // Touch-and-Go Helipad Disc & Gold "H"
    const heliDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.72, 0.018, 32),
      matBrushedTitanium
    );
    heliDisc.position.set(0, 0.09, -1.2);
    layer02.add(heliDisc);

    const h1 = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.018, 0.38),
      matChampagneGold
    );
    h1.position.set(-0.13, 0.1, -1.2);
    const h2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.018, 0.38),
      matChampagneGold
    );
    h2.position.set(0.13, 0.1, -1.2);
    const hc = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.018, 0.04),
      matChampagneGold
    );
    hc.position.set(0, 0.1, -1.2);
    layer02.add(h1, h2, hc);

    // Perimeter Helipad Safety Warning Ring
    const heliRing = new THREE.Mesh(
      new THREE.RingGeometry(0.68, 0.72, 32),
      matChampagneGold
    );
    heliRing.rotateX(-Math.PI / 2);
    heliRing.position.set(0, 0.102, -1.2);
    layer02.add(heliRing);

    // Flybridge Outdoor Wet Bar
    const wetBar = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.14, 0.22),
      matTeakDeck
    );
    wetBar.position.set(-0.6, 0.16, -0.2);
    layer02.add(wetBar);

    // ==================================================================
    // LAYER 01 (layer01_RadarMast) — Base: baseY = +1.05
    // Aerodynamic Hardtop, SATCOM Domes & Swept-Back Radar Mast
    // ==================================================================
    const layer01 = new THREE.Group();
    masterYacht.add(layer01);

    const htShape = createYachtShape(1.8, -1.8, 1.9, 0.92);
    const htGeo = new THREE.ExtrudeGeometry(htShape, {
      depth: 0.065,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 4,
    });
    htGeo.rotateX(Math.PI / 2);
    const htMesh = new THREE.Mesh(htGeo, matHullWhite);
    htMesh.position.set(0, 0.03, -0.6);
    layer01.add(htMesh);

    // Mast Aerodynamic Arch
    const mastWing = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.06, 0.3),
      matHullWhite
    );
    mastWing.position.set(0, 0.45, -1.2);
    layer01.add(mastWing);

    // Mast Titanium Pillars
    const mastPillarL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.045, 0.45, 12),
      matBrushedTitanium
    );
    mastPillarL.position.set(-0.55, 0.22, -1.1);
    mastPillarL.rotation.x = -0.2;
    const mastPillarR = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.045, 0.45, 12),
      matBrushedTitanium
    );
    mastPillarR.position.set(0.55, 0.22, -1.1);
    mastPillarR.rotation.x = -0.2;
    layer01.add(mastPillarL, mastPillarR);

    // Dual Inmarsat SATCOM Domes on Pedestals
    const s1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 24, 24),
      matHullWhite
    );
    s1.position.set(-0.5, 0.6, -1.2);
    const ped1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 0.12, 12),
      matChampagneGold
    );
    ped1.position.set(-0.5, 0.49, -1.2);

    const s2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 24, 24),
      matHullWhite
    );
    s2.position.set(0.5, 0.6, -1.2);
    const ped2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 0.12, 12),
      matChampagneGold
    );
    ped2.position.set(0.5, 0.49, -1.2);
    layer01.add(s1, ped1, s2, ped2);

    // FLIR Thermal Night-Vision Ball Camera
    const flirCamera = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      matBrushedTitanium
    );
    flirCamera.position.set(0, 0.52, -1.05);
    layer01.add(flirCamera);

    // Continuously Spinning Gold Radar Bar
    const radarBar = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 0.05, 0.1),
      matChampagneGold
    );
    radarBar.position.set(0, 0.64, -1.2);
    layer01.add(radarBar);

    // ==================================================================
    // VERTICAL PRECISION CAD ALIGNMENT AXES
    // ==================================================================
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
      transparent: true,
      opacity: 0.0,
    });

    const alignmentRods: THREE.Mesh[] = [];
    const rodCoords: [number, number][] = [
      [-1.1, -3.0],
      [1.1, -3.0],
      [-1.2, 0.8],
      [1.2, 0.8],
      [0, 3.8],
    ];

    rodCoords.forEach(([rx, rz]) => {
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 6.5, 12),
        rodMat
      );
      rod.position.set(rx, 0.2, rz);
      masterYacht.add(rod);
      alignmentRods.push(rod);
    });

    // ------------------------------------------------------------------
    // 7. INITIAL ASSEMBLED POSITIONS (FLUSH SEAMLESS LUXURY SHIP)
    // ------------------------------------------------------------------
    layer01.position.y = 1.05;
    layer02.position.y = 0.72;
    layer03.position.y = 0.38;
    layer04.position.y = 0.0;
    layer05.position.y = -0.15;
    layer06.position.y = -0.55;

    let rawProgress = 0;
    let smoothProgress = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => {
      const rect = sectionElement.getBoundingClientRect();
      const totalScrollable = sectionElement.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const prog = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      rawProgress = prog;

      // Update active deck card based on scroll position
      const deckIdx = Math.min(5, Math.floor(prog * 6));
      setActiveDeck(DECK_EXPERTISE[deckIdx]);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    // ------------------------------------------------------------------
    // 8. REAL-TIME RENDER LOOP (DISASSEMBLY, ROTATION & MECHANICAL SPIN)
    // ------------------------------------------------------------------
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth progress interpolation
      smoothProgress += (rawProgress - smoothProgress) * 0.09;

      // Bell-Curve Explode Factor: 0 -> 1.0 -> 0
      const explodeFactor = Math.pow(Math.sin(smoothProgress * Math.PI), 1.15);

      // Calibrated Vertical Separation (Strictly framed, zero clipping)
      layer01.position.y = 1.05 + explodeFactor * 1.6;
      layer02.position.y = 0.72 + explodeFactor * 1.1;
      layer03.position.y = 0.38 + explodeFactor * 0.55;
      layer04.position.y = 0.0 + explodeFactor * 0.05;
      layer05.position.y = -0.15 - explodeFactor * 0.65;
      layer06.position.y = -0.55 - explodeFactor * 1.45;

      // Smooth Orbital Sweep
      masterYacht.rotation.y =
        -0.75 - smoothProgress * Math.PI * 1.1 + mouseX * 0.12;
      masterYacht.rotation.x =
        0.18 + explodeFactor * 0.08 + mouseY * 0.06;

      // Internal Engine Lights Illuminate Mechanical Core
      enginePointLight.intensity = 0.4 + explodeFactor * 4.2;
      saloonPointLight.intensity = 0.3 + explodeFactor * 2.5;

      // Fade in CAD alignment guide rods
      alignmentRods.forEach((rod) => {
        rodMat.opacity = explodeFactor * 0.35;
        rod.scale.y = 0.4 + explodeFactor * 0.6;
      });

      // Continuous Micro-Animations
      radarBar.rotation.y += 0.045;
      propLeft.rotation.z += 0.08;
      propRight.rotation.z -= 0.08;

      // Gentle floating sea dust particle drift
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // ------------------------------------------------------------------
    // 9. RESIZE LISTENER
    // ------------------------------------------------------------------
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      pmremGenerator.dispose();
      roomEnv.dispose();
    };
  }, []);

  return (
    <section
      id="yacht-sticky-scroll-container"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "450vh",
        background:
          "radial-gradient(ellipse at 44% 48%, #144070 0%, #0C284A 38%, #081B33 68%, #040D1A 100%)",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        id="yacht-sticky-stage"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Subtle Ambient Marine Glow Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 45% 45%, rgba(14, 165, 233, 0.16) 0%, transparent 60%), radial-gradient(circle at 75% 20%, rgba(197, 160, 89, 0.1) 0%, transparent 45%), radial-gradient(circle at 20% 85%, rgba(2, 132, 199, 0.15) 0%, transparent 50%)",
            zIndex: 1,
          }}
        />

        {/* Subtle Nautical Telemetry & Coordinates Watermark */}
        <div
          className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 md:p-12 opacity-40 font-mono-telemetry text-[10px] md:text-[11px] tracking-widest text-[#7DD3FC] uppercase"
          style={{ zIndex: 2 }}
        >
          <div className="flex justify-between items-center">
            <span>GOLFE DE SAINT-TROPEZ · 43.2677° N, 6.6407° E</span>
            <span className="hidden sm:inline">SOUNDING: 42M // SEABED SAND</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="hidden sm:inline">FLEET RADAR ACTIVE · RANGE 24 NM</span>
            <span>ARYAN BATRA // YACHT BROKERAGE PORTFOLIO</span>
          </div>
        </div>

        <canvas
          id="superyacht-boat-canvas"
          ref={canvasRef}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "block",
            outline: "none",
            zIndex: 3,
          }}
        />

        {/* Floating Luxury Expertise Side Tab (Synchronized with 3D Yacht Disassembly) */}
        <div
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-80 p-6 rounded-2xl border border-[#C5A059]/35 shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(56,189,248,0.12)] pointer-events-auto transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(8, 25, 48, 0.85) 0%, rgba(4, 14, 28, 0.75) 100%)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            zIndex: 15,
          }}
        >
          <div className="flex items-center justify-between mb-3 text-[10px] font-mono-telemetry tracking-widest uppercase">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/35 font-semibold text-[#C5A059]">
              <Sparkles className="w-3 h-3 text-[#38BDF8]" />
              EXPERTISE
            </span>
            <span className="font-semibold text-[#38BDF8]">
              {activeDeck.deckNum}
            </span>
          </div>

          <h3 className="font-cinzel text-lg font-bold tracking-wide text-white mb-1 uppercase">
            {activeDeck.title}
          </h3>

          <p className="text-[11px] font-semibold text-[#C5A059] tracking-wider uppercase mb-2">
            {activeDeck.subtitle}
          </p>

          <p className="text-xs text-[#94A3B8] font-sans-luxury leading-relaxed mb-4">
            {activeDeck.desc}
          </p>

          {/* 6-Step Disassembly Progress Indicator */}
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  step <= activeDeck.stepIndex
                    ? "bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.8)]"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
