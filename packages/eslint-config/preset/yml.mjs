import eslintPluginYml from "eslint-plugin-yml"
import eslintParserYml from "yaml-eslint-parser"

export default [
  {
    files: ['*.yml', '*.yaml'],
    languageOptions: {
      parser: eslintParserYml,
    },
    plugins: {
      yml: eslintPluginYml,
    },
    rules: {
      ...eslintPluginYml.configs.standard.rules,
      'yml/quotes': ['error', { prefer: 'single' }],
      'yml/sort-keys': 'error',
    },
  }
]