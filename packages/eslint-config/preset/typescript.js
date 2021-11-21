const { overrides } = require('./base');

const jsConfig = overrides.find(override => override.files.includes('*.js'));

module.exports = {
  overrides: [
    {
      extends: [
        ...jsConfig.extends,
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:typescript-sort-keys/recommended',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        ...jsConfig.rules,

        // Disable this rule because when integrate third party the property name is out of control, E.X. it using snake_case
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/member-ordering': 'off',

        '@typescript-eslint/no-explicit-any': 'off',

        '@typescript-eslint/no-non-null-assertion': 'off',

        '@typescript-eslint/no-unused-vars': 'error',

        camelcase: 'off',

        // enum will prompt already declared in the upper scope
        'no-shadow': 'off',

        // Unable work with Global namespace
        'no-undef': 'off',

        'no-use-before-define': 'off',
      },
    },
    {
      files: ['typings/**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
