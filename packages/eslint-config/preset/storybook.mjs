import eslintPluginStorybook from "eslint-plugin-storybook"
import {jsJSXFileSuffixes, typescriptJSXFileSuffixes} from "../utils/file-patterns.mjs"
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReactHooks from "eslint-plugin-react-hooks"

export default [
  {
    files: [...jsJSXFileSuffixes, ...typescriptJSXFileSuffixes].map((ext) => `*.stories.${ext}`),
    plugins: {
      storybook: eslintPluginStorybook,
        'import': eslintPluginImport,
        'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.rules,
      'import/no-default-export': 'off',
      'import/no-named-export': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  }
]
