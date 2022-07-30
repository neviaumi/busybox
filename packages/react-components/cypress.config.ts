import { defineConfig } from 'cypress';

// @ts-expect-error JS file
import existingWebPackConfig from './webpack.config.cjs';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'react',
      webpackConfig: {
        externals: {},
        module: {
          rules: [
            ...existingWebPackConfig.module.rules,
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
              test: /\.(mp3)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          ],
        },
        resolve: {
          extensionAlias: {
            '.js': ['.js', '.jsx', '.tsx', '.ts'],
            '.jsx': ['.jsx', '.tsx'],
          },
        },
      },
    },
  },
  screenshotOnRunFailure: false,
  video: false,
});
