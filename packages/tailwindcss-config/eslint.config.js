import { useESModuleEslintConfig } from '@busybox/eslint-config-esm';
import globals from 'globals';

import pkgJson from './package.json' with { type: 'json' };

export default [
  {
    languageOptions: {
      globals: globals.node,
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
          ],
        },
      ],
    },
  }),
];
