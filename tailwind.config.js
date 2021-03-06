/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/js/**/*.vue',
      './resources/js/**/*.js',
      './resources/css/**/*.scss',
      './resources/views/**/*.php'
  ],
  theme: {
    extend: {
        colors:{
            gold: '#bd9e66'
        }
    },
  },
  plugins: [],
}
