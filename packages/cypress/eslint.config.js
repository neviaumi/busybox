import { useESModuleEslintConfig } from '@busybox/eslint-config-esm';
import { useTypescriptEslintConfig } from '@busybox/eslint-config-typescript';
import globals from 'globals';

import pkgJson from './package.json' with { type: 'json' };

function withOverride(override) {
  return config => {
    return Object.assign(config, {
      rules: Object.assign(config.rules ?? {}, override.rules ?? {}),
    });
  };
}
export default [
  {
    languageOptions: {
      globals: Object.assign({}, globals.browser, globals.node),
    },
    name: pkgJson.name,
  },
  {
    ignores: ['dist/**/*'],
    name: pkgJson.name,
  },
  withOverride({
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
  })(useESModuleEslintConfig()),
  useTypescriptEslintConfig(),
].flat();
