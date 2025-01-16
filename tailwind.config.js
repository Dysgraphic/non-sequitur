/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', 'sans-serif'], 
      },
      keyframes: {
        rainbow: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '400%' },
        },
      },
      animation: {
        rainbow: 'rainbow 6s linear infinite',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [],
};
