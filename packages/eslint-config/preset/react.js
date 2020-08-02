module.exports = {
  extends: ['plugin:react/recommended', 'eslint-config-prettier/react'],
  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
