import eslintPluginJson from "eslint-plugin-jsonc"
import eslintParserJson from "jsonc-eslint-parser"
import eslintPluginJsonSchemaValidator from "eslint-plugin-json-schema-validator"
import eslintPluginNodeDependencies from "eslint-plugin-node-dependencies"

export default [
  {
    files: ['*.json'],
    plugins: {
      jsonc: eslintPluginJson,
    },
    languageOptions: {
      parser: eslintParserJson,

    },
    rules: {
      ...eslintPluginJson.configs.prettier.rules,
      'jsonc/sort-keys': 'error',
    },
  },
  {
    files: ['package.json'],
    plugins: {
      'json-schema-validator': eslintPluginJsonSchemaValidator,
      'node-dependencies': eslintPluginNodeDependencies,
    },
    rules: {
      ...eslintPluginJsonSchemaValidator.configs.recommended.rules,
      ...eslintPluginNodeDependencies.configs.recommended.rules,
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
                        enum: ['>=14', '>=16', '>=18'],
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
      'node-dependencies/absolute-version': [
        'error',
        {
          dependencies: 'always',
          devDependencies: 'always',
        },
      ],
      'node-dependencies/compat-engines': 'off',
      'node-dependencies/valid-semver': 'off',
    },
  }
]