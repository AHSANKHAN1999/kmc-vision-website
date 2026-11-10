/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C36',   // Deep Green
        secondary: '#D4AF37', // Premium Golden
        accent: '#E6B800',    // Hover Golden
        background: '#FAFAFA',// Clean Minimal Off-white
      }
    },
  },
  plugins: [],
};