/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        copper: {
          300: "#ffcca8",
          400: "#dfa882", // Custom color for the logo and script
          500: "#c88d65",
          600: "#a3835e",
        },
        brand: {
          navy: "#00394E",   // Deep Teal/Navy: Headers, footer, body text
          coral: "#D44659",  // Warm Coral Red: CTAs, buttons, highlights
          white: "#FDF9FB",  // Soft White: Main background
          gold: "#DAA434",   // Warm Mustard: Icons, accents, hover effects
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
