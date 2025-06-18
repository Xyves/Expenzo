/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        diagonal: {
          "100%": { backgroundPosition: "right" },
        },
      },
      animation: {
        diagonal: "diagonal 2s linear infinite",
      },
    },
  },
  plugins: [],
};
