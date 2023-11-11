import tailwindCssFormsPlugin from '@tailwindcss/forms';
import { apply, assocPath, path, pipe } from 'ramda';
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

interface PluginUtils {
  theme: (path: string) => unknown;
}

type ConfigPreset = Omit<Config, 'content'>;

export const withColors = (config: ConfigPreset) => {
  enum Variant {
    DISABLED = 'disabled',
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    WARNING = 'warning',
  }
  function extractColor(colorPath: string[]) {
    return assocPath(colorPath, path(colorPath, colors));
  }
  return pipe(
    assocPath(
      ['theme', 'colors'],
      pipe(
        extractColor(['current']),
        extractColor(['transparent']),
        extractColor(['rose', '200']),
        extractColor(['rose', '300']),
        extractColor(['rose', '500']),
        extractColor(['rose', '600']),
        extractColor(['rose', '800']),
        extractColor(['rose', '900']),
        extractColor(['gray']),
        extractColor(['white']),
        extractColor(['black']),
        extractColor(['amber', '200']),
        extractColor(['amber', '300']),
        extractColor(['amber', '500']),
        extractColor(['amber', '600']),
        extractColor(['amber', '800']),
        extractColor(['amber', '900']),
        extractColor(['emerald', '50']),
        extractColor(['emerald', '100']),
        extractColor(['emerald', '200']),
        extractColor(['emerald', '300']),
        extractColor(['sky', '50']),
        extractColor(['sky', '100']),
        extractColor(['sky', '200']),
        extractColor(['sky', '300']),
        extractColor(['sky', '800']),
        extractColor(['sky', '900']),
      )({}),
    ),
    assocPath(['theme', 'borderColor'], ({ theme }: PluginUtils) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          DEFAULT: theme('colors.gray.200'),
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
          DEFAULT: theme('colors.emerald.200'),
          hover: theme('colors.emerald.300'),
        }),
        assocPath([Variant.SECONDARY], {
          DEFAULT: theme('colors.sky.200'),
          hover: theme('colors.sky.300'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'backgroundColor'], ({ theme }: PluginUtils) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          DEFAULT: theme('colors.gray.100'),
        }),
        assocPath([Variant.ERROR], {
          DEFAULT: theme('colors.rose.200'),
          hover: theme('colors.rose.300'),
        }),
        assocPath([Variant.WARNING], {
          DEFAULT: theme('colors.amber.200'),
          hover: theme('colors.amber.300'),
        }),
        assocPath([Variant.PRIMARY], {
          DEFAULT: theme('colors.emerald.50'),
          hover: theme('colors.emerald.100'),
        }),
        assocPath([Variant.SECONDARY], {
          DEFAULT: theme('colors.sky.50'),
          hover: theme('colors.sky.100'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'textColor'], ({ theme }: PluginUtils) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          DEFAULT: theme('colors.gray.400'),
        }),
        assocPath([Variant.ERROR], {
          DEFAULT: theme('colors.rose.800'),
          hover: theme('colors.rose.900'),
        }),
        assocPath([Variant.WARNING], {
          DEFAULT: theme('colors.amber.800'),
          hover: theme('colors.amber.900'),
        }),
        assocPath([Variant.PRIMARY], {
          DEFAULT: theme('colors.gray.800'),
          hover: theme('colors.gray.900'),
        }),
        assocPath([Variant.SECONDARY], {
          DEFAULT: theme('colors.sky.800'),
          hover: theme('colors.sky.900'),
        }),
      )(theme('colors'));
    }),
  )(config);
};

export const withSpacing = (config: ConfigPreset) => {
  const spacingScaleSize = 257;
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function computeRemFromPx(px: number) {
    if (px === 0) return 0;
    return `${px / 16}rem`; // Use browser default font size - 16px
  }
  const spacing = apply(
    pipe,
    Array.from({ length: spacingScaleSize }, (_, index) => {
      const step = Math.floor(index / 2);
      const keyName = index % 2 === 0 ? step : step + 0.5;
      const remValue = computeRemFromPx(index * 4); // 4pt grid system
      return assocPath([keyName], remValue);
    }) as any,
  )({
    px: '1px',
  });
  return assocPath(['theme', 'spacing'], spacing)(config);
};

const tailwindConfig: Omit<Config, 'content'> = {
  plugins: [
    tailwindCssFormsPlugin({
      strategy: 'class',
    }),
  ],
  prefix: 'tw-',
};

export default tailwindConfig;
