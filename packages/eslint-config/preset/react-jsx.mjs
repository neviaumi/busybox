import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import {
  jsJSXFileSuffixes,
  jsJSXTestFilePatterns,
  typescriptJSXFileSuffixes,
  typescriptJSXTestFilePattern,
} from '../utils/file-patterns.mjs';

export default [
  {
    files: [...jsJSXFileSuffixes, ...typescriptJSXFileSuffixes].map(
      ext => `**/*.${ext}`,
    ),
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': 'error',
      'react/jsx-sort-props': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: typescriptJSXFileSuffixes.map(ext => `**/*.${ext}`),
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: [...typescriptJSXTestFilePattern, ...jsJSXTestFilePatterns].map(
      ext => `**/*.${ext}`,
    ),
    plugins: {
      'testing-library': eslintPluginTestingLibrary,
    },
    rules: {
      'react/display-name': 'off',
      // https://react-hooks-testing-library.com/usage/advanced-hooks#eslint-warning
      'react/prop-types': 'off',
      'testing-library/prefer-screen-queries': 'error',
    },
  },
];
