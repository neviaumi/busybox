import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import pkgJson from './package.json' with { type: 'json' };

export const presets = Object.fromEntries(
  Object.entries(eslintPluginTestingLibrary.configs).map(([key, value]) => {
    return [key, { rules: value.rules }];
  }),
);

export function useTestingLibraryEslintConfig(preset, config) {
  if (!config?.files || !config?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const _config = {
    files: config.files,
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
  return _config;
}
