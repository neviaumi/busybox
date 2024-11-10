import eslintPluginMarkdownlint from 'eslint-plugin-markdownlint';
import eslintPluginMarkdownlintParser from 'eslint-plugin-markdownlint/parser.js';

import pkgJson from './package.json' with { type: 'json' };

export function useMarkdownEslintConfig(override = {}) {
  const mdConfig = {
    files: ['**/*.md'],
    languageOptions: {
      parser: eslintPluginMarkdownlintParser,
    },
    name: pkgJson.name,
    plugins: { markdownlint: eslintPluginMarkdownlint },
    rules: {
      ...eslintPluginMarkdownlint.configs.recommended.rules,
    },
  };
  return Object.assign(mdConfig, {
    ...override,
    rules: {
      ...mdConfig.rules,
      ...override.rules,
    },
  });
}
