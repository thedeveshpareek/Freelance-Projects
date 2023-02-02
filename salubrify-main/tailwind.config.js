/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB1754",
        secondary: "#fff2f6",
        secondary_light: "#fffafb",
        primary_blue : "#007AD9",
        secondary_blue : "#E6E7FF",

        darkGray: "#2E2E2E",
        lightGray: "#666666",
        offWhite: "#FFF8F5",
      },
      fontWeight: {
        semibold : '600',
      },
      fontFamily: {
        playfair : 'Playfair Display',
        raleway : 'Inter',
        inter : 'Inter',
        roboto : 'Inter',
      }
    },
  },
  plugins: [],
}