/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{.js, cjs}'],
  presets: [require('@busybox/tailwindcss-config')],
};
