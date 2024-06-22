/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'netflix-black': '#141402',
      },
      fontSize:{
        '1xl':'1.75rem',
        '2.5xl':'2.5rem'
      }
    },
  },
  plugins: [],
}

