/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        focusRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 0 4px rgba(59, 130, 246, 0)' },
        },
      },
      animation: {
        ripple: 'ripple 0.6s linear',
        focusRing: 'focusRing 1s ease-out',
      },
    },
  },
  plugins: [],
};
