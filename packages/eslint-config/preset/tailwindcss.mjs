import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss"
import {jsJSXFileSuffixes, typescriptJSXFileSuffixes} from "../utils/file-patterns.mjs"
export default [
  {
    files: [...jsJSXFileSuffixes, ...typescriptJSXFileSuffixes].map(ext => `*.${ext}`),
    plugins: {
        tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
      ...eslintPluginTailwindCSS.configs.recommended.rules,
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/no-custom-classname': 'error',
    },
  }
]