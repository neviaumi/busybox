module.exports = {
  overrides: [
    {
      extends: ['plugin:import/recommended', 'plugin:jest/recommended'],
      files: ['*.js', '*.jsx'],
      rules: {
        'block-scoped-var': 'error',
        // I out of control when work with third party library
        'import/default': 'off',
        // auto sort import statements
        'import/order': 'off',
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it',
            withinDescribe: 'it',
          },
        ],
        'jest/expect-expect': 'error',
        'jest/no-done-callback': 'error',

        'jest/prefer-spy-on': 'error',

        'jest/valid-expect': ['error', { maxArgs: 2, minArgs: 1 }],

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

        'simple-import-sort/sort': 'error',
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-json'],
      files: ['*.json'],
      rules: {
        'jsonc/sort-keys': 'error',
      },
    },
  ],
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-prettier',
    'sort-keys-fix',
    'simple-import-sort',
  ],
};
