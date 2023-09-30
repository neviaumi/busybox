export default () => ({
  presets: [
    [
      '@babel/preset-typescript',
      {
        rewriteImportExtensions: true,
      },
    ],
  ],
});
