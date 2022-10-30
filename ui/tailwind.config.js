/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
