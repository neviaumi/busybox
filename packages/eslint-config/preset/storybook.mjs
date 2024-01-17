import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginStorybook from 'eslint-plugin-storybook';

import {
  jsJSXFileSuffixes,
  typescriptJSXFileSuffixes,
} from '../utils/file-patterns.mjs';

export default [
  {
    files: [...jsJSXFileSuffixes, ...typescriptJSXFileSuffixes].map(
      ext => `**/*.stories.${ext}`,
    ),
    plugins: {
      import: eslintPluginImport,
      'react-hooks': eslintPluginReactHooks,
      storybook: eslintPluginStorybook,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.rules,
      'import/no-default-export': 'off',
      'import/no-named-export': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
