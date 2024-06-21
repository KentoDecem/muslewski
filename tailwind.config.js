/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // lub 'media' dla automatycznego trybu ciemnego
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc", // Primary color
          light: "#6cb2eb", // Light variant
          dark: "#B4C9FF", // Dark variant
        },
        secondary: {
          DEFAULT: "#0D005B", // Primary color
          light: "#6cb2eb", // Light variant
          dark: "#050215", // Dark variant
        },
        background: {
          DEFAULT: "#181D2B",
        },
        accent: {
          DEFAULT: "#2400FF",
        },
        accent2: {
          DEFAULT: "#1800AD",
        },
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        description: ["Titillium Web", "sans-serif"],
        body: ['"Helvetica Neue"', "Arial", "sans-serif"], // Example for body text
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
