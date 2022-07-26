module.exports = {
  overrides: [
    {
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      files: ['*.cy.tsx', '*.cy.jsx', 'cypress/**/*'],
      plugins: ['cypress'],
      rules: {
        'cypress/no-pause': 'error',
        'no-unused-expressions': 'off',
      },
    },
  ],
};
