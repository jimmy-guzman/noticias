/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports -- TODO:
  presets: [require("@noticias/tailwind-config")],
};
