/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["coffee"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
