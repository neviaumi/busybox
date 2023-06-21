import { assocPath, path, pipe } from 'ramda';
import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';
import tailwindCssFormsPlugin from "@tailwindcss/forms"

function extractColor(colorPath: string[]) {
  return assocPath(colorPath, path(colorPath, colors));
}

const spacingScaleSize = 257;
function computeRemFromPx(px: number) {
  if (px === 0) return 0;
  return `${px / 16.0}rem`; // Use browser default font size - 16px
}

const tailwindConfig: Omit<Config, 'content'> = {
  prefix: 'tw-',
  plugins: [tailwindCssFormsPlugin],
  theme: {
    backgroundColor: ({ theme }: { theme: (path: string) => unknown }) => {
      return pipe(
        assocPath(['error'], {
          DEFAULT: theme('colors.rose.500'),
          hover: theme('colors.rose.600'),
        }),
        assocPath(['warning'], {
          DEFAULT: theme('colors.amber.500'),
          hover: theme('colors.amber.600'),
        }),
        assocPath(['primary'], {
          DEFAULT: theme('colors.emerald.50'),
          hover: theme('colors.emerald.100'),
        }),
        assocPath(['secondary'], {
          DEFAULT: theme('colors.sky.500'),
          hover: theme('colors.sky.600'),
        }),
      )(theme('colors'));
    },
    borderColor: ({ theme }: { theme: (path: string) => unknown }) => {
      return theme('textColor');
    },
    colors: pipe(
      extractColor(['current']),
      extractColor(['transparent']),
      extractColor(['rose', '500']),
      extractColor(['rose', '600']),
      extractColor(['gray', '50']),
      extractColor(['gray', '700']),
      extractColor(['white']),
      extractColor(['black']),
      extractColor(['amber', '500']),
      extractColor(['amber', '600']),
      extractColor(['emerald', '50']),
      extractColor(['emerald', '100']),
      extractColor(['sky', '500']),
      extractColor(['sky', '600']),
    )({}),
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
    textColor: ({ theme }: { theme: (path: string) => unknown }) => {
      return pipe(
        assocPath(['error'], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
        assocPath(['warning'], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
        assocPath(['primary'], {
          DEFAULT: theme('colors.gray.700'),
          hover: theme('colors.black'),
        }),
        assocPath(['secondary'], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
      )(theme('colors'));
    },
  },
};

export = tailwindConfig;
