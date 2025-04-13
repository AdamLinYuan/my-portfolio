/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine-slower': 'shine-slower 6s infinite 3s',
        'heartbeat': 'heartbeat 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shine-slower': {
          '0%': { transform: 'translateX(-100%) rotate(25deg)', opacity: 0 },
          '10%': { opacity: 0.7 },
          '30%': { transform: 'translateX(100%) rotate(25deg)', opacity: 0 },
          '100%': { transform: 'translateX(100%) rotate(25deg)', opacity: 0 }
        },
        heartbeat: { // Heartbeat keyframes definition
          '0%, 100%': { transform: 'scale(1)' },
          '5%': { transform: 'scale(1.03)' },
          '10%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.02)' },
          '20%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.01)' },
          '30%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [
  ],
}

