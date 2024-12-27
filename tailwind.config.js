/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        halfRotate: 'halfRotate 3s linear infinite', // Customize duration, easing, etc.
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(30%) scale(0.7)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        halfRotate: {
          '0%': { transform: 'rotate(-25deg)' },
          '50%': { transform: 'rotate(25deg)' },
          '100%': { transform: 'rotate(-25deg)' },
        },
      },
    },
  },
  plugins: [],
}

