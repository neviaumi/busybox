module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@angular-eslint/recommended',
        // This is required if you use inline templates in Components
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      files: ['*.ts'],
      parserOptions: {
        createDefaultProgram: true,
        project: ['tsconfig.app.json', 'tsconfig.spec.json'],
      },
      rules: {
        '@angular-eslint/no-attribute-decorator': 'error',
        'dot-notation': 'off',
        'max-params': 'off',
        'no-useless-constructor': 'off',
      },
    },
    {
      extends: ['plugin:@angular-eslint/template/recommended'],
      files: ['*.html'],
    },
  ],
};
