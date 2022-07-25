module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['eslint-plugin-import'],
      rules: {
        'import/extensions': 'error',
      },
    },
  ],
};
