/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "remnant-gold": "#D4AF37",
        "remnant-black": "#0A0A0A",
        "remnant-white": "#F5F5F5",

        // Secondary Colors
        "remnant-gray": "#333333",
        "remnant-light-gray": "#E0E0E0",

        // Accent Colors
        "remnant-red": "#B22222",
        "remnant-blue": "#1E90FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "product-pattern": "url('/images/product-bg.jpg')",
      },
      boxShadow: {
        "remnant-glow": "0 0 20px rgba(212, 175, 55, 0.3)",
      },
      borderRadius: {
        remnant: "12px",
      },
    },
  },
  plugins: [],
};
