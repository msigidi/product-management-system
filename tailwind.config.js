/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',    // Custom primary color
        secondary: '#9333EA',  // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
