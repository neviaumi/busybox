module.exports = {
  overrides: [
    {
      extends: ['plugin:tailwindcss/recommended'],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'tailwindcss/no-custom-classname': 'error',
      },
    },
  ],
};
