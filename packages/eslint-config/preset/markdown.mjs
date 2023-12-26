import eslintPluginMarkdownlint from "eslint-plugin-markdownlint";
import eslintPluginMarkdownlintParser from "eslint-plugin-markdownlint/parser.js";

export default [
  {
    files: ['*.md'],
    plugins: {markdownlint: eslintPluginMarkdownlint},
    languageOptions: {
      parser: eslintPluginMarkdownlintParser
    },
    rules: {
      ...eslintPluginMarkdownlint.configs.recommended.rules
    }
  }
]