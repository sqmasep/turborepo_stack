import type { Config } from "tailwindcss";
import uiConfig from "@repo/tailwind-config";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [uiConfig],
  // TODO see if i keep this prefix
  prefix: "ui-",
} satisfies Config;

export default config;
