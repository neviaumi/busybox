import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintPluginImportTypescript from 'eslint-plugin-import';

import pkgJson from './package.json' with { type: 'json' };

const config = [
  {
    files: ['**/*.ts*(x)'],
    languageOptions: {
      parser: eslintParserTypescript,
    },
    name: pkgJson.name,
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      import: eslintPluginImportTypescript,
    },
    rules: {
      ...eslintPluginTypescript.configs.recommended.rules,
      ...eslintPluginImportTypescript.configs.typescript.rules,
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
      ...eslintPluginImportTypescript.configs.typescript.settings,
      'import/resolver': {
        typescript: {},
      },
    },
  },
  {
    files: ['typings/**/*.d.ts'],
    name: pkgJson.name,
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
    },
  },
];

export function useTypescriptEslintConfig(override = {}) {
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
