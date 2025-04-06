/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

module.exports = {
  darkMode: 'class', // Usar classe "dark" para alternar
  theme: {
    extend: {},
  },
  plugins: [],
}

