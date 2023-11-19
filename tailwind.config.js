/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4AA39',
        secondary: '#F3F2FE',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
