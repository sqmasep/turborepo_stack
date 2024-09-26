import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        salt: {
          500: "#777",
        },
      },
    },
  },
  plugins: [],
};
export default config;
