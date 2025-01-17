/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        animation:{
          'fade-in':'fadeIn 1s ease-in-out',
          'fade-in1':'fadeIn 1.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
    },
  },
  plugins: [],
}