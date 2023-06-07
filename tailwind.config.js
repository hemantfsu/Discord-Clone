/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'backimg0': "url('./images/Image0.svg')",
        'backimg1': "url('./images/Image1.svg')",
        'backimg2': "url('./images/Image2.svg')",
      }
    },
  },
  plugins: [],
}
