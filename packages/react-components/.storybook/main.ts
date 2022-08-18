import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const config: StorybookViteConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: [
          { find: /^roughjs(.*)/, replacement: './node_modules/roughjs$1.js' },
        ],
      },
    });
  },
  webpackFinal() {
    throw new Error('Should not loaded webpack');
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
