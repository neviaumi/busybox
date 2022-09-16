/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './cypress/**/*.ts',
    './projects/**/*.{ts,html}',
    './dist/ngx-components/**/*.mjs',
  ],
  presets: [require('@busybox/tailwindcss-config')],
};
