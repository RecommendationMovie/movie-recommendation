/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx }"
  ],
  theme: {
    extend: {
      colors: {
        'movie-blue': '#081b2e', // Main blue color used in movie.web.app
        'movie-light-blue': '#1b315e',
      },
    },
  },
  plugins: [],
}

