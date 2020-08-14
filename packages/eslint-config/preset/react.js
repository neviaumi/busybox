module.exports = {
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier/react',
        'plugin:testing-library/react',
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        'react/display-name': 'off',
        // https://react-hooks-testing-library.com/usage/advanced-hooks#eslint-warning
        'react/prop-types': 'off',
      },
    },
  ],
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'testing-library',
  ],
};
