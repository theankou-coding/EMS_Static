/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    dark: "#0000",
    light: "#ffff",

    extend: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#5FBDFF",
        secendery: "#4B5563",
        acient: "#FF6F69",
      },
    },
  },
  plugins: [],
};
