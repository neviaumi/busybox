module.exports = {
  overrides: [
    {
      extends: ['plugin:import/recommended', 'plugin:n/recommended'],
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs', '*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: '2021',
        sourceType: 'module',
      },
      plugins: [
        'eslint-plugin-import',
        'eslint-plugin-prettier',
        'sort-keys-fix',
        'sort-destructure-keys',
        'simple-import-sort',
        'node-dependencies',
      ],
      rules: {
        'block-scoped-var': 'error',

        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-default-export': 'error',

        'import/no-duplicates': 'error',

        'import/no-named-as-default': 'off',
        // auto sort import statements
        'import/order': 'off',
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

        'new-cap': 'off',

        'no-console': 'error',

        // No unnecessary else branch
        'no-else-return': 'error',

        'prefer-const': 'error',

        // Promise reject always is instance of error
        'prefer-promise-reject-errors': 'error',

        'prettier/prettier': 'error',
        radix: 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'sort-destructure-keys/sort-destructure-keys': 'error',
        'sort-imports': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
  ],
};
