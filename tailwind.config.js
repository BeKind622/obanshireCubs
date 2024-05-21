
/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom:['CustomFont', 'kanit'],
      },
      colors: {
        logoYellow: '#ffae59'
      }
    },
  },
  plugins: [],
}
