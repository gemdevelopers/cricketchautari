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
},
  plugins: [],
}
