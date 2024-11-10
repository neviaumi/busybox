import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import pkgJson from './package.json' with { type: 'json' };

export const presets = Object.fromEntries(
  Object.entries(eslintPluginTestingLibrary.configs).map(([key, value]) => {
    return [key, { rules: value.rules }];
  }),
);

export function useTestingLibraryEslintConfig(preset, override = {}) {
  if (!override?.files || !override?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const config = {
    name: pkgJson.name,
    plugins: {
      'testing-library': eslintPluginTestingLibrary,
    },
    rules: Object.assign(preset.rules, {
      'testing-library/prefer-screen-queries': 'error',
    }),
    settings: {
      react: {
        version: 'detect',
      },
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
