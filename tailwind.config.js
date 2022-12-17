/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'niflheim': "url('/public/niflheim.jpg')",
        'background': "url('/public/background.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
