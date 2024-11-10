import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintPluginImportTypescript from 'eslint-plugin-import';

import pkgJson from './package.json' with { type: 'json' };

export function useTypescriptDefinitionEslintConfig() {
  const typescriptDefinitionEslintConfig = {
    files: ['typings/**/*.d.ts'],
    name: pkgJson.name,
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
    },
  };
  return typescriptDefinitionEslintConfig;
}

export function useTypescriptEslintConfig(override = {}) {
  const typescriptEslintConfig = {
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
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/sort-type-constituents': 'off',
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
  };

  return Object.assign(typescriptEslintConfig, {
    ...typescriptEslintConfig,
    rules: {
      ...typescriptEslintConfig.rules,
      ...override.rules,
    },
  });
}
