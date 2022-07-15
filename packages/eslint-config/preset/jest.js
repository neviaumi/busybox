module.exports = {
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      files: ['js', 'cjs', 'mjs', 'jsx', 'ts', 'tsx']
        .map(ext => [`*.test.${ext}`, `*.spec.${ext}`])
        .flat(),
      plugins: ['eslint-plugin-jest'],
      rules: {
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
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
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
  ],
};
