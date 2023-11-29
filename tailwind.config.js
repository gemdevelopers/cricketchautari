/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        'white': '#FFFFFF',
        'black': '#000000',
        'cc-primary': '#19936E',
        'cc-secondary': '#0E7959',
        'cc-black': '#3A333A',
        'cc-blue': '#1670F5',
        'cc-red': '#C22424',

      },
      fontFamily: {
        siluguri: ["Hind Siliguri", "sans-serif"],
      },
    },

  },
  plugins: [],
};
