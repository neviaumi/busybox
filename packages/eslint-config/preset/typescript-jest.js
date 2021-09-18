const { overrides } = require('./jest');

const jestConfig = overrides.find(override =>
  override.files.some(file =>
    [
      '*.test.js',
      '*.test.cjs',
      '*.test.mjs',
      '*.test.jsx',
      '*.spec.js',
      '*.spec.cjs',
      '*.spec.mjs',
      '*.spec.jsx',
    ].includes(file),
  ),
);

module.exports = {
  env: {
    jest: true,
  },
  extends: ['prettier'],
  overrides: [
    {
      extends: jestConfig.extends,
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-check': false,
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': true,
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-jest'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
