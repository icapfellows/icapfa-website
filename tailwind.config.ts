import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // rgb(var(--x-rgb) / <alpha-value>) is required for Tailwind's /NN
        // opacity modifiers (bg-maroon/70, text-ink/60, etc.) to work on
        // custom colors — a plain hex or var() reference silently ignores
        // the modifier and always renders at full opacity.
        maroon: {
          DEFAULT: "rgb(var(--color-maroon-rgb) / <alpha-value>)",
          dark: "rgb(var(--color-maroon-dark-rgb) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--color-gold-rgb) / <alpha-value>)",
          dark: "rgb(var(--color-gold-dark-rgb) / <alpha-value>)",
        },
        brown: {
          DEFAULT: "rgb(var(--color-brown-rgb) / <alpha-value>)",
        },
        surface: {
          soft: "rgb(var(--color-bg-soft-rgb) / <alpha-value>)",
          off: "rgb(var(--color-bg-off-rgb) / <alpha-value>)",
        },
        ink: "rgb(var(--color-text-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "4px",
        md: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
