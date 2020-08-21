module.exports = () => ({
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules: false }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: 'commonjs',
        shippedProposals: true,
        targets: {
          node: '12',
        },
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
  ],
  sourceMaps: 'inline',
});
