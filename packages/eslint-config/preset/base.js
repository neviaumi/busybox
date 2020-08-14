module.exports = {
  extends: ['plugin:import/recommended', 'plugin:jest/style'],
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'block-scoped-var': 'error',
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
    radix: 'error',
    // auto sort import statements
    'import/order': 'error',
    'jest/expect-expect': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/no-test-callback': 'error',
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
  },
};
