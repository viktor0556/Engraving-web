/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind.config.js
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
}
}
