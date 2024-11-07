import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

import pkgJson from './package.json' with { type: 'json' };

const config = {
  files: [`**/*.+(j|t)sx`],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  name: pkgJson.name,
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
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export function useReactEslintConfig(override = {}) {
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
