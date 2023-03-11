/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse_finite: "pulse 1s ease-in-out 1s",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primary: "#FF5A09",
        primaryBg: "#393939",
        primaryCard: "#ec7f37",
        lineColor: "#be4f0c",
        greyOut: "rgba(146, 144, 142, 1)",
        background: "rgba(250, 250, 250, 1)",
        white: "rgba(255, 255, 255, 1)",
        title: "rgba(56, 33, 12, 1)",
        loading: "rgba(150, 150, 150, 0.5)",
      },
    },
  },
  plugins: [],
};
