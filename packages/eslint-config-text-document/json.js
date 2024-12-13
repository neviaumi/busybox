import eslintPluginJsonSchemaValidator from 'eslint-plugin-json-schema-validator';
import eslintPluginJson from 'eslint-plugin-jsonc';
import eslintPluginNodeDependencies from 'eslint-plugin-node-dependencies';
import eslintParserJson from 'jsonc-eslint-parser';

import pkgJson from './package.json' with { type: 'json' };

export function useJSONEslintConfig() {
  const jsonEslintConfig = {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json'],
    languageOptions: {
      parser: eslintParserJson,
    },
    name: pkgJson.name,
    plugins: {
      jsonc: eslintPluginJson,
    },
    rules: {
      ...eslintPluginJson.configs.prettier.rules,
      'jsonc/sort-keys': 'error',
    },
  };
  return jsonEslintConfig;
}

export function usePackageJsonEslintConfig(override = {}) {
  const packageJsonEslintConfig = {
    files: ['**/package.json'],
    name: pkgJson.name,
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
                        enum: ['>=18', '>=20', '>=22'],
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
  };

  return Object.assign(packageJsonEslintConfig, {
    ...override,
    rules: {
      ...packageJsonEslintConfig.rules,
      ...override.rules,
    },
  });
}
