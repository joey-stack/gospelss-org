import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0FDFA",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
        },
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          900: "#111827",
        },
        slate: {
          800: "#1E293B",
          900: "#0F172A",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        hanken: ["var(--font-heading)", "Hanken Grotesk", "Inter", "sans-serif"],
        inter: ["var(--font-body)", "var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Hanken Grotesk", "Inter", "sans-serif"],
        body: ["var(--font-body)", "var(--font-sans)", "Inter", "sans-serif"],
        accent: ["var(--font-serif)", "EB Garamond", "serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        "2xl": "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15, 23, 42, 0.05)",
        md: "0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
        lg: "0 10px 24px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -4px rgba(15, 23, 42, 0.05)",
        xl: "0 20px 40px -4px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
