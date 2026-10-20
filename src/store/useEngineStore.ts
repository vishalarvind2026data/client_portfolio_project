import { create } from "zustand";

export interface EngineState {
  // Motion & Scroll
  scrollProgress: number;
  pointer: { x: number; y: number };
  activeSection: string;

  // Preloader
  isLoaded: boolean;

  // Cursor Interaction
  cursorText: string;
  isCursorHovered: boolean;

  // Actions
  setScrollProgress: (progress: number) => void;
  setPointer: (x: number, y: number) => void;
  setActiveSection: (section: string) => void;
  setLoaded: (loaded: boolean) => void;
  setCursor: (text: string, hovered: boolean) => void;
}

export const useEngineStore = create<EngineState>((set) => ({
  scrollProgress: 0,
  pointer: { x: 0, y: 0 },
  activeSection: "hero",
  isLoaded: false,
  cursorText: "",
  isCursorHovered: false,

  setScrollProgress: (progress: number) => {
    let section = "hero";
    if (progress >= 0.8) {
      section = "contact";
    } else if (progress >= 0.55) {
      section = "skills";
    } else if (progress >= 0.3) {
      section = "education";
    } else if (progress >= 0.12) {
      section = "experience";
    }

    set({
      scrollProgress: progress,
      activeSection: section,
    });
  },

  setPointer: (x: number, y: number) => set({ pointer: { x, y } }),
  setActiveSection: (section: string) => set({ activeSection: section }),
  setLoaded: (loaded: boolean) => set({ isLoaded: loaded }),
  setCursor: (text: string, hovered: boolean) =>
    set({ cursorText: text, isCursorHovered: hovered }),
}));
