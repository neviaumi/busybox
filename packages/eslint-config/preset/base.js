module.exports = {
  extends: ['plugin:import/recommended', 'plugin:jest/style'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'i18n-json/sorted-keys': 'error',
        'i18n-json/valid-json': 'error',
      },
    },
  ],
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-prettier',
    'sort-keys-fix',
  ],
  rules: {
    'block-scoped-var': 'error',
    // auto sort import statements
    'import/order': 'error',

    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],

    'jest/expect-expect': 'error',

    'jest/no-test-callback': 'error',

    'jest/prefer-spy-on': 'error',

    'lines-between-class-members': 'error',

    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    'max-params': ['error', 4],

    // Prefer smaller function and composite together
    'max-statements': [
      'error',
      {
        max: 40,
      },
    ],

    'no-console': 'error',

    // No unnecessary else branch
    'no-else-return': 'error',

    'prefer-const': 'error',

    // Promise reject always is instance of error
    'prefer-promise-reject-errors': 'error',

    'prettier/prettier': 'error',

    radix: 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
