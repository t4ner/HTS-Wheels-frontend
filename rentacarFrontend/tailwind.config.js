/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        translate: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-60%)" },
        },
      },
      animation: {
        translate: "translate 70s linear infinite",
      },
    },
  },
  plugins: [],
};
