import eslintPluginCypress from 'eslint-plugin-cypress';

import {
  jsFileSuffixes,
  typescriptFileSuffixes,
} from '../utils/file-patterns.mjs';

export default [
  {
    files: [
      [...jsFileSuffixes, ...typescriptFileSuffixes].map(
        fileSuffix => `**/*.cy.${fileSuffix}`,
      ),
      'cypress/**/*',
    ].flat(),
    languageOptions: {
      globals: {
        ...eslintPluginCypress.environments.globals,
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'cypress/no-pause': 'error',
      'no-unused-expressions': 'off',
    },
  },
];
