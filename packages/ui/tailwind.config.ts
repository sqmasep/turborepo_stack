import type { Config } from "tailwindcss";
import uiConfig from "@repo/tailwind-config";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [uiConfig],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
