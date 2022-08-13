/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'base_bg' : "url('/images/base-background-img.jpeg')",
      }
    },
  },
  plugins: [],
}
