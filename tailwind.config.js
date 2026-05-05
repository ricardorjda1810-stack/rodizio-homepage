/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clay: '#A76745',
        moss: '#68735A',
        oat: '#F3EBDD',
        ink: '#24211E',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(54, 43, 34, 0.16)',
      },
    },
  },
  plugins: [],
};
