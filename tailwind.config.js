/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['Index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2'
      },
      fontfamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

