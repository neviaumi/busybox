module.exports = {
  overrides: [
    {
      extends: ['plugin:react/recommended'],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-sort-props': 'error',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      extends: ['plugin:testing-library/react'],
      files: ['*.test.*'],
      rules: {
        'react/display-name': 'off',
        // https://react-hooks-testing-library.com/usage/advanced-hooks#eslint-warning
        'react/prop-types': 'off',
        'testing-library/prefer-screen-queries': 'error',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'testing-library',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
