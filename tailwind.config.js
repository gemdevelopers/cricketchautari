/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'cc-primary': '#19936E',
        'cc-secondary': '#18A87F',
        'cc-yellow': '#FFD23F',
        'cc-blue': '#540D6E',
      },
      fontFamily: {
        siluguri: ['Hind Siliguri', 'sans-serif']
      },
  },
  screens:{
   // 'sm': '640px',
    // => @media (min-width: 640px) { ... }

   // 'md': '768px',
    // => @media (min-width: 768px) { ... }

    //'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

   // 'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

  //  '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }

    //new
    'sm': {'min': '479px'}, // Min width of 479px
    'md': {'min': '767px'}, // Min width of 767px
    'lg': {'min': '1023px'}, // Min width of 1023px
    'xl': {'min': '1599px'}, // Min width of 1199px
    
  },
  
},
  plugins: [],
}
