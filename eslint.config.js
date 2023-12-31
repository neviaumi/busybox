import busyboxEslintConfig, { globals } from '@busybox/eslint-config';
import eslintPluginN from '@busybox/eslint-config/plugins/eslint-plugin-n';

export default [
  {
    ignores: [
      'packages/cypress/',
      'packages/tailwindcss-config/',
      'package-lock.json',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...busyboxEslintConfig,
  {
    plugins: {
      n: eslintPluginN,
    },
    rules: {
      'n/no-extraneous-import': [
        'error',
        {
          allowModules: [
            '@busybox/eslint-config',
            '@busybox/prettier-config',
            '@busybox/commitlint-config',
          ],
        },
      ],
    },
  },
];
