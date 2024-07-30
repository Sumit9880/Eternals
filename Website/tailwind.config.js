/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#024e92',
        'secondary': '#24a845',
        'tertiary': '#cfe2f3',
        'quaternary': '#e6f6e1',
        'quinary': '#bd255b',
        'senary': '#ffad19',
        'footer': '#fafcfa',
      }
    },
  },
  plugins: [],
}