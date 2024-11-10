import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';

import pkgJson from './package.json' with { type: 'json' };

export function useCodeSortingEslintConfig(override = {}) {
  const config = {
    files: ['**/*.*(m)+(j|t)s*(x)'],
    name: pkgJson.name,
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
  };
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
