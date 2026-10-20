/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070B",
        glass: "rgba(10, 14, 23, 0.72)",
        alabaster: "#F8FAFC",
        slate: {
          telemetry: "#64748B",
          dark: "#0F172A",
          steel: "#1E293B",
        },
        brass: {
          light: "#E5C88A",
          DEFAULT: "#C5A059",
          dark: "#997532",
        },
        crimson: {
          DEFAULT: "#E11D48",
          glow: "rgba(225, 29, 72, 0.4)",
        },
        cyan: {
          sonar: "#38BDF8",
          glow: "rgba(56, 189, 248, 0.35)",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        display: "-0.04em",
        telemetry: "0.22em",
      },
      borderColor: {
        hairline: "rgba(255, 255, 255, 0.07)",
        brass: "rgba(197, 160, 89, 0.3)",
      },
      backgroundImage: {
        "vignette-radial": "radial-gradient(circle at 50% 45%, rgba(197, 160, 89, 0.06) 0%, rgba(5, 7, 11, 0) 65%)",
      },
    },
  },
  plugins: [],
};
