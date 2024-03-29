import busyboxEslintConfig, { globals } from '@busybox/eslint-config';
import eslintPluginN from '@busybox/eslint-config/plugins/eslint-plugin-n';

export default [
  ...busyboxEslintConfig,
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      n: eslintPluginN,
    },
    rules: {
      'n/no-extraneous-import': [
        'error',
        {
          allowModules: ['@busybox/eslint-config', '@busybox/prettier-config'],
        },
      ],
    },
  },
];
