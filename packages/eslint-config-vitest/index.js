import vitest from '@vitest/eslint-plugin';

import pkgJson from './package.json' with { type: 'json' };

export function useVitestEslintConfig(override = {}) {
  if (!override?.files || !override?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const config = {
    name: pkgJson.name,
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/consistent-test-it': [
        'error',
        {
          fn: 'it',
          withinDescribe: 'it',
        },
      ],

      'vitest/expect-expect': 'error',

      'vitest/no-done-callback': 'error',

      'vitest/prefer-spy-on': 'error',

      'vitest/valid-expect': ['error', { maxArgs: 2, minArgs: 1 }],
    },
  };
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
