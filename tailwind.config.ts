import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
        display: ["var(--font-bodoni)", "Bodoni Moda", "serif"],
      },
      colors: {
        ink: "#070708",
        jet: "#000000",
        surface: "#111114",
        "surface-raised": "#18181c",
        text: "#f4f1ec",
        muted: "#a8a29e",
        accent: "#c8cdd4",
      },
    },
  },
};

export default config;
