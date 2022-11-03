/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-image.png')",
      },
      colors: {
        purple: "#753ba1",
      },
    },
  },
  plugins: [],
};
