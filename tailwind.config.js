
/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom:['CustomFont', 'kanit'],
        maxWidth: {
          '90': '90%',
        },
      },
      colors: {
        'primary-color-grayish-blue': 'hsl(217, 19%, 35%)',
        'primary-color-blue': 'hsl(217, 90%, 31%)',
        'primary-color-white': 'hsl(0, 0%, 100%)',
        'primary-color-blackish-blue': 'rgb(25,33,46)',
        'primary-color-blackish-blue-opacity': 'rgba(25,33,46,0.5)',
        'neutral-light-gray': 'hsl(0, 0%, 81%)',
        'neutral-grayish-blue': 'hsl(210, 46%, 95%)',
        logoYellow: '#ffae59'
      }
      
    },
    fontWeight: {
      'h1': 600,
      'h2': 500,
      'p': 500,
    },
  },
  plugins: [],
}
