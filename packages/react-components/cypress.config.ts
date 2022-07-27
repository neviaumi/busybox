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
      },
    },
  },
  screenshotOnRunFailure: false,
  video: false,
});
