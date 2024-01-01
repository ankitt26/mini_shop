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
  },
  plugins: [],
};
