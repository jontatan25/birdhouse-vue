/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-russian": "#1E1F25",
        "black-pearl": "#131517",
        "blue-lagoon": "#5051F9",
      },
      minHeight: {
        home: "calc(100vh - 72px)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {
      minHeight: ["responsive", "hover", "focus", "home"],
    },
  },
  plugins: [],
};
