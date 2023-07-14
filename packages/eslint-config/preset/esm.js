module.exports = {
  overrides: [
    {
      env: {
        es2024: true,
      },
      extends: ['plugin:n/recommended'],
      files: ['*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx', '.mts', '.mtsx'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['unicorn'],
      rules: {
        'import/extensions': ['error', 'ignorePackages'],
        'n/no-missing-import': ['off'],
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/prefer-node-protocol': 'error',
      },
    },
  ],
};
