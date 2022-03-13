module.exports = {
  extends: ['prettier'],
  overrides: [
    {
      extends: ['plugin:import/recommended'],
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
      rules: {
        'block-scoped-var': 'error',
        // I out of control when work with third party library
        'import/default': 'off',

        'import/first': 'error',

        'import/newline-after-import': 'error',

        'import/no-default-export': 'error',

        'import/no-duplicates': 'error',

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

        'no-useless-constructor': 'off',

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
    {
      extends: ['plugin:yml/standard'],
      files: ['*.yml', '*.yaml'],
      parser: require.resolve('yaml-eslint-parser'),
      rules: {
        'yml/quotes': ['error', { prefer: 'single' }],
        'yml/sort-keys': 'error',
      },
    },
    {
      extends: [
        'plugin:jsonc/prettier',
        'plugin:json-schema-validator/recommended',
      ],
      files: ['*.json'],
      parser: require.resolve('jsonc-eslint-parser'),
      rules: {
        'json-schema-validator/no-invalid': [
          'error',
          {
            schemas: [
              {
                fileMatch: ['package.json'],
                schema: {
                  $schema: 'https://json-schema.org/draft/2020-12/schema',
                  properties: {
                    engines: {
                      properties: {
                        node: {
                          const: '>=16',
                          type: 'string',
                        },
                        yarn: {
                          const: 'Use npm',
                          type: 'string',
                        },
                      },
                      required: ['node', 'yarn'],
                      type: 'object',
                    },
                    license: {
                      enum: ['MIT', 'UNLICENSED'],
                      type: 'string',
                    },
                    repository: {
                      oneOf: [
                        {
                          properties: {
                            directory: { type: 'string' },
                            type: { const: 'git', type: 'string' },
                            url: {
                              type: 'string',
                            },
                          },
                          required: ['url', 'type', 'directory'],
                          type: 'object',
                        },
                        {
                          type: 'string',
                        },
                      ],
                    },
                    version: {
                      type: 'string',
                    },
                  },

                  required: ['engines', 'version', 'license'],
                },
              },
            ],
          },
        ],
        'jsonc/sort-keys': 'error',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'sort-keys-fix',
    'sort-destructure-keys',
    'simple-import-sort',
  ],
};
