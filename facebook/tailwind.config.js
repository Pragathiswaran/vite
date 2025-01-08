/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors:{
        'gray-10' : 'rgb(226, 229, 233)',
        'gray-20' : 'rgba(226, 229, 234,1)',
        'gray-30' : 'rgba(224, 228, 232)',
        'white-0' : " #fff",
      },
      borderWidth:{
        '3':'3px'
      },
      boxShadow:{
        'r' : '4px 0 8px rgba(0,0,0,0.1)',
      },
      keyframes: {
        fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
    },
    animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
    },
    spacing: {
      '-popover': '-100%', // Negative values for positioning
      'popover-behind' : '-100%',
  },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({strategy:"class"}),
    require('preline/plugin'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),  
  ],
}

