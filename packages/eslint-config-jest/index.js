import eslintPluginJest from 'eslint-plugin-jest';

import pkgJson from './package.json' with { type: 'json' };

export function useJestEslintConfig(override = {}) {
  if (!override?.files || !override?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const config = {
    languageOptions: {
      globals: {
        ...eslintPluginJest.configs.recommended.env,
      },
    },
    name: pkgJson.name,
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
  };
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
