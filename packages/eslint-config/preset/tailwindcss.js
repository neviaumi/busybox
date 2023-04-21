module.exports = {
  overrides: [
    {
      extends: ['plugin:tailwindcss/recommended'],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/no-custom-classname': 'error',
      },
    },
  ],
};
