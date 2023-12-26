import eslintPluginJest from "eslint-plugin-jest"
import eslintParserTypescript from "@typescript-eslint/parser"
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin"

import {typescriptTestFilePatterns, jsTestFilePatterns} from "../utils/file-patterns.mjs"

export default [
  {
    files: [...jsTestFilePatterns,...typescriptTestFilePatterns],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
        globals: {
            ...eslintPluginJest.configs.recommended.env
        }
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      'jest/consistent-test-it': [
        'error',
        {
          fn: 'it',
          withinDescribe: 'it',
        },
      ],

      'jest/expect-expect': 'error',

      'jest/no-done-callback': 'error',

      'jest/prefer-spy-on': 'error',

      'jest/valid-expect': ['error', { maxArgs: 2, minArgs: 1 }],
    },
  },
  {
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
    },
    languageOptions: {
      parser: eslintParserTypescript,
    },
    files: typescriptTestFilePatterns,
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
  }
]