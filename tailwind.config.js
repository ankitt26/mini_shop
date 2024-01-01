/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "768px" },

        md: { min: "768.1px", max: "1023px" },

        lg: { min: "1024px", max: "1279px" },
      },
    },
    animation: {
      slideFromLeft: "slideFromLeft 1s ease-out",
      slideFromRight: "slideFromRight 1s ease-out",
    },
    keyframes: {
      slideFromLeft: {
        "0%": {
          opacity: 0,
          transform: "translateX(-100%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      slideFromRight: {
        "0%": {
          opacity: 1,
          transform: "translateX(0)",
        },
        "100%": {
          opacity: 0,
          transform: "translateX(-100%)",
        },
      },
    },
  },
  plugins: [],
};
