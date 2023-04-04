module.exports = {
  overrides: [
    {
      extends: ['plugin:markdownlint/recommended'],
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
    },
  ],
};
