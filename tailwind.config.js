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
    'sm': {'max': '479px'}, // Max width of 479px
      'md': {'max': '767px'}, // Max width of 767px
      'lg': {'max': '1023px'}, // Max width of 1023px
      'xl': {'max': '1199px'}, // Max width of 1199px
      '2xl': {'max': '1535px'}, // Max width of 1535px

  },
  
},
  plugins: [],
}
