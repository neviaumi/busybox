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
      rules: {
        ...jsConfig.rules,

        // Disable this rule because when integrate third party the property name is out of control, E.X. it using snake_case
        '@typescript-eslint/camelcase': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: {
              memberTypes: [
                // Index signature
                'signature',

                // Fields
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-decorated-field',
                'protected-decorated-field',
                'private-decorated-field',

                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',

                'public-abstract-field',
                'protected-abstract-field',
                'private-abstract-field',

                'public-field',
                'protected-field',
                'private-field',

                'static-field',
                'instance-field',
                'abstract-field',

                'decorated-field',

                'field',

                // Constructors
                'public-constructor',
                'protected-constructor',
                'private-constructor',

                'constructor',

                // Methods
                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',

                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',

                'public-method',
                'protected-method',
                'private-method',

                'static-method',
                'instance-method',
                'abstract-method',

                'decorated-method',

                'method',
              ],
              order: 'alphabetically',
            },
          },
        ],

        '@typescript-eslint/no-non-null-assertion': 'off',

        // use no-unused-vars-experimental instead
        '@typescript-eslint/no-unused-vars': 'off',

        '@typescript-eslint/no-unused-vars-experimental': 'error',

        // enum will prompt already declared in the upper scope buggly
        'no-shadow': 'off',
        // Unable work with Global namespace
        'no-undef': 'off',
      },
    },
    {
      files: ['typings/**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
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
  plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
