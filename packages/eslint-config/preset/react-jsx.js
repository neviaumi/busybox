module.exports = {
  overrides: [
    {
      extends: ['plugin:react/recommended'],
      files: ['*.jsx', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'react-refresh',
      ],
      rules: {
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
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      extends: ['plugin:testing-library/react'],
      files: ['*.test.jsx', '*.test.tsx', '*.spec.jsx', '*.spec.tsx'],
      plugins: [
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'testing-library',
      ],
      rules: {
        'react/display-name': 'off',
        // https://react-hooks-testing-library.com/usage/advanced-hooks#eslint-warning
        'react/prop-types': 'off',
        'testing-library/prefer-screen-queries': 'error',
      },
    },
  ],
};
