module.exports = {
  configs: {
    recommended: {
      plugins: ['@busybox/json'],
      rules: {
        '@busybox/json/sorted-keys': [
          'error',
          {
            indentSpaces: 4,
            order: 'asc',
          },
        ],
        '@busybox/json/valid-json': 'error',
      },
    },
  },
  processors: {
    '.json': {
      postprocess: ([errors]) => [...errors],
      preprocess: source => [source],
      supportsAutofix: true,
    },
  },
  rules: {
    'sorted-keys': require('./src/sorted-keys'),
    'valid-json': require('./src/valid-json'),
  },
};
