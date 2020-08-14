module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-prettier/react',
    'plugin:testing-library/react',
  ],
  overrides: [
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
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
