import eslintPluginMarkdownlint from 'eslint-plugin-markdownlint';
import eslintPluginMarkdownlintParser from 'eslint-plugin-markdownlint/parser.js';

export default [
  {
    files: ['**/*.md'],
    languageOptions: {
      parser: eslintPluginMarkdownlintParser,
    },
    plugins: { markdownlint: eslintPluginMarkdownlint },
    rules: {
      ...eslintPluginMarkdownlint.configs.recommended.rules,
    },
  },
];
