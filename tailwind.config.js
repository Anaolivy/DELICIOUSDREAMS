/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: '#C7A7EB',
          'baby-pink': '#FDD6E3',
          'pastel-yellow': '#FBE9AA',
          'soft-blue': '#A9C5F2',
          bubblegum: '#FFD3E3',
          'deep-lilac': '#7B66AC',
        }
      },
      fontFamily: {
        'baloo': ['"Baloo Bhai 2"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};