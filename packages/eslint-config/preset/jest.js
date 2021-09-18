module.exports = {
  env: {
    jest: true,
  },
  extends: ['prettier'],
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: [
        '*.test.js',
        '*.test.cjs',
        '*.test.mjs',
        '*.test.jsx',
        '*.spec.js',
        '*.spec.cjs',
        '*.spec.mjs',
        '*.spec.jsx',
      ],
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-jest'],
};
