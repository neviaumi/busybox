import eslintPluginYml from 'eslint-plugin-yml';
import eslintParserYml from 'yaml-eslint-parser';

import pkgJson from './package.json' with { type: 'json' };

export default {
  files: ['**/*.yml', '**/*.yaml'],

  languageOptions: {
    parser: eslintParserYml,
  },
  name: pkgJson.name,
  plugins: {
    yml: eslintPluginYml,
  },
  rules: {
    ...eslintPluginYml.configs.standard.rules,
    'yml/quotes': ['error', { prefer: 'single' }],
    'yml/sort-keys': 'error',
  },
};
