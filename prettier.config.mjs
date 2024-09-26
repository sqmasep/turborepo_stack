/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",

  plugins: ["prettier-plugin-tailwindcss"],
  tailwindAttributes: ["class", "className", "ngClass"],
};
