function computeRemFromPx(px) {
  if (px === 0) return 0;
  return `${px / 16.0}rem`; // Use browser default font size - 16px
}

const spacingScaleSize = 257;

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  theme: {
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
