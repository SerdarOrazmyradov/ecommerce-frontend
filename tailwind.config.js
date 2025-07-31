// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('notmobile', '@media (hover: hover) and (pointer: fine)')
    }),
  ],
}