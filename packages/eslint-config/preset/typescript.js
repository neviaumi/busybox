module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:typescript-sort-keys/recommended',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/no-explicit-any': 'off',

        '@typescript-eslint/no-non-null-assertion': 'off',

        '@typescript-eslint/no-unused-vars': 'error',

        // Conflict with TS4111 https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature
        'dot-notation': 'off',

        // enum will prompt already declared in the upper scope
        'no-shadow': 'off',

        // Unable work with Global namespace
        'no-undef': 'off',
        'no-use-before-define': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['typings/**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
      },
    },
  ],
};
