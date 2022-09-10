const colors = require('tailwindcss/colors');

function computeRemFromPx(px) {
  if (px === 0) return 0;
  return `${px / 16.0}rem`; // Use browser default font size - 16px
}

const spacingScaleSize = 257;

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: {
          hover: colors.gray['300'],
          'hover-text': colors.gray['700'],
          main: colors.gray['100'],
          'main-text': colors.black,
        },
        warning: {
          hover: colors.orange['300'],
          'hover-text': colors.gray['100'],
          main: colors.orange['700'],
          'main-text': colors.yellow['300'],
        },
      },
    },
    spacing: {
      px: '1px',
      // Attempt keep https://tailwindcss.com/docs/theme#spacing structure , per step will increase .5 on name and 4
      // px in value
      ...Object.fromEntries(
        Array.from({ length: spacingScaleSize }, (_, index) => {
          const step = Math.floor(index / 2);
          return [
            index % 2 === 0 ? step : step + 0.5,
            computeRemFromPx(index * 4), // 4pt grid system
          ];
        }),
      ),
    },
  },
};
