/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "luxury", "retro", "corporate", "cyberpunk"],
  },
  plugins: [require("daisyui")],
};
