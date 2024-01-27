const { apply, assocPath, pipe } = require('ramda');

function withSpacing(config) {
  const spacingScaleSize = 257;
  function computeRemFromPx(px) {
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
    }),
  )({
    px: '1px',
  });
  return assocPath(['theme', 'spacing'], spacing)(config);
}

module.exports = {
  withSpacing,
};
