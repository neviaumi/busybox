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
];
