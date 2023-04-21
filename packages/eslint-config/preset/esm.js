module.exports = {
  overrides: [
    {
      extends: ['plugin:n/recommended'],
      files: ['*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
      },
      rules: {
        'n/file-extension-in-import': ['error'],
      },
    },
  ],
};
