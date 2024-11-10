import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

import pkgJson from './package.json' with { type: 'json' };

export function useESModuleEslintConfig(override = {}) {
  const config = {
    files: ['**/*.*(m)+(j|t)s*(x)'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.es2024,
      sourceType: 'module',
    },
    name: pkgJson.name,
    plugins: {
      import: eslintPluginImport,
      n: eslintPluginN,
      prettier: eslintPluginPrettier,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...js.configs.recommended.rules, // Recommended config applied to all files
      // ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginN.configs['recommended-module'].rules,
      'block-scoped-var': 'error',
      'import/extensions': ['error', 'ignorePackages'],

      'import/first': 'error',
      'import/newline-after-import': 'error',

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
      'n/no-missing-import': ['off'],
      'n/no-unsupported-features/node-builtins': ['off'],

      // 'n/no-missing-import': ['off'],
      'new-cap': 'off',

      'no-console': 'error',

      // No unnecessary else branch
      'no-else-return': 'error',

      'prefer-const': 'error',
      // Promise reject always is instance of error
      'prefer-promise-reject-errors': 'error',
      'prettier/prettier': 'error',
      radix: 'error',
      'sort-imports': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prefer-node-protocol': 'error',
    },
  };
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
