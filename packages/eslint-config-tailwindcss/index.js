import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';

import pkgJson from './package.json' with { type: 'json' };

export function useTailwindCSSEslintConfig(config) {
  if (!config?.files || !config?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const _config = {
    name: pkgJson.name,
    plugins: {
      tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
      ...eslintPluginTailwindCSS.configs.recommended.rules,
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'error',
    },
  };
  return _config;
}
