import eslintPluginCypress from "eslint-plugin-cypress"
import {typescriptFileSuffixes, jsFileSuffixes} from "../utils/file-patterns.mjs"

export default [
  {
    plugins: {
      cypress: eslintPluginCypress,
    },
    files: [
        [...jsFileSuffixes, ...typescriptFileSuffixes].map((fileSuffix) => `*.cy.${fileSuffix}`),
            'cypress/**/*',
    ].flat(),
    languageOptions: {
      globals: {
        ...eslintPluginCypress.environments.globals
      }
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'cypress/no-pause': 'error',
      'no-unused-expressions': 'off',
    },
  }
]
