module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
  ],
  overrides: [
    {
      files: ['typings/**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Allow commonJS require
      },
    },
  ],
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
};
