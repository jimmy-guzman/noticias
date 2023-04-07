/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: ["coffee"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
