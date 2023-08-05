/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
