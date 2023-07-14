module.exports = {
  overrides: [
    {
      extends: ['plugin:n/recommended'],
      files: ['*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx', '.mts', '.mtsx'],
      parserOptions: {
        ecmaVersion: '2021',
        sourceType: 'module',
      },
      rules: {
        'import/extensions': ['error', 'ignorePackages'],
      },
    },
  ],
};
