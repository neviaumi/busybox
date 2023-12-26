import eslintPluginImportTypescript  from "eslint-plugin-import"
import eslintPluginTypescriptSortKeys from "eslint-plugin-typescript-sort-keys"
import eslintPluginTypescript        from "@typescript-eslint/eslint-plugin"
import eslintParserTypescript from "@typescript-eslint/parser"
import {typescriptFileSuffixes} from "../utils/file-patterns.mjs"
export default [
  {
    files: typescriptFileSuffixes.map(ext => `*.${ext}`),
    languageOptions: {
        parser: eslintParserTypescript,
    },
    plugins: {
          '@typescript-eslint': eslintPluginTypescript,
            'import': eslintPluginImportTypescript,
            'typescript-sort-keys': eslintPluginTypescriptSortKeys,
    },
    settings: {
      ...eslintPluginImportTypescript.configs.typescript.settings,
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      ...eslintPluginTypescript.configs.recommended.rules,
      ...eslintPluginImportTypescript.configs.typescript.rules,
      ...eslintPluginTypescriptSortKeys.configs.recommended.rules,
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
    }
  },
  {
    files: ['typings/**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Not work for type declaration file
    },
  },
]
