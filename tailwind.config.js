// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FDF6F0",
        card: "#EBDACF",
        textDark: "#3D2C2C",
        textLight: "#8B7E74",
        primaryBtn: "#4E3629",
      },
    },
  },
  plugins: [],
};
