module.exports = {
  overrides: [
    {
      extends: ['plugin:storybook/recommended'],
      files: ['*.stories.jsx', '*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-named-export': 'off',
      },
    },
  ],
};
