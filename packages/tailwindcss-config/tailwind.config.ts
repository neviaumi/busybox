import tailwindCssFormsPlugin from '@tailwindcss/forms';
import { assocPath, path, pipe } from 'ramda';
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

function extractColor(colorPath: string[]) {
  return assocPath(colorPath, path(colorPath, colors));
}

const spacingScaleSize = 257;
function computeRemFromPx(px: number) {
  if (px === 0) return 0;
  return `${px / 16}rem`; // Use browser default font size - 16px
}

enum Variant {
  DISABLED = 'disabled',
  ERROR = 'error',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
}

const tailwindConfig: Omit<Config, 'content'> = {
  plugins: [
    tailwindCssFormsPlugin({
      strategy: 'class',
    }),
  ],
  prefix: 'tw-',
  theme: {
    backgroundColor: ({ theme }: { theme: (path: string) => unknown }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          DEFAULT: theme('colors.gray.200'),
          hover: theme('colors.gray.50'),
        }),
        assocPath([Variant.ERROR], {
          DEFAULT: theme('colors.rose.500'),
          hover: theme('colors.rose.600'),
        }),
        assocPath([Variant.WARNING], {
          DEFAULT: theme('colors.amber.500'),
          hover: theme('colors.amber.600'),
        }),
        assocPath([Variant.PRIMARY], {
          DEFAULT: theme('colors.emerald.50'),
          hover: theme('colors.emerald.100'),
        }),
        assocPath([Variant.SECONDARY], {
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
        assocPath([Variant.DISABLED], {
          DEFAULT: theme('colors.gray.800'),
          hover: theme('colors.gray.600'),
        }),
        assocPath([Variant.ERROR], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
        assocPath([Variant.WARNING], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
        assocPath([Variant.PRIMARY], {
          DEFAULT: theme('colors.gray.700'),
          hover: theme('colors.black'),
        }),
        assocPath([Variant.SECONDARY], {
          DEFAULT: theme('colors.gray.50'),
          hover: theme('colors.white'),
        }),
      )(theme('colors'));
    },
  },
};

export default tailwindConfig;
