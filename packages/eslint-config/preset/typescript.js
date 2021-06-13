const { overrides } = require('./base');

const jsConfig = overrides.find(override => override.files.includes('*.js'));
const jsTestConfig = overrides.find(override =>
  override.files.some(file =>
    ['*.test.js', '*.test.jsx', '*.spec.js', '*.spec.jsx'].includes(file),
  ),
);

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

        // use no-unused-vars-experimental instead
        '@typescript-eslint/no-unused-vars': 'off',

        '@typescript-eslint/no-unused-vars-experimental': 'error',

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
    {
      extends: jsTestConfig.extends,
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        ...jsTestConfig.rules,
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
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
