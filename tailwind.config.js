/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jetbrainsbold': ['jetbrainsbold', 'bold'],
        'jetbrains-medium': ['jetbrains-medium', 'medium'],
        'jetbrains-semi': ['jetbrains-semi', 'semi'],
      },
    },
  },
  plugins: [require("daisyui")],
}
