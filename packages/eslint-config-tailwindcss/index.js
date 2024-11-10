import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';

import pkgJson from './package.json' with { type: 'json' };

export function useTailwindCSSEslintConfig(override) {
  if (!override?.files || !override?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  const config = {
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
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
