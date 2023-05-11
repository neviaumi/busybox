import { assocPath, pipe } from 'ramda';
import { Config } from 'tailwindcss';
// eslint-disable-next-line n/no-missing-import
import colors from 'tailwindcss/colors';

type COLOR_DEFINITION = {
  DEFAULT: string;
  hover: string;
};

type COLOR_PALETTE = {
  bg: COLOR_DEFINITION;
  border: COLOR_DEFINITION;
  text: COLOR_DEFINITION;
};

function createColorPalette(
  colorsDefinition: Omit<COLOR_PALETTE, 'border'> & {
    border?: COLOR_DEFINITION;
  },
): COLOR_PALETTE {
  return {
    bg: {
      DEFAULT: colorsDefinition.bg.DEFAULT,
      hover: colorsDefinition.bg.hover,
    },
    border: {
      DEFAULT:
        colorsDefinition.border?.DEFAULT ?? colorsDefinition.text.DEFAULT,
      hover: colorsDefinition.border?.hover ?? colorsDefinition.text.hover,
    },
    text: {
      DEFAULT: colorsDefinition.text?.DEFAULT,
      hover: colorsDefinition.text.hover,
    },
  };
}

const spacingScaleSize = 257;
function computeRemFromPx(px: number) {
  if (px === 0) return 0;
  return `${px / 16.0}rem`; // Use browser default font size - 16px
}

// eslint-disable-next-line import/no-default-export
export default {
  prefix: 'tw-',
  theme: {
    colors: pipe(
      assocPath(
        ['error'],
        createColorPalette({
          bg: {
            DEFAULT: colors.rose[500],
            hover: colors.rose[600],
          },
          text: { DEFAULT: colors.gray[50], hover: colors.white },
        }),
      ),
      assocPath(
        ['warning'],
        createColorPalette({
          bg: {
            DEFAULT: colors.amber[500],
            hover: colors.amber[600],
          },
          text: { DEFAULT: colors.gray[50], hover: colors.white },
        }),
      ),
      assocPath(
        ['primary'],
        createColorPalette({
          bg: {
            DEFAULT: colors.emerald[50],
            hover: colors.emerald[100],
          },
          text: { DEFAULT: colors.gray[700], hover: colors.black },
        }),
      ),
      assocPath(
        ['secondary'],
        createColorPalette({
          bg: { DEFAULT: colors.sky[500], hover: colors.sky[600] },
          text: { DEFAULT: colors.gray[50], hover: colors.white },
        }),
      ),
    )({
      current: 'currentColor',
      transparent: 'transparent',
    }) as unknown,
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
} satisfies Omit<Config, 'content'>;
