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
        ...existingWebPackConfig,
        externals: {},
        module: {
          rules: [
            ...existingWebPackConfig.module.rules,
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
          ],
        },
      },
    },
  },
  screenshotOnRunFailure: false,
  video: false,
});
