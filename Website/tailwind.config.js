/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary': '#024e92',
        'secondary': '#e97c31',
        'tertiary': '#cfe2f3',
        'quaternary': '#e6f6e1',
        'quinary': '#bd255b',
        'senary': '#ff9900',
        'footer': '#fafcfa',
      }
    },
  },
  plugins: [],
}