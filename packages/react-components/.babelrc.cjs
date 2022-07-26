const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ],
    ['@babel/preset-typescript', {}],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  sourceMaps: true,
};

module.exports = config;
