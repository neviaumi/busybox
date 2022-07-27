const path = require('path');

const isDevelopment = ['development', 'test'].includes(process.env.NODE_ENV);

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    react: 'react', // Case matters here
    'react-dom': 'reactDOM', // Case matters here
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  output: {
    clean: true,
    filename: '[name].mjs',
    library: {
      type: 'module',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensionAlias: {
      '.js': ['.js', '.jsx', '.tsx', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
    },
  },
};
