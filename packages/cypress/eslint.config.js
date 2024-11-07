import busyboxEslintConfig, { globals } from '@busybox/eslint-config';
import eslintPluginN from '@busybox/eslint-config/plugins/eslint-plugin-n';
import { useTypescriptEslintConfig } from '@busybox/eslint-config-typescript';

export default [
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  ...busyboxEslintConfig,
  useTypescriptEslintConfig(),
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
            '@busybox/eslint-config-typescript',
          ],
        },
      ],
    },
  },
].flat();
