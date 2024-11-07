import { useESModuleEslintConfig } from '@busybox/eslint-config-esm';
import { useTypescriptEslintConfig } from '@busybox/eslint-config-typescript';
import globals from 'globals';

import pkgJson from './package.json' with { type: 'json' };

export default [
  {
    // ignores: ['dist/*'],
    languageOptions: {
      globals: Object.assign({}, globals.browser, globals.node),
    },
    name: pkgJson.name,
  },
  {
    ignores: ['dist/**/*'],
    name: pkgJson.name,
  },
  useESModuleEslintConfig({
    rules: {
      'n/no-extraneous-import': [
        'error',
        {
          allowModules: [
            '@busybox/eslint-config-esm',
            '@busybox/prettier-config',
            '@busybox/eslint-config-typescript',
          ],
        },
      ],
    },
  }),
  useTypescriptEslintConfig(),
].flat();
