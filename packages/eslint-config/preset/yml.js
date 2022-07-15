module.exports = {
  overrides: [
    {
      extends: ['plugin:yml/standard'],
      files: ['*.yml', '*.yaml'],
      parser: require.resolve('yaml-eslint-parser'),
      rules: {
        'yml/quotes': ['error', { prefer: 'single' }],
        'yml/sort-keys': 'error',
      },
    },
  ],
};
