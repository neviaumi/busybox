module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-prettier/react',
    'plugin:testing-library/react',
  ],
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'testing-library',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        // https://react-hooks-testing-library.com/usage/advanced-hooks#eslint-warning
        'react/prop-types': 'off',
        'react/display-name': 'off',
      },
    },
  ],
};
