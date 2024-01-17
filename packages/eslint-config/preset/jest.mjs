import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintPluginJest from 'eslint-plugin-jest';

import {
  jsTestFilePatterns,
  typescriptTestFilePatterns,
} from '../utils/file-patterns.mjs';

export default [
  {
    files: [...jsTestFilePatterns, ...typescriptTestFilePatterns].map(
      fileSuffix => `**/${fileSuffix}`,
    ),
    languageOptions: {
      globals: {
        ...eslintPluginJest.configs.recommended.env,
      },
    },
    plugins: {
      jest: eslintPluginJest,
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
    files: typescriptTestFilePatterns.map(fileSuffix => `**/${fileSuffix}`),
    languageOptions: {
      parser: eslintParserTypescript,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
    },
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
];
