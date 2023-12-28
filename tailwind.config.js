/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      grayscale: {
        60: '60%',
      },
      screens: {
        'xs': '450px'
      }
    },
  },
  plugins: [],
}

