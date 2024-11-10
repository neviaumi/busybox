import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';

import pkgJson from './package.json' with { type: 'json' };

export function useCodeSortingEslintConfig() {
  const config = {
    files: ['**/*.*(m)+(j|t)s*(x)'],
    name: pkgJson.name,
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
  };
  return config;
}
