/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors:{
        'gray-10':'rgb(226, 229, 233)',
        'gray-20' : 'rgba(226, 229, 234,1)',
        'gray-30' : 'rgba(224, 228, 232)',
        'white-0' : " #fff",
      },
      borderWidth:{
        '3':'3px'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    // require('@tailwindcss/forms'),  
  ],
}

