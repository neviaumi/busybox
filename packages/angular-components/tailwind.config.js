/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./cypress/**/*.ts', './projects/**/*.{ts,html}'],
  presets: [require('@busybox/tailwindcss-config')],
};
