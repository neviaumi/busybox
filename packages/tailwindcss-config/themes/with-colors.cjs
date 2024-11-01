const { assocPath, pipe } = require('ramda');

const Variant = {
  DISABLED: 'disabled',
  ERROR: 'error',
  PLACEHOLDER: 'placeholder',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
};

function withColors(config) {
  const ColorSuffix = {
    // When used with background-color
    CONTRAST: 'contrast',
    // https://tailwindcss.com/docs/customizing-colors#color-object-syntax
    // DEFAULT mean without suffix
    DEFAULT: 'DEFAULT',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes
    // When user perform action on element
    USER_ACTION: 'user-action',
  };
  return pipe(
    assocPath(['theme', 'outlineColor'], ({ theme }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.300'),
        }),
        assocPath([Variant.ERROR], {
          [ColorSuffix.DEFAULT]: theme('colors.rose.500'),
        }),
        assocPath([Variant.WARNING], {
          [ColorSuffix.DEFAULT]: theme('colors.amber.500'),
        }),
        assocPath([Variant.PRIMARY], {
          [ColorSuffix.DEFAULT]: theme('colors.emerald.200'),
        }),
        assocPath([Variant.SECONDARY], {
          [ColorSuffix.DEFAULT]: theme('colors.sky.200'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'ringColor'], ({ theme }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.300'),
        }),
        assocPath([Variant.ERROR], {
          [ColorSuffix.DEFAULT]: theme('colors.rose.500'),
        }),
        assocPath([Variant.WARNING], {
          [ColorSuffix.DEFAULT]: theme('colors.amber.500'),
        }),
        assocPath([Variant.PRIMARY], {
          [ColorSuffix.DEFAULT]: theme('colors.emerald.200'),
        }),
        assocPath([Variant.SECONDARY], {
          [ColorSuffix.DEFAULT]: theme('colors.sky.200'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'borderColor'], ({ theme }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.200'),
        }),
        assocPath([Variant.ERROR], {
          [ColorSuffix.DEFAULT]: theme('colors.rose.500'),
          [ColorSuffix.USER_ACTION]: theme('colors.rose.600'),
        }),
        assocPath([Variant.WARNING], {
          [ColorSuffix.DEFAULT]: theme('colors.amber.500'),
          [ColorSuffix.USER_ACTION]: theme('colors.amber.600'),
        }),
        assocPath([Variant.PRIMARY], {
          [ColorSuffix.DEFAULT]: theme('colors.emerald.200'),
          [ColorSuffix.USER_ACTION]: theme('colors.emerald.300'),
        }),
        assocPath([Variant.SECONDARY], {
          [ColorSuffix.DEFAULT]: theme('colors.sky.200'),
          [ColorSuffix.USER_ACTION]: theme('colors.sky.300'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'backgroundColor'], ({ theme }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.100'),
        }),
        assocPath([Variant.ERROR], {
          [ColorSuffix.DEFAULT]: theme('colors.rose.200'),
          [ColorSuffix.USER_ACTION]: theme('colors.rose.300'),
        }),
        assocPath([Variant.WARNING], {
          [ColorSuffix.DEFAULT]: theme('colors.amber.200'),
          [ColorSuffix.USER_ACTION]: theme('colors.amber.300'),
        }),
        assocPath([Variant.PRIMARY], {
          [ColorSuffix.DEFAULT]: theme('colors.emerald.50'),
          [ColorSuffix.USER_ACTION]: theme('colors.emerald.100'),
        }),
        assocPath([Variant.SECONDARY], {
          [ColorSuffix.DEFAULT]: theme('colors.sky.50'),
          [ColorSuffix.USER_ACTION]: theme('colors.sky.100'),
        }),
      )(theme('colors'));
    }),
    assocPath(['theme', 'textColor'], ({ theme }) => {
      return pipe(
        assocPath([Variant.DISABLED], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.400'),
        }),
        assocPath([Variant.PLACEHOLDER], {
          [ColorSuffix.DEFAULT]: theme('colors.gray.500'),
        }),
        assocPath([Variant.ERROR], {
          [ColorSuffix.DEFAULT]: theme('colors.rose.500'),
          [ColorSuffix.CONTRAST]: theme('colors.rose.800'),
          [ColorSuffix.USER_ACTION]: theme('colors.rose.900'),
        }),
        assocPath([Variant.WARNING], {
          [ColorSuffix.DEFAULT]: theme('colors.amber.500'),
          [ColorSuffix.CONTRAST]: theme('colors.amber.800'),
          [ColorSuffix.USER_ACTION]: theme('colors.amber.900'),
        }),
        assocPath([Variant.PRIMARY], {
          [ColorSuffix.DEFAULT]: theme('colors.black'),
          [ColorSuffix.CONTRAST]: theme('colors.gray.800'),
          [ColorSuffix.USER_ACTION]: theme('colors.gray.900'),
        }),
        assocPath([Variant.SECONDARY], {
          [ColorSuffix.DEFAULT]: theme('colors.sky.500'),
          [ColorSuffix.CONTRAST]: theme('colors.sky.800'),
          [ColorSuffix.USER_ACTION]: theme('colors.sky.900'),
        }),
      )(theme('colors'));
    }),
  )(config);
}

module.exports = {
  Variant,
  withColors,
};
